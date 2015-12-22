module.exports = function(options) {
    options = options || {};

    var express = require('express');
    var parser = require('body-parser');

    var middlewares = require('./middlewares');

    var app = express();

    var stockRepository = options.stockRepository || require('./repositories/mongo/stock');
    var stockRoutes = require('./routes/stock')(stockRepository);

    app.use(parser.json());

    if(process.env.NODE_ENV !== 'production') {
        app.use(middlewares.logRequest);
    }

    app.post('/stock', stockRoutes.update);
    app.get('/stock/:isbn', stockRoutes.fetchOne);
    app.get('/stock', stockRoutes.fetchAll);

    app.use(middlewares.clientError);
    app.use(middlewares.serverError);

    return app;
};