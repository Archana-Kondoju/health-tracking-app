import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';
import SearchBar from './SearchBar';
import { RiPlayListAddFill } from 'react-icons/ri';
import { FaCalendarAlt, FaThermometerHalf, FaHeartbeat, FaHeart } from 'react-icons/fa';

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/health-records')
      .then(response => {
        setRecords(response.data);
        setFilteredRecords(response.data); // Initialize filtered records with full data
      })
      .catch(error => console.error(error));
  }, []);

  const handleViewDetail = (id) => {
    navigate(`/health-records/${id}`);
  };

  const handleSearch = (filters) => {
    let filtered = records;

    // Filter by date
    if (filters.date) {
      filtered = filtered.filter(record => record.date === filters.date);
    }

    // Filter by temperature
    if (filters.temperature) {
      filtered = filtered.filter(record => record.temperature > Number(filters.temperature));
    }

    // Filter by blood pressure
    if (filters.bloodPressure) {
      filtered = filtered.filter(record => record.bloodPressure > Number(filters.bloodPressure));
    }

    // Filter by heart rate
    if (filters.heartRate) {
      filtered = filtered.filter(record => record.heartRate > Number(filters.heartRate));
    }

    setFilteredRecords(filtered);
  };

  const handleAddRecord = () => {
    navigate('/health-records/add'); // Navigate to a form page for adding new records
  };

  const toggleFilters = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Heading and Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-purple-300/50 via-pink-300/50 to-red-300/50 text-purple-700 p-3 rounded-lg mb-4 md:mb-0">
          Health Records Dashboard
        </h2>
        
        <button
          onClick={handleAddRecord}
          className="flex items-center px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-green-700 focus:outline-none mb-4 md:mb-0"
        >
          <RiPlayListAddFill className="mr-2" /> 
          Add New
        </button>
      </div>

      {/* Filter Toggle Button for Mobile */}
      <div className="sm:hidden mb-4">
        <button
          onClick={toggleFilters}
          className="w-full text-white bg-purple-500 py-2 px-4 rounded-md focus:outline-none hover:bg-purple-600"
        >
          {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Grid Layout for SearchBar and Records */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6">
        {/* Left Column: Search Bar */}
        <div className={`${isFilterVisible ? 'block' : 'hidden sm:block'}`}>
            <SearchBar onSearch={handleSearch} isVisible={isFilterVisible} />
        </div>

        {/* Right Column: Health Records */}
        <div className="bg-gradient-to-r from-purple-500/75 via-pink-500/75 to-red-500/75 shadow-md rounded-lg px-4 sm:px-8 py-6 space-y-4">
          {filteredRecords.length > 0 ? (
            filteredRecords.map(record => (
              <div key={record._id} className="border-b py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="text-black-600 space-y-1 sm:space-y-0">
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
                </div>
                <button
                  onClick={() => handleViewDetail(record._id)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none sm:self-start sm:ml-4"
                >
                  Edit / Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-3xl font-bold text-pink-800">No records found :(</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
