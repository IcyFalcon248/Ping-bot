const https = require('https'); // Change to https

// The URL of your Replit bot
const replitBotUrl = 'https://9b5dcba5-4010-4773-9b9b-02aab0d6bd46-00-1bbpjra9g180o.pike.replit.dev:3000/'; // Replace with your Replit URL

setInterval(() => {
    https.get(replitBotUrl, (res) => { // Use https.get instead of http.get
        console.log(`Pinged Replit bot: ${res.statusCode}`);
    }).on('error', (err) => {
        console.error(`Error pinging Replit bot: ${err.message}`);
    });
}, 1000); // Ping every second

// Start a simple HTTP server
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ping bot is running!\n');
}).listen(process.env.PORT || 3000, () => {
    console.log('Ping server running!');
});
