// volunteer-form-backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Volunteer = require('./models/Volunteer'); // Adjust model path as per your structure

const app = express();
const PORT = 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/volunteerDB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error:', err));

// POST route for volunteer form submission
app.post('/volunteer', async (req, res) => {
    const { name, email, areaOfInterest } = req.body;

    const newVolunteer = new Volunteer({ name, email, areaOfInterest });

    try {
        await newVolunteer.save();
        res.status(200).json({ message: 'Thank you for signing up to volunteer!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving volunteer information', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
