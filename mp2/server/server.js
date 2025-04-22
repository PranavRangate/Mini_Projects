const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');  // No .js extension needed


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log("Request Body:", req.body);
    next();
});

const DB = 'mongodb+srv://user:Password@roomsdb.eftne.mongodb.net/RoomsDB?retryWrites=true&w=majority&appName=RoomsDB'

mongoose.connect(DB)
    .then(() => {
        console.log('MongoDB connection successful');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

// Routes
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors({ origin: '*' }));  // Allow all origins

const Contact = require('./models/Contact');

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Add authentication middleware
//app.use(require('./middlewares/auth'));


// const testContact = new Contact({
//     name: "Test User",
//     email: "test@example.com",
//     subject: "Testing MongoDB",
//     message: "If you see this in MongoDB, it works!"
// });

// testContact.save()
//     .then(() => console.log("✅ Test data inserted into MongoDB"))
//     .catch(err => console.error("❌ Error inserting test data:", err));

const listingRoutes = require("./routes/listing");
app.use("/api/listings", listingRoutes);
