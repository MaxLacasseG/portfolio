/*jshint esversion: 6 */
var express = require('express');
var app = express();
var projetCtrl = require('./controlers/projets_controleur');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

projetCtrl(app);

app.listen(8000);