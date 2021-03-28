const amqp = require("amqplib");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const payload = { message: '' };

async function publishSomething() {
    readline.question("What do you want to publish?\n", message => {
        payload.message = message;
        connect(payload);
        // readline.close();
        publishSomething();
    });
}
publishSomething();
async function connect(payload) {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        channel.sendToQueue('jobs', Buffer.from(JSON.stringify({ ...payload })));
        console.log('Payload was sent successfully');
    } catch (error) {
        console.log(error);
    }
}


