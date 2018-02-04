/*jshint esversion: 6 */
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + "/public"), function(req,res){
    console.log(req.url);
});

app.get('/', (req,res)=>{
    console.log(req.url);
    var data = {test:"test1"};
    res.render('index', data);
});

app.get('/web/:travail', (req,res)=>{
    var data = {test:req.params.travail};
    res.render('index', data);
});

app.listen(8000);