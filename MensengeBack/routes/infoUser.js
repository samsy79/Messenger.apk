var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const InfoUserController = require("../controller/InfoUserController");
const {isAuthenticate} = require("../middleware/auth");
const dotenv =require ('dotenv')
dotenv.config({path:'./config/config.env'})

router.post('/Send', InfoUserController.PersoInfo)

router.get('/get/:id', InfoUserController.getInfo)


/* GET users listing. */
module.exports = router;
