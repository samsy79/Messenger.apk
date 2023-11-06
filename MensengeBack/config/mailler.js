const nodemailer = require ("nodemailer")

const mailler = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure:false,
  auth: {
    user: "messengersam555@gmail.com",
    pass: "jociwxbkktkhzupz"
  }
  });
  module.exports = mailler;