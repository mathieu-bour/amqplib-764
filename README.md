# amqplib-764

## Prerequisits
1. Node.js v20.10.0
2. Docker 20.10.13, build a224086

## Steps to reproduce

```
git clone git@github.com:acuminous/amqplib-764.git
cd amqlib-764
npm i
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12.9-management-alpine
node index.js
```
