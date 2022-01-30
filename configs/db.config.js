const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'myFirstDatabase';
const conxnURL = 'mongodb+srv://supa:test123456@cluster0.ydy3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const OID = mongodb.ObjectId; 

module.exports = {
    MongoClient,
    dbName,
    conxnURL,
    OID
}
