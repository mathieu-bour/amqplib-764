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
node index.js 100000
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
577 | }
578 |
579 | // Usual frame accept mode
580 | function mainAccept(frame) {
581 |   var rec = this.channels[frame.channel];
582 |   if (rec) { return rec.channel.accept(frame); }
                          ^
TypeError: null is not a function
      at mainAccept (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:582:21)
      at go (/Users/acuminous/Development/amqplib-764/node_modules/amqplib/lib/connection.js:434:11)
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
