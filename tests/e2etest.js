var app = require('./../app.js')({
    stockRepository: require('../repositories/memory/stock')
});

var request = require('supertest');
var _ = require('lodash');

function throwError(message) {
    throw new Error(message);
}

describe('GET /stock', function() {
    it('should fetch a collection', function(done) {
        request(app)
            .get('/stock')
            .expect('Content-Type', /json/)
            .expect(function(res) {
                if(!_.isArray(res.body)) {
                    throwError('is not array');
                }
            })
            .expect(200, done);
    });
});

describe('POST /stock', function() {
    it('should respond with data sent', function(done) {
        var json = {isbn: "12345", count: 10};
        request(app)
            .post('/stock')
            .send(json)
            .expect('Content-Type', /json/)
            .expect(json)
            .expect(200, done);
    });
});

describe('GET /stock/:id', function() {
    it('should fetch an item', function(done) {
        request(app)
            .get('/stock/12345')
            .expect('Content-Type', /json/)
            .expect(function(res) {
                if(!res.body) {
                    throwError('has no body');
                }
                if(res.body.isbn !== '12345') {
                    throwError('has incorrect identifier');
                }
            })
            .expect(200, done);
    });
});