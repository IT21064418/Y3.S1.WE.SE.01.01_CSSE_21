const Order = require('../model/order');
const { connect, sendMessage } = require('../utils/amqpServer');

const createOrder = async(req, res) => {

    const buyerId = req.user;

    const {
        orderedItems,
        paymentId,
        amount,
        paymentMethod,
        buyerEmail,
        date,
        deliveryId,
        deliveryService,
        deliveryAddress,
        deliveryStatus
    } = req.body;

    const orderObj = {
        buyerId,
        orderedItems,
        paymentId,
        amount,
        paymentMethod,
        buyerEmail,
        date,
        deliveryId,
        deliveryService,
        deliveryAddress,
        deliveryStatus
    }

    try {
        const newOrder = new Order(orderObj);
        const order = await newOrder.save();

        if(order){
            return res.status(201).json({ order });
        }
    }catch(error){
        return res.status(400).json({ error });
    }

}

const getOrders = async (req, res) => {

    try{
        const orders = await Order.find({});
        return res.status(200).json({ orders });
    }catch (error) {
        return res.status(400).json({ error });
    }

};

const getOrder = async (req, res) => {

    try{
        let orderId = req.params.id;
        const order = await Order.findById(orderId);

        if(!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json({ order });
    }catch (error){
        return res.status(400).json({ error });
    }

};

const deleteOrder = async (req,res) => {

    try{
        let orderId = req.params.id;
        await Order.findByIdAndDelete(orderId).then(() => {
            return res.status(200).json("Order deleted");
        });
    }catch (error){
        return res.status(400).json({ error });
    }

}

const updateOrder = async(req, res) => {

    const deliveryStatus = req.body.deliveryStatus;
    const orderId = req.params.id;

    try{

        const order = await Order.findById(orderId);
        if(!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.deliveryStatus = deliveryStatus;

        const updateOrder = await Order.updateOne({_id: orderId}, { $set: { deliveryStatus: deliveryStatus }});

        if(!updateOrder){
            return res.status(400).json({error: 'No such data'});
        }

        deliveryId = order.deliveryId;

        const payload = { deliveryId, deliveryStatus };
        console.log(payload);
        prepForQueue("DELIVERY", payload);

        return res.status(200).json(updateOrder);

    }catch(error){
        return res.status(400).json({ error });
    }

}

async function prepForQueue(queueName, payload) {

    console.log(queueName, payload);

    try{
        sendMessage(queueName, payload)
    }catch(error){
        console.log(error);
    }

}

module.exports = {
    createOrder,
    getOrders,
    getOrder,
    deleteOrder,
    updateOrder
}