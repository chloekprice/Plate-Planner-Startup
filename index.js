import express from "express";
const app = express();
const DB = require('./database.js');
const CAL = require('./public/calendar.js');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));


// Router for service endpoints
app.get('/', (req, res) => {
  res.send("welcome to plate planner!");
});

// Get grocery list
app.get('/grocery_list', async (req, res) => {
  let user = CAL.getUserName();
  const userList = DB.getShoppingList(user);
  res.send(userList);
});

// Add to grocery list
app.post('/save_list', (req, res) => {
  return res.json("Successful!")
});

app.get('/user_info', (req, res) => {
  let user_name = "Lisa";
  return res.json(user_name);
});

// Go to calendar page
app.get('/calendar.html', (req, res) => {
  res.sendFile("calendar.html", {root: 'public'});
});

// SubmitIngredients
app.get('/shopping_list.html', (req, res) => {
  res.sendFile("shopping_list.html", {root: 'public'});
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
