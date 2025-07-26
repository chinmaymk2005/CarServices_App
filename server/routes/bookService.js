const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const userService = require('../models/userService'); // Assuming you have a userService model
const User = require('../models/User'); 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chinmaymk2005@gmail.com',
        pass: 'kmskzyjljxmfgpyi' // use app password, not normal password!
    }
});

router.post('/', async (req, res) => {
    const { user, serviceId, subServiceName, price, serviceName } = req.body;
    
    
    const mailOptions = {
        from: 'Car Booking Bot <chinmaymk2005@gmail.com>',
        to: 'chinmaymk13@gmail.com', // owner email - urcarstylist@gmail.com
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
        console.log('Email sent successfully');
        const userId = await User.findOne({ email: user.email });
        const userServiceDoc = await userService.findOne({ userId: userId._id });
        console.log("User Service Document:", userServiceDoc);
        
        // Check if the service already exists
        const existingService = userServiceDoc.services.find(s => s.serviceName === serviceName);
        if (existingService) {
            // Push new subService into existing service
            existingService.subServices.push({
                name: subServiceName,
                priceRange: price
            });
        } else {
            // Add new service with this subService
            userServiceDoc.services.push({
                serviceName: serviceName,
                subServices: [
                    {
                        name: subServiceName,
                        priceRange: price
                    }
                ]
            });
        }
        await userServiceDoc.save();
        console.log("Service booking saved to DB");
        res.status(200).json({ message: 'Email sent & booking saved successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});
module.exports = router;