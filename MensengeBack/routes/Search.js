var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const SearchController = require("../controller/SearchController");
const {isAuthenticate} = require("../middleware/auth");
const dotenv =require ('dotenv')
dotenv.config({path:'./config/config.env'})

router.post('/', SearchController.Search)


/* GET users listing. */
module.exports = router;
