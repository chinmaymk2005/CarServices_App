const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoutes');


const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}))
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/carService'; 
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/auth',authRoute)

// Basic route
app.get('/', (req, res) => {
    res.send('Car Servicing Centre API is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});