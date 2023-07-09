const amqp = require('amqplib');

var channel, connection

exports.connect = async() => {

    const amqpServer = "amqp://guest:guest@rabbitmq:5672";

    try{
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("RATINGS");
        console.log("amqp server running on:",amqpServer);
    }catch(error){
        console.log(error);
    }

}

exports.sendMessage = async (queueName, data) => {
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    console.log(`Message sent to queue ${queueName}`);
}