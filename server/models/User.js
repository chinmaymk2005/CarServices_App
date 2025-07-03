const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },    
    location: { type: String, required: true },    
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'userService' }
});


module.exports = mongoose.model('User', userSchema);