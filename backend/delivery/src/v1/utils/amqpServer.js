const amqp = require('amqplib');
const { updateDelivery } = require('../controller/delivery-amqpServices');

var channel, connection //declare variable for amqp connection and channel

exports.connect = async() => {

    const amqpServer = "amqp://guest:guest@localhost:5672"; //amqp server

    try{
        connection = await amqp.connect(amqpServer); //create connection
        channel = await connection.createChannel(); //create channel
        await channel.assertQueue("DELIVERY"); //initilaize DELIVERY Queue
        console.log("amqp server running on:",amqpServer);
    }catch(error){
        console.log(error);
    }

}

//get data coming from the queue
exports.consumefromQueue = () => {
    channel.consume("DELIVERY", data => {
        const { deliveryId, deliveryStatus } = JSON.parse(data.content);//reconstruct data from the buffer
        console.log(deliveryId, deliveryStatus);
        channel.ack(data);//send acknowledege to the amqp server that the data is recieved
        updateDelivery(deliveryId, deliveryStatus);//send the data to the update delivery function
    });
}

exports.sendMessage = async (queueName, data) => {
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));//create a buffer and send data to the queue
    console.log(`Message sent to queue ${queueName}`);
}