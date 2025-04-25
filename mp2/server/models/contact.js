const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/submit', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving contact form:', error);
        res.status(500).json({ message: 'Error sending message. Please try again.' });
    }
});

module.exports = router; 

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', contactSchema); 
