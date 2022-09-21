const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const express = require('express');
const path = require('path');
const app = express();

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
const todos = [...originTodos];

// READ
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// CREATE
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: `todo-${todos.length + 1}`,
    doit: req.body.doit,
    done: false,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// UPDATE
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find((todo) => todo.id === req.params.id);
  if (!todo) {
    return res.status(404);
  }
  todo.done = !todo?.done;
  res.json(todo);
});

// DELETE
app.delete('/api/todos/:id', (req, res) => {
  let deleteIndex = todos.findIndex((todo) => todo.id === req.params.id);
  if (deleteIndex < 0) {
    return res.status(404);
  }
  todos.splice(deleteIndex, 1);
  res.json(todos);
});
