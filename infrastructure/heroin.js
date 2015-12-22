var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var test = require('./test.js');
var prod = require('./prod.js');

configurator(test);
configurator(prod);