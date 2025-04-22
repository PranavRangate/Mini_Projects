const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const multer = require('multer');
const Listing = require("../models/Listing");

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory to save the uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Append timestamp to the filename
    }
});

const upload = multer({ storage: storage });

// 📌 Get all listings
router.get("/", async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching listings", error });
    }
});

// 📌 Create a new listing
router.post("/", upload.array('property_images'), async (req, res) => {
    console.log(req.body); // Log the body to see incoming data
    console.log(req.files); // Log the files to see uploaded images

    try {
        const { 
            title,
            description,
            property_type,
            rent_price,
            deposit_amount,
            available_from,
            address,
            furnishing,
            amenities,
            preferred_tenant,
            max_tenants,
            bhk_type,
            bathroom_count,
            kitchen_available,
            balcony,
            pets_allowed,
            food_included,
            parking_availability,
            nearby_places,
            contact_info,
            location
        } = req.body;

        // Handle file uploads
        const property_images = req.files.map(file => file.path); // Get the file paths
        
        // // Ensure owner_id is a valid ObjectId
        // const ownerId = mongoose.Types.ObjectId.isValid(req.body.owner_id)
        // ? new mongoose.Types.ObjectId(req.body.owner_id)
        // : null;

        // if (!ownerId) {
        // return res.status(400).json({ message: "Invalid owner ID format" });
        // }
        // Set a temporary owner ID for testing
        const ownerId = new mongoose.Types.ObjectId(); // Replace with actual owner ID if available

        const newListing = new Listing({
            owner_id: ownerId,
            title,
            description,
            property_type,
            rent_price,
            deposit_amount,
            available_from: new Date(available_from),
            address: {
                street: address.street,
                city: address.city,
                state: address.state,
                pincode: address.pincode,
                landmark: address.landmark
            },
            furnishing,
            amenities: Array.isArray(amenities) ? amenities : [amenities],
            preferred_tenant,
            max_tenants,
            bhk_type,
            bathroom_count,
            kitchen_available: kitchen_available === 'on',
            balcony: balcony === 'on',
            pets_allowed: pets_allowed === 'on',
            food_included: food_included === 'on',
            parking_availability,
            nearby_places: nearby_places ? nearby_places.split(',') : [],
            location: {
                latitude: parseFloat(location.latitude),
                longitude: parseFloat(location.longitude)
            },
            contact_info: {
                phone: contact_info.phone,
                email: contact_info.email
            },
            property_images // Add the property images
        });

        await newListing.save();
        res.status(201).json({ 
            message: "Listing added successfully!",
            listing: newListing
        });
    } catch (error) {
        console.error('Error creating listing:', error);
        res.status(500).json({ 
            message: "Error creating listing",
            error: error.message 
        });
    }
});

module.exports = router;