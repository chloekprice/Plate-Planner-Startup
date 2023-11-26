const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const dbName = 'startup';
const colName = 'grocery_lists';
const listCollection = client.db('startup').collection('grocery_lists');

(async function testConnection() {
    await client.connect();
    await client.db('startup').command({ ping: 1 });
}) ().catch((ex) => {
    console.log(`Unable to connect to the database with ${url} because ${ex.message}`);
    process.exit(1);
});

async function saveList(name, list){
    const result = await client.db(dbName).collection(colName).updateOne({userName: name}, {$set: {groceryList: list}});
    return result;
}

async function getShoppingList(name) {
    return listCollection.findOne({userName:name});
}

async function clearList(name){
    const result = await client.db(dbName).collection(colName).updateOne({userName: name}, {$unset: {groceryList: ''}});
    return result;
}

async function createUserProfile(name, email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        userName: name,
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    const success = await client.db(dbName).collection(colName).insertOne(user);
    return success;
} 

function getUser(name) {
    return client.db(dbName).collection(colName).findOne({ userName: name });
  }

function checkUser(email) {
    return client.db(dbName).collection(colName).findOne({ email: email }); 
}

module.exports = { saveList, getShoppingList, createUserProfile, clearList, getUser, checkUser };