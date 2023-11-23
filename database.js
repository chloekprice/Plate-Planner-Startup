const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

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

async function createUserProfile(name) {
    const success = await client.db(dbName).collection(colName).insertOne(name);
    return success;
} 

module.exports = { saveList, getShoppingList, createUserProfile, clearList };