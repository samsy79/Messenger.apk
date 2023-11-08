require("dotenv").config;
const bcrypt = require("bcryptjs");
const Mail = require("../facades/mail");
const Message = require("../models/message");
const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require("../config/Confidentials");


async function SendMessage(req,res,next){
    try {
       
    const contenu =req.body.contenu;
    const sender_id =req.body.sender_id;
    const receiver_id=req.body.receiver_id;
    const conversation_id = req.params.conversation_id
    if(!sender_id||!contenu||!receiver_id){
        res.status(400).send ('all fiels are require')
    }
            console.log('toto');
            const newMessage = new Message({       
                contenu:contenu,
                sender_id: sender_id,
                receiver_id:receiver_id,
                conversation_id : conversation_id,
                date_envoi: new Date
            });
            await newMessage.save();
            res.status(201).json(newMessage);

    } catch(err) {

        res.status(400).send('something went wrong')
    }

}
async function getAllMessage(req,res,next){
    try {
    const allMessage = await User.find();
            res.status(201).json(allMessage);

    } catch(err) {

        res.status(400).send('something went wrong')
    }

}
async function getOneMessage(req,res,next){
    try {
        const sender_id = req.body.sender_id
        const receiver_id=req.body.receiver_id
    const conversation_id = req.params.conversation_id
    if(!conversation_id||!sender_id||!receiver_id){
        res.status(400).send ('all fiels are require')
    }
   
        const oneMessage = await Message    .find({conversation_id,sender_id,receiver_id});
        if(oneMessage){
            res.status(201).json(oneMessage);
        }
        else if (!oneMessage){
            res.status(400).json('Message are empty')
        }

    } catch(e) {

        res.status(400).send('something went wrong') 
    }

}
async function getSenderMessage(req,res,next){
    try {
       
    const sender_id =req.body.sender_id;

    if(!sender_id){
        res.status(400).send ('all fields are require')
    }
    const SenderMessage = await User.find({sender_id:sender_id});
            res.status(201).json(SenderMessage);

    } catch(err) {

        res.status(400).send('something went wrong')
    }

}
async function getReceiverMessage(req,res,next){
    try {
       
    const receiver_id =req.body.receiver_id;

    if(!receiver_id){
        res.status(400).send ('all fields are require')
    }
    const ReceiverMessage = await User.find({sender_id:sender_id});
            res.status(201).json(ReceiverMessage);

    } catch(err) {

        res.status(400).send('something went wrong')
    }

}


module.exports = {SendMessage,getAllMessage,getOneMessage,  getSenderMessage,getReceiverMessage};