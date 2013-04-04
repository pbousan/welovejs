import express = module("express")
import db = module("../db")

export function index(req: express.ExpressServerRequest, res: express.ExpressServerResponse){
    db.getScores((scores) => {
        res.render('index', { 
        	title: 'Highscores', 
        	scores: scores })
    });
};

export function newscoreget(req: express.ExpressServerRequest, res: express.ExpressServerResponse){
	 res.render('newscore',{});   
};

export function newscorepost (req: express.ExpressServerRequest, res: express.ExpressServerResponse){
	var newscore = new db.Score()
	newscore.user = req.param('user');
	newscore.score = req.param('score');
 	db.addScore(newscore, (r) => {
        res.redirect('/');
    });
};
