var express = require('express');
const  mongoose  = require('mongoose');
const { ref } = require('vue');
const User = require('./user');


const RechercheSchema = new mongoose.Schema({
    mot_cle:{
        type:String,
        required:true
    },
    utilisateur_id:{
        type:String,
        required:true,
        ref: User
    },   
});


const Recherche = mongoose.model('recherche',RechercheSchema)
 /* GET users listing. */


module.exports = Recherche;