var app = require('./app')();

var server = app.listen(process.env.PORT || 5000, function() {
    console.log("Express server listening on port %d", server.address().port);
});
