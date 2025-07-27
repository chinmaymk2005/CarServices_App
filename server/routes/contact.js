// server/routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// POST route to handle contact form submissions
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Contact request received:", req.body);

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // ✅ Use Gmail with App Password (not your normal password!)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // get this from Google App Passwords
      },
    });

    // Email options
    const mailOptions = {
      from: '"Car Booking Bot" <yourcarstylist2023@gmail.com>', // sender (user's email)
      to: "chinmaymk13@gmail.com", // owner email urcarstylist@gmail.com
      subject: `New Contact Message from ${name}`,
      text: message,
      replyTo: email,
      html: `
        <h3>New message from ${name}</h3>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully");
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).json({ message: "Error sending message." });
  }
});

module.exports = router;
