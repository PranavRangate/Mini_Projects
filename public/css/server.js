const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Ensure your HTML file is served correctly

// Database connection
const connection = mysql.createConnection({
    host: 'toursandtravels.cje6wee04fa4.ap-south-1.rds.amazonaws.com', // Replace with your RDS endpoint
    user: 'admin',
    password: 'saptarshi4335',
    database: 'contactform'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to AWS RDS');
    }
});

// In your server.js
app.post('/submit-contact', (req, res) => {
  const { name, email, number, subject, message } = req.body;

  const sql = 'INSERT INTO contacts (name, email, number, subject, message) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [name, email, number, subject, message], (err, results) => {
      if (err) {
          console.error(err);
          return res.status(500).send('An error occurred while submitting the form.');
      }
      res.redirect('/success'); // Redirect to the success page
  });
});

// Add a route for the success page
app.get('/success', (req, res) => {
  res.sendFile(__dirname + '/public/success.html'); // Serve the success page
});


// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
