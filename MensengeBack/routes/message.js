var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const MessageController = require("../controller/MessageController");
const {isAuthenticate} = require("../middleware/auth");
const dotenv =require ('dotenv')
dotenv.config({path:'./config/config.env'})

router.post('/send', MessageController.SendMessage)

router.get('/allMessage', MessageController.getAllMessage)

router.post('/OneMessage', MessageController.getOneMessage)

router.post('/SenderMessage', MessageController.getSenderMessage)

router.post('/ReceiverMessage', MessageController.getReceiverMessage)


/* GET users listing. */
module.exports = router;
