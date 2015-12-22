var _ = require('lodash');

var collection = [];

module.exports = {
    update: function(book) {
        var model = _.findWhere(collection, {isbn: book.isbn});

        if(model) {
            _.assign(model, book);
        } else {
            collection.push(book);
        }

        return Promise.resolve();
    },
    fetchOne: function(book) {
        return Promise.resolve(_.findWhere(collection, {isbn: book.isbn}));
    },
    fetchAll: function() {
        return Promise.resolve(collection);
    }
};