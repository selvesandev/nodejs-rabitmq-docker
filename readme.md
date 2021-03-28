# Rabbit MQ Advance Message Queue Protocol (AMQP)

## Run the rabbit MQ in your docker container

```docker
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

Here we are running a container name rabbitmq on port 5672 with rabbitmq image.

## Node Publisher Setup

Since the `rabbit mq` uses the `amqp` protocol. This protocol has a lot of clients and node js has the client there import the nodejs's `amqp` client.

```node
//npm install amqplib

const amqp = require("amqplib"); // promise based library.
```

Now create the connection to the rabbit mq server which is running on port 5672.

### Aknowledgement (prevent the receiving same message again and again.)

Telling the server that the consumer has received the sent message.
