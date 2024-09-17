const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  date: { type: String, required: true },
  temperature: { type: Number, required: true },
  bloodPressure: { type: Number, required: true },
  heartRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
