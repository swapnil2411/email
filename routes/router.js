
const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req,res) => {
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
            html: `<div style='max-width: 600px; margin: 0 auto; border: 1px solid #e6e6e6'>
                <div>
                    <img src='https://cdn-icons-png.flaticon.com/512/7286/7286142.png ' />
                    <h2 style='font-size: 20px; color: #2a2a2a;'>Website Enquiry</h2>
                </div>
                <div>
                    <p style='padding: 10px 0'>
                        <span style='max-width: 200px'>Name: </span>
                        <span>${formData.name}</span>
                    </p>
                    <p style='padding: 10px 0'>
                        <span style='max-width: 200px'>Email: </span>
                        <span>${formData.email}</span>
                    </p>
                    <p style='padding: 10px 0'>
                        <span style='max-width: 200px'>Subject: </span>
                        <span>${formData.subject}</span>
                    </p>
                    <p style='padding: 10px 0'>
                        <span style='max-width: 200px'>Name: </span>
                        <span>${formData.message}</span>
                    </p>
                </<div>
            </div>`
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