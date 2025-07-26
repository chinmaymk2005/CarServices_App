const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoutes');
require('dotenv').config();
const protectedRoute = require('./routes/protectedRoute');
const getServices = require('./routes/getServices');
const getBookService = require('./routes/getBookService');
const bookService = require('./routes/bookService');
const contactRoute = require('./routes/contact');
const rateLimit = require('express-rate-limit');


// Create a limiter for contact route
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 6, // limit each IP to 6 requests per hour
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
});

app.use('/api/contact', contactLimiter);


const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'https://car-services-app.vercel.app'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


// MongoDB connection
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cnk94io.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`;

console.log('Connecting to MongoDB with user:', process.env.MONGO_USER, 'and DB:', process.env.MONGO_DB);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/getServices', getServices);
app.use('/api/auth', authRoute);
app.use('/api/protected', protectedRoute);
app.use('/api/getBookService', getBookService);
app.use('/api/bookService', bookService);
app.use('/api/contact', contactRoute);

// Log all incoming requests for debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Basic route
app.get('/', (req, res) => {
    res.send('Car Servicing Centre API is running');
});

// Error handler for better debugging
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});