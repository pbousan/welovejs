// Mongo
import mongodb = module('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true, safe: false}, {})
var db = new mongodb.Db('highscores', server);
db.open(function() {});

export class Score {
    _id: string;
    user: string;
    score : number;
}

export function getScores(callback: (scores: Score[]) => void) {
    db.collection('scores', function(error, scores_collection) {
        if(error) { console.error(error); return; }
        scores_collection.find({}).toArray(function(error, result) {
           if(error) { console.error(error); return; }
           callback(result);
        });
    });
}

export function addScore(newscore : Score, callback: (result: any)=> void){
    db.collection('scores', function(error, scores_collection) {
        if (error) { console.error(error); return; }
        scores_collection.insert({"user" : newscore.user, "score" : newscore.score },
            (error, result) => {
                if(error) { console.error(error); return; }
                callback(result);
            })
        });
}