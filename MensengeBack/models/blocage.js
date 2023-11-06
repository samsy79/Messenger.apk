var express = require('express');
const  mongoose  = require('mongoose');
const { ref } = require('vue');
const User = require('./user');


const BlocageSchema =  new mongoose.Schema({
    date_Blocage:{
        type:Date,},
    utilisateur_id:{
        type:Object,
        required:true,
        ref: User
    },
    utilisateur_bloque_id :{
        type:String,
        required:true,
        ref:User
    },
   
});


const Blocage = mongoose.model('blocage', BlocageSchema)
 /* GET users listing. */


module.exports = Blocage;