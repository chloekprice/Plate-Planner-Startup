const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// Router for service endpoints
app.get('/', (req, res) => {
  res.send("welcome to plate planner!");
});

// Get grocery list
apiRouter.get('/grocery_list', async (req, res) => {
  let user = req.query.name;
  const userList = await DB.getShoppingList(user);
  // console.log(userList.groceryList);
  res.send(userList.groceryList);
});

// Save grocery list
app.post('/save_list', async (req, res) => {
  let userInfo = req.body;
  let name = userInfo['userName'];
  let list = userInfo['userList'];
  const save = await DB.saveList(name, list);
  res.send(save);
});

// Create User
app.post('/create_user', async (req, res) => {
  const create = await DB.createUserProfile(req.body);
  res.send(create);
});

// Clear grocery list
app.post('/clear_list', async (req, res) => {
  let userInfo = req.body;
  let name = userInfo['userName'];
  const clear = await DB.clearList(name);
  res.send(clear);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
