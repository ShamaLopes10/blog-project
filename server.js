// server.js

// Require necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000; // Use environment port or 3000 if not specified

// Middleware
app.use(express.json()); // Parse JSON bodies of requests

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!'); // Respond with "Hello World!" for requests to the root URL
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
