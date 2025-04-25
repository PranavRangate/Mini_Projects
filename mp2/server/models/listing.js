const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    owner_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    property_type: { type: String, enum: ["Apartment", "PG", "Hostel", "Independent House"], required: true },
    rent_price: { type: Number, required: true },
    deposit_amount: { type: Number, default: 0 },
    available_from: { type: Date, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        landmark: { type: String }
    },
    furnishing: { type: String, enum: ["Fully Furnished", "Semi-Furnished", "Unfurnished"], required: true },
    amenities: { type: [String] },
    preferred_tenant: { type: String, enum: ["Students", "Employees", "Anyone"], required: true },
    max_tenants: { type: Number, required: true },
    bhk_type: { type: String, enum: ["1RK", "1BHK", "2BHK", "3BHK"], required: true },
    bathroom_count: { type: Number, required: true },
    kitchen_available: { type: Boolean, default: true },
    balcony: { type: Boolean, default: false },
    pets_allowed: { type: Boolean, default: false },
    food_included: { type: Boolean, default: false },
    parking_availability: { type: String, enum: ["Bike", "Car", "Both", "None"], required: true },
    nearby_places: { type: [String] },
    property_images: { type: [String] },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    verification_status: { type: String, enum: ["Pending", "Verified", "Rejected"], default: "Pending" },
    contact_info: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Listing", ListingSchema);
