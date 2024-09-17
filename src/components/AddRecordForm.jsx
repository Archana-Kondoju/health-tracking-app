import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../services/api';
import { TbStackPush } from 'react-icons/tb';

const AddRecordForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    temperature: '',
    bloodPressure: '',
    heartRate: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/health-records', formData)
      .then(() => {
        alert('Record added successfully!');
        navigate('/health-records');
      })
      .catch(error => console.error(error));
  };

  const handleAddToggle = () => {
    navigate('/health-records');
  };

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 md:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-purple-300/50 via-pink-300/50 to-red-300/50 text-purple-700 p-3 rounded-lg mb-4 md:mb-2 mt-6">
        Add New Health Record
      </h2>
      <form 
        onSubmit={handleSubmit} 
        className="bg-gradient-to-r from-purple-500/75 via-pink-500/75 to-red-500/75 shadow-md rounded-lg px-6 py-4 md:px-8 md:py-6 space-y-4"
      >
        <div className="flex flex-col">
          <label className="text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Body Temperature (°C)</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Blood Pressure</label>
          <input
            type="number"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Heart Rate (bpm)</label>
          <input
            type="number"
            name="heartRate"
            value={formData.heartRate}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 w-full"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
                  <button
                    type="submit"
                    className="px-4 py-2 mt-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center focus:outline-none"
                  >
                    <TbStackPush className='mr-2' /> Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleAddToggle}
                    className="px-4 py-2 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
      </form>
    </div>
  );
};

export default AddRecordForm;
