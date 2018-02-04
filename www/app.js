/*jshint esversion: 6 */
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + "/public"));

app.get('/', (req,res)=>{
    let data = {};
    data.infosPage={
        title:"Maxime Lacasse Germain | Portfolio",
        description:"Portfolio de Maxime Lacasse Germain contenant les dernières réalisations en web, jeux vidéo et multimédia.",
        robots:"INDEX, FOLLOW",
        keywords:"Web, jeux vidéo, portfolio"
    };
    res.render('index', {data:data});
});

app.get('/web',(req,res)=>{
    let data = {};
    data.infosPage={
        title:"",
        description:"",
        robots:"",
        keywords:""
    };
    res.render('web', data);
});

app.get('/jeuxvideo',(req,res)=>{
    let data = {};
    data.infosPage={
        title:"",
        description:"",
        robots:"",
        keywords:""
    };
    res.render('jeuxvideo', data);
});

app.get('/multimedias',(req,res)=>{
    let data = {};
    data.infosPage={
        title:"",
        description:"",
        robots:"",
        keywords:""
    };
    res.render('multimedia', data);
});

app.get('/bio',(req,res)=>{
    let data = {};
    data.infosPage={
        title:"",
        description:"",
        robots:"",
        keywords:""
    };
    res.render('bio', data);
});


app.listen(8000);