const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MapRoute = require('./routes/route');
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    return res.status(400).json({ message: "Welcome babu" });
})
app.use('/randi', MapRoute);

// MongoDB Connection
const dbUri = process.env.MONGO_URI;
mongoose.connect(dbUri)
  .then(() => {
    console.log('Connected to MongoDB');

    // START SERVER HERE (only after DB connects)
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
