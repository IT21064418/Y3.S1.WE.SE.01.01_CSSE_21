const amqp = require('amqplib');
const { updateDelivery } = require('../controller/delivery-amqpServices');

var channel, connection

exports.connect = async() => {

    const amqpServer = "amqp://guest:guest@localhost:5672";

    try{
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("DELIVERY");
        console.log("amqp server running on:",amqpServer);
    }catch(error){
        console.log(error);
    }

}

exports.consumefromQueue = () => {
    channel.consume("DELIVERY", data => {
        const { deliveryId, deliveryStatus } = JSON.parse(data.content);
        console.log(deliveryId, deliveryStatus);
        channel.ack(data);
        updateDelivery(deliveryId, deliveryStatus);
    });
}

exports.sendMessage = async (queueName, data) => {
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    console.log(`Message sent to queue ${queueName}`);
}