var mongodb = require('mongodb')
var server = new mongodb.Server('localhost', 27017, {
    auto_reconnect: true,
    safe: false
}, {
});
var db = new mongodb.Db('highscores', server);
db.open(function () {
});
var Score = (function () {
    function Score() { }
    return Score;
})();
exports.Score = Score;
function getScores(callback) {
    db.collection('scores', function (error, scores_collection) {
        if(error) {
            console.error(error);
            return;
        }
        scores_collection.find({
        }).toArray(function (error, result) {
            if(error) {
                console.error(error);
                return;
            }
            callback(result);
        });
    });
}
exports.getScores = getScores;
function addScore(newscore, callback) {
    db.collection('scores', function (error, scores_collection) {
        if(error) {
            console.error(error);
            return;
        }
        scores_collection.insert({
            "user": newscore.user,
            "score": newscore.score
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
