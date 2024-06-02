# amqplib-764

## Environment
1. amqplib v0.10.4
2. Node.js v20.10.0
3. Bun v1.1.12
4. RabbitMQ rabbitmq:3.12.9-management-alpine
5. Docker 20.10.13, build a224086
6. Darwin Kernel Version 23.4.0: Fri Mar 15 00:11:05 PDT 2024; root:xnu-10063.101.17~1/RELEASE_X86_64

## Steps to reproduce

```
git clone git@github.com:acuminous/amqplib-764.git
cd amqplib-764
npm i
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12.9-management-alpine
```

```
node index.js 10000
OK
```

```
node index.js 20000
OK
```

```
node index.js 50000
OK
```

```
node index.js 200000
OK
```

```
bun index.js 10000
OK
```

```
bun index.js 20000
344 |       if (this.pending.length > 0) {
345 |         var send = this.pending.shift();
346 |         this.reply = send.reply;
347 |         this.sendImmediately(send.method, send.fields);
348 |       }
349 |       return reply(null, f);
                   ^
TypeError: reply is not a function. (In 'reply(null, f)', 'reply' is null)
      at /Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/channel.js:349:14
      at mainAccept (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:582:21)
      at go (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:434:11)
      at emit (node:events:180:95)
      at emitReadable_ (node:stream:1957:53)
```

```
bun index.js 50000
50 | function parseFrame(bin, max) {
51 |   var fh = frameHeaderPattern(bin);
52 |   if (fh) {
53 |     var size = fh.size, rest = fh.rest;
54 |     if (size > max) {
55 |       throw new Error('Frame size exceeds frame max');
                 ^
error: Frame size exceeds frame max
      at parseFrame (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/frame.js:55:13)
      at recvFrame (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:559:17)
      at go (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:433:27)
```

```
bun index.js 200000
54 |     if (size > max) {
55 |       throw new Error('Frame size exceeds frame max');
56 |     }
57 |     else if (rest.length > size) {
58 |       if (rest[size] !== FRAME_END)
59 |         throw new Error('Invalid frame');
                   ^
error: Invalid frame
      at parseFrame (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/frame.js:59:15)
      at recvFrame (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:559:17)
      at go (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:433:27)
```
