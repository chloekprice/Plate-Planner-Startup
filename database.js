const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const groceryListsCollection = db.collection('grocery_lists');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
}) ().catch((ex) => {
    console.log(`Unable to connect to the database with ${url} because ${ex.message}`);
    process.exit(1);
});

async function saveList(name, list){
    const result = await groceryListsCollection.updateOne({userName:name}, {$set: {groceryList:list}});
    return result;
}

function getShoppingList(name) {
    const query = groceryListsCollection.find({userName:name}, {_id:0, userName:0, groceryList:1});
    return query.groceryList;
}

module.exports = { saveList, getShoppingList };