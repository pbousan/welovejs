
var db = require("../db")
function index(req, res) {
    db.getScores(function (scores) {
        res.render('index', {
            title: 'Highscores',
            scores: scores
        });
    });
}
exports.index = index;
;
function newscoreget(req, res) {
    res.render('newscore', {
    });
}
exports.newscoreget = newscoreget;
;
function newscorepost(req, res) {
    var newscore = new db.Score();
    newscore.user = req.param('user');
    newscore.score = req.param('score');
    db.addScore(newscore, function (r) {
        res.redirect('/');
    });
}
exports.newscorepost = newscorepost;
;
