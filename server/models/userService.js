const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    services: [
        {
            serviceName: { type: String, required: true }, // e.g., 'painting'
            subServices: [
                {
                    name: { type: String, required: true }, // e.g., 'exterior'                    
                    priceRange: { type: String, required: true } // e.g., '1000 - 2000 Rs.'
                }
            ]
        }
    ],
});

const userService = mongoose.model('userService', serviceSchema);

module.exports = userService;
