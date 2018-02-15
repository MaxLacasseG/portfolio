let bdd = require('mongoose');
let Schema = bdd.Schema;
let ProjetModele = new Schema({
    "titre": {type:String, required:true},
    "titre-court": {type:String, required:true},
    "date-creation":Date,
    "categorie": {type:String,enum:["web", "jeux-video", "multimedia"], required:true},
    "image": {type:[String], required:true},
    "description": {type:String, required:true},
    "tags": [String],
    "like": {type:Number, min:0},
    "lien": String,
    "temps": Number
});

Projet = bdd.model('Projet', ProjetModele);
module.exports = Projet;