const amqplib = require('amqplib');

const size = parseInt(process.argv[2], 10);
const content = Buffer.from(new Array(size).fill('x').join(''));

(async () => {
  await publish();
  await get();
  console.log('OK');  
})();

async function publish() {
  const connection = await amqplib.connect('amqp://localhost:5672')
  const channel = await connection.createChannel();
  await channel.assertQueue('q764');
  await channel.purgeQueue('q764');
  channel.sendToQueue('q764', content);
  await channel.close();
  await connection.close();
}

async function get() {
  const connection = await amqplib.connect('amqp://localhost:5672');
  const channel = await connection.createChannel();
  await channel.get('q764');
  await channel.close();
  await connection.close();
}
