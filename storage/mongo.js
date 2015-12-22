var MongoClient = require('mongodb').MongoClient;

var dbUrl = process.env.DB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/book_inventory_service';
var connection = MongoClient.connect(dbUrl);

module.exports = connection;