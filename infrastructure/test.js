var _ = require('lodash');
var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var config = _.merge({}, require('./shared.js'), {
    name: 'book-inventory-s-test',
    domains: [
    ]
});

configurator(config);