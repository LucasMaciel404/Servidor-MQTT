const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883;

server.listen(port, function () {
  console.log('Aedes MQTT broker running on port:', port);
});

aedes.on('client', function (client) {
  console.log('Client Connected:', client.id);
});

aedes.on('publish', function (packet, client) {
  if (client) {
    console.log('Message from client:', client.id);
  }
});

aedes.on('subscribe', function (subscriptions, client) {
  if (client) {
    console.log('Subscribe from', client.id, 'on', subscriptions);
  }
});

aedes.on('clientDisconnect', function (client) {
  console.log('Client Disconnected:', client.id);
});
