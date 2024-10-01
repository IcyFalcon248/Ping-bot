const https = require('https'); // Change to https

// The URL of your Replit bot
const replitBotUrl = 'https://renderbot-8mfq.onrender.com'; // Replace with your Replit URL

setInterval(() => {
    https.get(replitBotUrl, (res) => { // Use https.get instead of http.get
        console.log(`Pinged Replit bot: ${res.statusCode}`);
    }).on('error', (err) => {
        console.error(`Error pinging Replit bot: ${err.message}`);
    });
}, 10000); // Ping every 10 seconds

// Start a simple HTTP server
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ping bot is running!\n');
}).listen(process.env.PORT || 3000, () => {
    console.log('Ping server running!');
});
