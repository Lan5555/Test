const http = require('http');
const WebSocket = require('ws');
const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Player connected');

  ws.on('message', (message) => {
    // Broadcast the message to all players
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Listen for player disconnect
  ws.on('close', () => {
    console.log('Player disconnected');
  });
});

const port = 3000;
const ipAddress = 'localhost';// Replace with your local IP address
server.listen(port, ipAddress, () => {
  console.log(`Server is running at http://${ipAddress}:${port}`);
});
