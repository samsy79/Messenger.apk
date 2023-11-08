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
    const bloqués = await blocage.findOne({utilisateur_id,utilisateur_bloque_id})
    if (bloqués){
        res.status(400).json("User are already lock you want to unlock the user?")
    }
    else{
        const newBloque = new blocage({
            utilisateur_bloque_id:utilisateur_bloque_id,
            utilisateur_id:utilisateur_id,
            date_Blocage:new Date

        }) 
        newBloque.save()
        res.status(200).json(newBloque)
    }
}
async function getBloque(req,res,next){

    const utilisateur_id = req.body.utilisateur_id
    const utilisateur_bloque_id = req.body.utilisateur_bloque_id
    if (!utilisateur_id||!utilisateur_bloque_id){
        res.status(400).json("All fields are require")
    }
   
    const bloqués = await blocage.findOne({utilisateur_id,utilisateur_bloque_id})
    const bloqués2 = await blocage.findOne({utilisateur_id:utilisateur_bloque_id,utilisateur_bloque_id:utilisateur_id})
    console.log(bloqués);
    console.log(bloqués2);
    if (bloqués){   
        res.status(200).json(bloqués)
    }
    else if(bloqués2){
        res.status(200).json(bloqués2)
    }
    else if(!bloqués){
        res.status(404).send("Nothing here ")
    }
    else if(!bloqués2){
        res.status(400).send("Nothing here ")
    }
    else{
        res.status(500).json('Something Went wrong ')
    }
}

async function unlock (req,res,next){

    const utilisateur_id = req.params.id1
    const utilisateur_bloque_id = req.params.id2;
    if (!utilisateur_id||!utilisateur_bloque_id){
        res.status(400).json("All fields are require")
       
    }
   
    const bloqués = await blocage.findOneAndDelete({utilisateur_id,utilisateur_bloque_id})
    const bloqués2 = await blocage.findOneAndDelete({utilisateur_id:utilisateur_bloque_id,utilisateur_bloque_id:utilisateur_bloque_id})
    if (!bloqués){
        res.status(200).json(bloqués)
    }
    else if(!bloqués2){
        res.status(200).json(bloqués2)
    }

    else{
        res.status(500).json('Something Went wrong ')
    }


}
module.exports ={Blocage,getBloque,unlock}