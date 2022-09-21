const http = require('http');
const HOST = 'localhost';
const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('안녕! Node.js 😉');
  }

  if (req.url === '/api/subjects') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        'HTML CSS ECMAScript(JavaScript) Node.js Express'.split(' ')
      )
    );
  }
});

server.listen(PORT, () => console.log(`웹 서버 구동 http://${HOST}:${PORT}`));
