// Mongo
import mongodb = module('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true}, {})
var db = new mongodb.Db('highscores', server);
db.open(function() {});

export interface Score {
    _id: string;
    score : number;
}

export function getScores(callback: (scores: Score[]) => void) {
    db.collection('scores', function(error, scores_collection) {
        if(error) { console.error(error); return; }
        scores_collection.find({}).toArray(function(error, scoresobj) {
           if(error) { console.error(error); return; }
           callback(scoresobj);
        });
    });
}


export function addScore(name : string, score : number, callback: (result: any)=> void){
    db.collection('scores', function(error, scores_collection) {
        if (error) { console.error(error); return; }
        scores_collection.insert({"name" : name, "score" : score }, function(error, result) {
                if(error) { console.error(error); return; }
                callback(result);
            })
        });
}