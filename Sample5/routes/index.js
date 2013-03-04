
var db = require("../db")
function index(req, res) {
    db.getScores(function (scores) {
        console.dir(scores);
        res.render('index', {
            title: 'Highscores',
            scores: scores
        });
    });
}
exports.index = index;
; ;

