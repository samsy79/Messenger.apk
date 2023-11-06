var express = require('express');
const  mongoose  = require('mongoose');
const User = require('./user');


const InfoUserSchema = new mongoose.Schema({
   localisation :{
        type:String,
        required:true
    },
    birthday:{
        type:Date
    },

    profession:{
        type:String,
    },
    tel:{
        type:Number
    },
    situation:{
        type:String
    },
    utilisateur_id:{
        type:String,
        required:true,
        ref:User
    },

   
});


const InfoUser = mongoose.model('infosUser', InfoUserSchema)
 /* GET users listing. */


module.exports = InfoUser;