const express=require('express');
const mongoose=require('mongoose');
const app=express();
const MapRoute=require('./routes/route');
require('dotenv').config();
const dbUri=process.env.MONGO_URI;
mongoose.connect(dbUri).then(()=>console.log('Connected to MongoDB')).catch(err=>console.error('MongoDB connection error:', err));
app.use('/randi',MapRoute)
app.listen(process.env.PORT,()=>console.log('Server is running on port 3000'));