const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: { type: String, required: true }, // e.g., 'painting'
    subServices: [
        {
            name: { type: String, required: true }, // e.g., 'exterior'                     
            description: { type: String, required: true },
            priceRange: { type: String, required: true } // e.g., '1000 - 2000 Rs.'
        }
    ]
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
