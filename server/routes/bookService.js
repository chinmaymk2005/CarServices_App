const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { replaceOne } = require('../models/User');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chinmaymk2005@gmail.com',
        pass: 'kmskzyjljxmfgpyi' // use app password, not normal password!
    }
});

router.post('/', async (req, res) => {
    const { user, serviceId, subServiceName, price } = req.body;

    const mailOptions = {
        from: 'Car Booking Bot <chinmaymk2005@gmail.com>',
        to: 'chinmaymk13@gmail.com',
        replyTo: user.email,
        subject: 'New Booking Received!',
        text: `
New booking:

User: ${user.name}
Email: ${user.email}
Phone: ${user.phone}
Service ID: ${serviceId}
SubService: ${subServiceName}
Price: ${price}
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});
module.exports = router;