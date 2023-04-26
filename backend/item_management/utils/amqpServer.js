const amqp = require('amqplib');
const { addReview } = require('../controllers/itemscontroller');

var channel, connection

exports.connect = async() => {

    const amqpServer = "amqp://guest:guest@localhost:5672";

    try{
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("ITEMS");
        console.log("amqp server running on:",amqpServer);
    }catch(error){
        console.log(error);
    }

}

exports.getChannel = () => {
    return channel;
};

exports.consumefromQueue = () => {
    channel.consume("ITEMS", data => {
        const { productID, itemReview } = JSON.parse(data.content);
        console.log(productID, itemReview);
        channel.ack(data);
        addReview(productID, itemReview);
    });
} 