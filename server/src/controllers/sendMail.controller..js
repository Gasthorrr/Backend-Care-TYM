const mail = require('@sendgrid/mail');
const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "official.caretym@gmail.com",
        pass: "",
    },
    tls: {
        rejectUnauthorized: false,
    }
})

let mailOptions = {
    from: "official.caretym@gmail.com",
    to: "",
    subject: "Testing",
    text: "First email send from NodeJS using Nodemailer"
}

transporter.sendMail(mailOptions, function(err, success){
    if(err){
        console.log(err)
    } else {
        console.log("Email sent successfully")
    }
})