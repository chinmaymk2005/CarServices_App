const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({ message: `Welcome user ${req.user.id}` });
});

module.exports = router;
// This route is protected by the verifyToken middleware, which checks for a valid JWT token in the request cookies.
// If the token is valid, it allows access to the dashboard route and responds with a welcome message including the user ID.