require("dotenv").config;
const bcrypt = require("bcryptjs");
const Mail = require("../facades/mail");
const InfoUser = require("../models/infoUser");
const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require("../config/Confidentials");


async function PersoInfo(req,res,next){
const utilisateur_id =req.body.utilisateur_id;
const localisation = req.body.localisation;
const birthday = req.body.birthday;
const profession = req.body.profession;
const tel = req.body.tel ;
const situation = req.body.situation;
 

if (!utilisateur_id||!localisation||!birthday||!profession||!tel||!situation){
    res.status(400).json('All fields are require')
}
else{
  const loc = await InfoUser.findOne({utilisateur_id:utilisateur_id,localisation:localisation}) 
  if (loc){
    res.status(400).json('Locaisation already exist ')
  }
  const anif = await InfoUser.findOne({utilisateur_id:utilisateur_id,birthday:birthday}) 
  if (anif){
    res.status(400).json('birthday  already exist ')
  }
  const Prof= await InfoUser.findOne({utilisateur_id:utilisateur_id,profession:profession}) 
  if (Prof){
    res.status(400).json('Profession   already exist ')
  }
  const Phone= await InfoUser.findOne({utilisateur_id:utilisateur_id,tel:tel}) 
  if (Phone){
    res.status(400).json('tel   already exist ')
  }
  const sti= await InfoUser.findOne({utilisateur_id:utilisateur_id,situation:situation}) 
  if (sti){
    res.status(400).json('situation   already exist ')
  }
  const newInfoUser = new InfoUser({       
    utilisateur_id :utilisateur_id,
 localisation :localisation,
 birthday :birthday,
 profession: profession,
 tel : tel ,
 situation : requiresituation
});
await newInfoUser.save();
res.status(201).json(newInfoUser);
}


}

module.exports ={PersoInfo}

