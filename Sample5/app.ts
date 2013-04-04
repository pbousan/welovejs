///<reference path='node.d.ts' />

import http = module("http")
import url = module("url")
import routes = module("./routes/index")
import db = module("./db")
import express = module("express")

var app = express.createServer();

// Configuration
app.configure(() => {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', () => {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', () => {
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);

app.get('/scores/newscore', (req, res) => {
    routes.newscoreget(req, res);    
});

app.post('/scores/newscore', (req, res) => {
   routes.newscorepost(req, res);
});


// Start the app
app.listen(3000, () => {
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;