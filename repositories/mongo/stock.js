var storage = require('../../storage/mongo');

var COLLECTION_NAME = 'stock';

module.exports = {
    update: function(book) {
        return storage
            .then(function(db) {
                var collection = db.collection(COLLECTION_NAME);
                return collection.update({isbn: book.isbn}, book, {upsert: true});
            });
    },
    fetchOne: function(book) {
        return storage
            .then(function(db) {
                var collection = db.collection(COLLECTION_NAME);
                return collection.find(book).limit(1).next();
            })
    },
    fetchAll: function() {
        return storage
            .then(function(db) {
                var collection = db.collection(COLLECTION_NAME);
                return collection.find().toArray();
            })
    }
};