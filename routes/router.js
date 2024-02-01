
const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/enquire", (req,res) => {
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
                <div style='padding: 30px 0 10px; border-bottom: 1px solid #e6e6e6;'>
                    <img src='https://cdn-icons-png.flaticon.com/512/7286/7286142.png' style='max-width: 100px; margin: 0 auto; display: block' />
                    <h2 style='font-size: 24px; font-weight: 600; color: #2a2a2a; text-align: center'>Website Enquiry</h2>
                </div>
                <div>
                    <p style='display: flex; padding: 10px; border-bottom: 1px solid #e6e6e6;'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Name: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.name}</span>
                    </p>
                    <p style='display: flex; padding: 10px; border-bottom: 1px solid #e6e6e6;'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Email: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.email}</span>
                    </p>
                    <p style='display: flex; padding: 10px; border-bottom: 1px solid #e6e6e6;'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Subject: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.subject}</span>
                    </p>
                    <p style='display: flex; padding: 10px'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Message: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.message}</span>
                    </p>
                </<div>
            </div>`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log("Error ", error)
            }else{
                console.log("Email Sent " + info.response);
                res.status(201).json({status: 'success', message: 'Email sent successfully'})
            }
        })
        
    } catch (error) {
        res.status(401).json({status: "error", error})
    }
});

router.post("/contact", (req,res) => {
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
                <div style='padding: 30px 0 10px; border-bottom: 1px solid #e6e6e6;'>
                    <img src='https://cdn-icons-png.flaticon.com/512/7286/7286142.png' style='max-width: 100px; margin: 0 auto; display: block' />
                    <h2 style='font-size: 24px; font-weight: 600; color: #2a2a2a; text-align: center'>Website Enquiry</h2>
                </div>
                <div>
                    <p style='display: flex; padding: 10px; border-bottom: 1px solid #e6e6e6;'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Name: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.name}</span>
                    </p>
                    <p style='display: flex; padding: 10px; border-bottom: 1px solid #e6e6e6;'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Email: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.email}</span>
                    </p>
                    <p style='display: flex; padding: 10px; border-bottom: 1px solid #e6e6e6;'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Subject: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.subject}</span>
                    </p>
                    <p style='display: flex; padding: 10px'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Service: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.service}</span>
                    </p>
                    <p style='display: flex; padding: 10px'>
                        <span style='width: 100px; font-weight: 600; display: inline-block'>Message: </span>
                        <span style='width: calc(100% - 100px); display: inline-block'>${formData.message}</span>
                    </p>
                </<div>
            </div>`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log("Error ", error)
            }else{
                console.log("Email Sent " + info.response);
                res.status(201).json({status: 'success', message: 'Email sent successfully'})
            }
        })
        
    } catch (error) {
        res.status(401).json({status: "error", error})
    }
});


module.exports = router