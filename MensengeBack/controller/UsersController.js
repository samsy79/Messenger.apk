require("dotenv").config;
const bcrypt = require("bcryptjs");
const Mail = require("../facades/mail");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require("../config/Confidentials");

//-----------------Avoir tous les utilisateur de ma base de données---------------------------------------
const getUsers = async function (req, res) {
  try {

  
    const users = await User.find({Verified:true});
    /* res.status(201).send(Users); */
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oups Something Wrong during recovery", error });
  }
};
const getOneUser = async function (req, res) {
  try {

  const user =req.params.id
    const users = await User.findOne({_id:user});
    /* res.status(201).send(Users); */
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oups Something Wrong during recovery", error });
  }
};

//--------------------pour faire une inscription--------------------------------------------------------------------
const register = async (req, res, next) => {
  try {
    //Enregistrement des infos saisies
    const email = req.body.email;
    const reqPassword = req.body.password;
    const reqName = req.body.name;
    const reqSurname = req.body.surname;
    const reqUsername = req.body.username;

    if (!email || !reqPassword ||!reqName||!reqSurname||!reqUsername ) {
      res.status(400).json({ message: "Bro you still have a lot left" });
    }
    //Verification de l'existence de l'utilisateur

    const alreadyExist = await User.findOne({ email });

   if (alreadyExist) {
      res.status(400).json({
        message: "Already exists ",
      });
    }
    else if(!alreadyExist){
    const hashFrequence = 10;
    const hashPassword = await bcrypt.hash(reqPassword, hashFrequence);
    //--------generation de code otp------------------------------------
    function generateRandomNumber() {
      const randomNumbers = Array(4)
        .fill(null)
        .map(() => Math.floor(Math.random() * 10));
      return randomNumbers.join("");
    }
    const randomNumber = generateRandomNumber();
    //--------------enrégistrement du random dans la base-----------------
    const hashCode = await bcrypt.hash(randomNumber, hashFrequence);
    console.log(randomNumber);
    
    const newUser = new User({
      email: email,
      password: hashPassword,
      name:reqName,
      surname:reqSurname,
      username:reqUsername,
      code: hashCode,
      Verified: false,
    });
    
    await Mail.to(newUser.email).send(
      `votre code de verification est le:${randomNumber}`
    );
    //Insersion du  nouvel utilisateur
    await newUser.save()
    
    //Génération de jeton Jwt
    const token = jwt.sign({ email: newUser.email }, secretKey, {
      expiresIn: expiresIn,
    });
    console.log(token);
    res.status(200).json({
      Message: "ようこそ : welcome among us",
      PersonalId: newUser,
      token: token,
    });
  }
}
 
  catch (error) {
    res
      .status(500)
      .json({ message: "Oups Something Wrong when registering", error });
  }
};
//-------------verification du code--------------------------------
const verify = async function (req, res, next) {
  const credentials = req.body.email;
  const userVerif = await User.findOne({ email: credentials });
  console.log(credentials);
  if (!credentials) {
    res.status(400).send({ message: "Something went wrong" });
  } else if (!userVerif) {
    res.status(400).send({ message: "email introuvable" });
  } else if (userVerif) {
    const email = req.body.email;
    const reqCode = req.body.code;
    const codeVerify = await bcrypt.compare(reqCode, userVerif.code);
    console.log(codeVerify);

    if (codeVerify) {
      await User.findOneAndUpdate(
        userVerif,
        {
          $set: {
            Verified: true,
            emailVerifyAt: new Date(),
          },
        },
        { new: true }
      );

      res.status(200).send({ message: "succes" });
    } else if (!codeVerify) {
      res.status(400).send({ message: "Code incorrect" });
    }
  }
};

//----------------pour se connecter -------------------------------------------
const login = async (req, res, next) => {
  try {
    const users = User;
    //---------enrégistrement des infos entrés par 'utilisateur ------------------------------

    const email = req.body.email;
    const reqPassword = req.body.password;
    //--------------vérification de l'existence de l'utilisateur-------------------------------------------
    if (!email || !reqPassword) {
      res.status(400).json({ message: "Bro you still have a lot left" });
    }
    const userExist = await User.findOne({email});
    //validation des informations saisies
    if (!userExist) {
      res.status(400).json({ message: "Review your login details" });
    }
    const realPass = userExist.password;
    const passwordIsVerif = await bcrypt.compare(reqPassword, realPass);

   if (!passwordIsVerif) {
      res.status(400).json({ message: "Review your login details " });
    }
    //generer un token d'auth
    else if (!userExist.Verified) {
      res.status(400).send({ message: "Accès denied compte non vérifié" });
    } else {
      const token = jwt.sign(
        {
          id: userExist._id,
          email: userExist.email,
          name: userExist.name,
         surname: userExist.surname,
         username: userExist.username
        },
        secretKey,
        {
          expiresIn: expiresIn,
        }
      );
      req.token = token;
      res.status(201).json({
        message: "You are now connected",
        token: token,
      });
    }
  } catch (e) {
    res.json({ message: "Oups Something Wrong when connecting" });
  }
};
//-------------------Avoir tous les informations sur l'utlisateur connecté-----------------------------
const allInfo = async (req, res, next) => {
  const token = req.header;
  console.log(token);
  if (token) {
    try {
      const deencryptToken = jwt.verify(token, secretKey);
      req.user = deencryptToken;
    } catch (e) {
      res.status(500).json({
        message: "Oups Something Wrong  when retrieving information ",
        e,
      });
    }
  }
  next();
};

module.exports = { getUsers, register, login, allInfo, verify,getOneUser};
