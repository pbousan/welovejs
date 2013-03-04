import express = module("express")
import db = module("../db")

export function index(req: express.ExpressServerRequest, res: express.ExpressServerResponse){
    db.getScores(function(scores) {
        console.dir(scores);
        res.render('index', { title: 'Highscores', scores: scores })
    });
};