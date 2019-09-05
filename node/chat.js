const net = require('net');
var chatServer = net.createServer();
chatServer.on('connection', function(client) {
  client.write('hi\n');
  client.on('data', function(data) {
    console.log(data);
  })
})

chatServer.listen(8000, () => {
  console.log('server is running at 8000');
});