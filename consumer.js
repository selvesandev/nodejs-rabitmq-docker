const amqp = require("amqplib");
connect();
async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        // const result = await channel.assertQueue("jobs");
        channel.consume("jobs", message => {
            //parsing the data from the buffer.
            console.log(JSON.parse(message.content.toString()));
            channel.ack(message);
        });
        console.log('Listening to consume message');
    } catch (error) {
        console.log(error);
    }
}