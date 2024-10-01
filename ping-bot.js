const http = require('http');

// The URL of your Replit bot
const replitBotUrl = 'https://your-replit-url.repl.co'; // Replace with your Replit URL

setInterval(() => {
    http.get(replitBotUrl, (res) => {
        console.log(`Pinged Replit bot: ${res.statusCode}`);
    }).on('error', (err) => {
        console.error(`Error pinging Replit bot: ${err.message}`);
    });
}, 1000); // Ping every second

// Start a simple HTTP server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ping bot is running!\n');
}).listen(process.env.PORT || 3000, () => {
    console.log('Ping server running!');
});
