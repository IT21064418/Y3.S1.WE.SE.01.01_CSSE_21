const amqp = require('amqplib');
const { addDelivery } = require('../controllers/userController');

var channel, connection

exports.connect = async() => {

    const amqpServer = "amqp://guest:guest@rabbitmq:5672";
    
    try{
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("USER");
        console.log("amqp server running on:",amqpServer);
    }catch(error){
        console.log(error);
    }

}

exports.getChannel = () => {
    return channel;
};

exports.consumefromQueue = () => {
    channel.consume("USER", data => {
        const { userId, userDelivery } = JSON.parse(data.content);
        console.log(userId, userDelivery);
        channel.ack(data);
        addDelivery(userId, userDelivery);
    });
} 