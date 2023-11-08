var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const BlocageController = require("../controller/BlocageController");
const {isAuthenticate} = require("../middleware/auth");
const dotenv =require ('dotenv')
dotenv.config({path:'./config/config.env'})

router.post('/sendBlock', BlocageController.Blocage)
router.post('/getBlock', BlocageController.getBloque)
router.get('/unlock/:id1/:id2', BlocageController.unlock)


/* GET users listing. */
module.exports = router;
