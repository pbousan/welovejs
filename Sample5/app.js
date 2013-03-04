

var routes = require("./routes/index")
var db = require("./db")
var express = require("express")
var app = express.createServer();
app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
});
app.configure('development', function () {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});
app.configure('production', function () {
    app.use(express.errorHandler());
});
app.get('/', routes.index);
app.post('/insert/:user/:score', function (req, res) {
    console.log('inserting score...');
    db.addScore(req.params.user, req.params.score, function (r) {
        console.log('inserted.');
        res.redirect('/');
    });
});
app.listen(3000, function () {
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});
exports.App = app;

