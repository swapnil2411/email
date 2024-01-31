
const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req,res) => {
    //console.log(req.body)
    const {formData} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Testing Mail",
            html: `<h1>Recieved email from ${formData.email}</h1>`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log("Error ", error)
            }else{
                console.log("Email Sent " + info.response);
                res.status(201).json({status: 201, info})
            }
        })
        
    } catch (error) {
        res.status(201).json({status: 401, error})
    }
});

module.exports = router