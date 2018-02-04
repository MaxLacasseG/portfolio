/*jshint esversion: 6 */
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    var data = {test:"test1"};
    res.render('index', data);
});

app.get('/web/:travail', (req,res)=>{
    var data = {test:req.params.travail};
    res.render('index', data);
});

app.listen(8000);