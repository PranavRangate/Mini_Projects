const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/submit', async (req, res) => {
    console.log("📥 Received POST request to /submit");
    console.log("🔹 Request Body:", req.body);

    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            console.log("⚠️ Missing required fields!");
            return res.status(400).json({ message: "⚠️ All fields are required." });
        }

        const newContact = new Contact({ name, email, subject, message });

        console.log("⏳ Attempting to save to MongoDB...");
        const savedContact = await newContact.save();  // Save to database
        console.log("✅ Data successfully saved to MongoDB:", savedContact);

        // Fetch all saved contacts to confirm write
        const allContacts = await Contact.find();
        console.log("📊 All Contacts in DB:", allContacts);

        res.status(201).json({ message: "✅ Message sent successfully!", data: savedContact });
    } catch (error) {
        console.error("❌ MongoDB Save Error:", error);
        res.status(500).json({ message: "❌ Error sending message. Please try again." });
    }
});

module.exports = router;
