require("dotenv").config;
const bcrypt = require("bcryptjs");
const Mail = require("../facades/mail");
const blocage = require("../models/blocage");
const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require("../config/Confidentials");

async function Blocage(req,res,next){

    const utilisateur_id = req.body .utilisateur_id
    const utilisateur_bloque_id = req.body.utilisateur_bloque_id;
    if (!utilisateur_id||!utilisateur_bloque_id){
        res.status(400).json("All fields are require")
       
    }
    const bloqués = await blocage.find({utilisateur_id,utilisateur_bloque_id})
    if (bloqués){
        res.status(400).json("User are already lock you want to unlock the user?")
    }
    else{
        const newBloque = new blocage({
            utilisateur_bloque_id:utilisateur_bloque_id,
            utilisateur_id:utilisateur_id,
            date_Blocage:new Date

        })
        res.status(200).json('User are succesfully lock ')
    }
}
module.exports ={Blocage}