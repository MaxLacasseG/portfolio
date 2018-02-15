/*jshint esversion: 6 */
var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var projetCtrl = require('./controlers/projets_controleur');
var db;

//Connection à la bdd
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
    if (err) return console.log(err)
    db = database.db('projets');
    console.log("connecté");
    
    app.listen(8000, () => {
        console.log('Listening on 8000');
    });
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));

projetCtrl(app);

