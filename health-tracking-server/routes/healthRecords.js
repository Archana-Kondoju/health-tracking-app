const express = require('express');
const HealthRecord = require('../models/HealthRecord');

const router = express.Router();

// POST: Create a new health record
router.post('/', async (req, res) => {
  try {
    const record = new HealthRecord(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Get all health records
router.get('/', async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Get a specific health record by ID
router.get('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json(record);
  } catch (err) {
    res.status(404).json({ error: 'Invalid record ID' });
  }
});

// PUT: Update a health record by ID
router.put('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!record) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Delete a health record by ID
router.delete('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndDelete(req.params.id);
    if (!record) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
