const express = require('express');
const router = express.Router();
const { signup, login, checkAuth } = require('../controller/authController');



// dotenv.config();
router.post('/signup',signup);

router.post('/login',login);

// router.post('/logout', (req, res) => {
//     res.clearCookie('JwtToken');
//     res.status(200).json({ message: 'Logged out successfully' });
// });


router.get('/check-auth',checkAuth);

module.exports = router;
