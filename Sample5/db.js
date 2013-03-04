var mongodb = require('mongodb')
var server = new mongodb.Server('localhost', 27017, {
    auto_reconnect: true
}, {
});
var db = new mongodb.Db('highscores', server);
db.open(function () {
});
function getScores(callback) {
    db.collection('scores', function (error, scores_collection) {
        if(error) {
            console.error(error);
            return;
        }
        scores_collection.find({
        }).toArray(function (error, scoresobj) {
            if(error) {
                console.error(error);
                return;
            }
            callback(scoresobj);
        });
    });
}
exports.getScores = getScores;
function addScore(name, score, callback) {
    db.collection('scores', function (error, scores_collection) {
        if(error) {
            console.error(error);
            return;
        }
        scores_collection.insert({
            "name": name,
            "score": score
        }, function (error, result) {
            if(error) {
                console.error(error);
                return;
            }
            callback(result);
        });
    });
}
exports.addScore = addScore;

