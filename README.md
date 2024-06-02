# amqplib-764

## Environment
1. amqplib v0.10.4
2. Node.js v20.10.0
3. RabbitMQ rabbitmq:3.12.9-management-alpine
4. Docker 20.10.13, build a224086
5. Darwin Kernel Version 23.4.0: Fri Mar 15 00:11:05 PDT 2024; root:xnu-10063.101.17~1/RELEASE_X86_64

## Steps to reproduce

```
git clone git@github.com:acuminous/amqplib-764.git
cd amqplib-764
npm i
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12.9-management-alpine
node index.js
```
