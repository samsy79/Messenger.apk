var express = require('express');
const  mongoose  = require('mongoose');
const { ref } = require('vue');
const User = require('./user');


const MessageSchema = new mongoose.Schema({
    contenu :{
        type:String,
        required:true
    },
    date_envoi:{
        type:Date,
    },
    sender_id:{
        type:String,
        required:true,
        ref: User
    },
    receiver_id :{
        type:String,
        required:true,
        ref:User
    },
    conversation_id:{
        type:String,
        required:true,
        ref:User
    }
   
});


const Message = mongoose.model('messages', MessageSchema)
 /* GET users listing. */


module.exports = Message;