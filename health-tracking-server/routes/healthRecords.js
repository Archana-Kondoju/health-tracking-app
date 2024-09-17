const express = require('express');
const HealthRecord = require('../models/HealthRecord');

const router = express.Router();

// POST: Create a new health record
router.post('/health-records', async (req, res) => {
  try {
    const record = new HealthRecord(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Get all health records
router.get('/health-records', async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Get a specific health record by ID
router.get('/health-records/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    res.json(record);
  } catch (err) {
    res.status(404).json({ error: 'Record not found' });
  }
});

// PUT: Update a health record by ID
router.put('/health-records:id', async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Delete a health record by ID
router.delete('/health-records/:id', async (req, res) => {
  try {
    await HealthRecord.findByIdAndDelete(req.params.id);
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
