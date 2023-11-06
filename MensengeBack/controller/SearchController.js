require("dotenv").config;
const bcrypt = require("bcryptjs");
const Mail = require("../facades/mail");
const Recherche = require("../models/user");
const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require("../config/Confidentials");

async function Search(req,res,next){
    try {
    const mot_cle = req.body
    if(!mot_cle){
        res.status(400).send ('all fiels are require')
    }
    else if (mot_cle === req.body.utilisateur_id){
          const Response = await Recherche.find({utilisateur_id:mot_cle});
          res.status(200).json(Response)
    }
    
    else if (mot_cle === req.body.username){
        const Response = await Recherche.find({username :mot_cle});
        res.status(200).json(Response)
    }
    else if (mot_cle === req.body.name){
        const Response = await Recherche.find({name :mot_cle});
        res.status(200).json(Response)
    }
    else if (mot_cle === req.body.email){
        const Response = await Recherche.find({email:mot_cle});
        res.status(200).json(Response)
    }
    else{
        res.status(400).json('User not found')
    }

    } catch(err) {

        res.status(400).send('something went wrong')
    }

}

module.exports = {Search};