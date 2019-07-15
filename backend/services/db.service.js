
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = (process.env.NODE_ENV === 'production') ? 
    'mongodb+srv://tom:64832195@cluster0-cszvt.mongodb.net/test?retryWrites=true&w=majority' 
    : 'mongodb://localhost:27017';

// Database Name
const dbName = 'survey_db';

var dbConn = null;

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(url, {useNewUrlParser: true});
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

module.exports = {
    connect,
    getCollection
}