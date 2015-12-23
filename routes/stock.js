module.exports = function(repository) {
    return {
        update: function(req, res, next) {
            var book = {
                isbn: req.body.isbn,
                count: req.body.count
            };

            repository
                .update(book)
                .then(function(result) {
                    res.status(200).json(book);
                })
                .catch(function(err) {
                    next(err);
                });
        },
        fetchOne: function(req, res, next) {
            var book = {
                isbn: req.params.isbn
            };

            repository
                .fetchOne(book)
                .then(function(result) {
                    if(result) {
                        res.format({
                            'text/html': function() {
                                res.send('<div>' + result.count + ' copies left</div>');
                            },
                            'default': function() {
                                res.status(200).json(result);
                            }
                        });
                    } else {
                        next();
                    }
                })
                .catch(function(err) {
                    next(err);
                });
        },
        fetchAll: function(req, res, next) {
            repository
                .fetchAll()
                .then(function(result) {
                    res.status(200).json(result);
                })
                .catch(function(err) {
                    next(err);
                });
        }
    };
};