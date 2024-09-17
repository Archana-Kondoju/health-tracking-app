const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const healthRecords = require('./routes/healthRecords');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the Health Tracking API!');
});

// API routes
app.use('/api/health-records', healthRecords);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
