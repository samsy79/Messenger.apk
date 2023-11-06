var express = require('express');
const  mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    
email :{
    type:String,
    required:true,
    unique:true
},
password :{
    type:String,
    required:true,
    unique:true
},
name:{
    type:String,
    required:true
},
surname:{
    type:String
},
username:{
    type:String,
    required:true
},
code:{
   type: String,
   required:true
},
Verified :{
    type: Boolean,
    required:true
},
emailVerifyAt :{
    type:Date
}
});


const User= mongoose.model('users', UserSchema)
 


module.exports = User;


