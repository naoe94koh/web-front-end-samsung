const livereload = require('livereload');
const { MongoClient, ObjectId } = require('mongodb');
const connectLivereload = require('connect-livereload');
const express = require('express');
const path = require('path');
const app = express();

async function start() {
  const client = await MongoClient.connect(
    'mongodb://localhost:27017/demo-todos',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = client.db('demo-todos');

  let publicDir = path.join(__dirname, '../client/public');

  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(publicDir);
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

  /* Express + CRUD ----------------------------------------------------------- */

  const { todos: originTodos } = require('./db/todos');

  // READ
  app.get('/api/todos', async (req, res) => {
    const todos = await db.collection('todos').find({}).toArray();
    res.json(todos);
  });

  // CREATE
  app.post('/api/todos', async (req, res) => {
    const newTodo = {
      doit: req.body.doit,
      done: false,
    };

    const result = await db.collection('todos').insertOne(newTodo);

    res.json({
      ...newTodo,
      _id: result.insertedId,
    });
  });

  // UPDATE
  app.put('/api/todos/:id', async (req, res) => {
    const { id } = req.params;

    const todo = await db
      .collection('todos')
      .find({ _id: ObjectId(id) })
      .toArray();

    await db
      .collection('todos')
      .updateOne({ _id: ObjectId(id) }, { $set: { done: !todo[0].done } });

    const todos = await db.collection('todos').find({}).toArray();
    res.json(todos);
  });

  // DELETE
  app.delete('/api/todos/:id', async (req, res) => {
    const { id } = req.params;
    await db.collection('todos').deleteOne({ _id: ObjectId(id) });
    const todos = await db.collection('todos').find({}).toArray();
    res.json(todos);
  });
}

start();
