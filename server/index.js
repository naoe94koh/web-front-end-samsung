const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const express = require('express');
const path = require('path');
const app = express();

let publicDir = path.resolve('client/public');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch([publicDir]);
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.use(express.json());
app.use(express.static(publicDir));
app.use(connectLivereload());

const PORT = 3000;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
  res.send();
  // res.redirect('/hello');
});

app.get('/hello', (req, res) => {
  res.status(200);
  res.send('안녕! Node.js');
});

app.get('/api/members', (req, res) => {
  res.status(200);
  res.json(['yamoo9', 'designer']);
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Express 애플리케이션 http://${HOSTNAME}:${PORT}`);
});
