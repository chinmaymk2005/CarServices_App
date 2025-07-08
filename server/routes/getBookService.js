const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        console.log('Fetching service with ID:', req.params.id);
        // console.log(service);

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json(service);
    } catch (error) {
        console.error('Error fetching service:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;