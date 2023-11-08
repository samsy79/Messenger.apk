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
  const loc = await InfoUser.findOne({utilisateur_id:utilisateur_id}) 
  if (loc){
    res.status(400).json('Locaisation already exist ')
  }
  else{
    const newInfoUser = new InfoUser({       
      utilisateur_id :utilisateur_id,
   localisation :localisation,
   birthday :birthday,
   profession: profession,
   tel : tel ,
   situation : situation
  });
  await newInfoUser.save();
  res.status(201).json(newInfoUser);
  }

  }
  


}
async function getInfo(req,res,next){
try {
   const id = req.params.id 
  if(!id){
    res.status(400).json('Tous les champs sont requis ')
  }
else{
  const user = await InfoUser.findOne({utilisateur_id:id}) 
  res.status(200).json(user)
}
  
} catch (error) {
   res.status(400).json("Something went wrong")
}
  

}

module.exports ={PersoInfo,getInfo}

