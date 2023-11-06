var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const BlocageController = require("../controller/BlocageController");
const {isAuthenticate} = require("../middleware/auth");
const dotenv =require ('dotenv')
dotenv.config({path:'./config/config.env'})

router.post('/', BlocageController.Blocage)


/* GET users listing. */
module.exports = router;
