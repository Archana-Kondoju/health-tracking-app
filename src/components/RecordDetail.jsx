import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../services/api';
import { ImBin } from 'react-icons/im';
import { FaCalendarAlt, FaEdit, FaHeart, FaHeartbeat, FaThermometerHalf } from 'react-icons/fa';
import { IoIosSave, IoMdArrowRoundBack } from 'react-icons/io';

const RecordDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    temperature: '',
    bloodPressure: '',
    heartRate: ''
  });

  useEffect(() => {
    axios.get(`/health-records/${id}`)
      .then(response => {
        setRecord(response.data);
        setFormData(response.data); // Initialize form data with current record
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/health-records/${id}`)
      .then(() => {
        alert('Record deleted successfully');
        navigate('/health-records');
      })
      .catch(error => console.error(error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`/health-records/${id}`, formData)
      .then(() => {
        alert('Record updated successfully!');
        setRecord(formData); // Update the record state
        setIsEditing(false); // Exit edit mode
      })
      .catch(error => console.error(error));
  };

  const handleBackToDashboard = () => {
    navigate('/health-records'); // Navigate back to the dashboard
  };

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 md:px-8">
      {record ? (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300/70 via-pink-300/70 to-red-300/70 text-purple-700 p-3 rounded-lg text-center sm:text-left">
              Record Details
            </h2>
            <button
              onClick={handleBackToDashboard}
              className="mt-4 sm:mt-0 px-4 py-2 font-bold bg-purple-600/90 text-white rounded-md hover:bg-purple-700 flex items-center"
            >
              <IoMdArrowRoundBack className="mr-2" />
              Dashboard
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500/75 via-pink-500/75 to-red-500/75 shadow-md rounded-lg px-6 py-4 md:px-8 md:py-6 space-y-4">
            {isEditing ? (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-purple-900 font-bold">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 border bg-red-100/70 rounded-md text-black-600 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-purple-900 font-bold">Body Temperature (°C)</label>
                  <input
                    type="number"
                    name="temperature"
                    value={formData.temperature}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 border bg-red-100/70 rounded-md text-black-600 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-purple-900 font-bold">Blood Pressure</label>
                  <input
                    type="number"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 border bg-red-100/70 rounded-md text-black-600 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-purple-900 font-bold">Heart Rate (bpm)</label>
                  <input
                    type="number"
                    name="heartRate"
                    value={formData.heartRate}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 border bg-red-100/70 rounded-md text-black-600 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between">
                <button
                    onClick={handleUpdate}
                    className="px-4 py-2 mt-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 flex items-center"
                  >
                    <IoIosSave className="mr-2" />
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={handleEditToggle}
                    className="px-4 py-2 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <p className="font-semibold flex items-center">
                  <FaCalendarAlt className="text-pink-900 mr-2" />
                  <strong className="text-pink-900">Date:</strong> {record.date}
                </p>
                <p className="flex items-center">
                  <FaThermometerHalf className="text-pink-900 mr-2" />
                  <strong className="text-pink-900">Temperature:</strong> {record.temperature} °C
                </p>
                <p className="flex items-center">
                  <FaHeartbeat className="text-pink-900 mr-2" />
                  <strong className="text-pink-900">Blood Pressure:</strong> {record.bloodPressure}
                </p>
                <p className="flex items-center">
                  <FaHeart className="text-pink-900 mr-2" />
                  <strong className="text-pink-900">Heart Rate:</strong> {record.heartRate} bpm
                </p>
                <div className="flex flex-col sm:flex-row justify-between">
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center"
                  >
                    <ImBin className="mr-2" />
                    Delete
                  </button>
                  <button
                    onClick={handleEditToggle}
                    className="px-4 py-2 mt-4 bg-amber-500 text-white rounded-md hover:bg-yellow-600 flex items-center"
                  >
                    <FaEdit className="mr-2" />
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecordDetail;
