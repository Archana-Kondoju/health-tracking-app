import React, { useState } from 'react';

const SearchBar = ({ onSearch,isVisible }) => {
  const [filters, setFilters] = useState({
    date: '',
    temperature: '',
    bloodPressure: '',
    heartRate: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSearch} className={`bg-gradient-to-r from-purple-400/70 via-pink-400/70 to-red-400/70 shadow-md rounded-lg p-4 mb-6 space-y-4 transition-all duration-300 ${isVisible ? 'block' : 'hidden'} lg:block md:block sm:block`}>
        <div className='flex flex-row justify-center'>
          <h3 className='font-bold text-xl text-purple-700 underline'>Filters</h3>
        </div>
      <div className="grid lg:grid-cols-1 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        <div>
        <label className="block text-sm font-semibold text-white">Date</label>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white text-gray-700 border-2 border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-300 ease-in-out"
            />
          </div>

          {/* Temperature Filter */}
          <div>
            <label className="block text-sm font-semibold text-white">Temperature (°C)</label>
            <input
              type="number"
              name="temperature"
              value={filters.temperature}
              onChange={handleChange}
              placeholder="e.g. >37"
              className="mt-1 block w-full px-3 py-2 bg-white text-gray-700 border-2 border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 sm:text-sm transition duration-300 ease-in-out"
            />
          </div>

          {/* Blood Pressure Filter */}
          <div>
            <label className="block text-sm font-semibold text-white">Blood Pressure</label>
            <input
              type="number"
              name="bloodPressure"
              value={filters.bloodPressure}
              onChange={handleChange}
              placeholder="e.g. >120"
              className="mt-1 block w-full px-3 py-2 bg-white text-gray-700 border-2 border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm transition duration-300 ease-in-out"
            />
          </div>

          {/* Heart Rate Filter */}
          <div>
            <label className="block text-sm font-semibold text-white">Heart Rate (bpm)</label>
            <input
              type="number"
              name="heartRate"
              value={filters.heartRate}
              onChange={handleChange}
              placeholder="e.g. >60"
              className="mt-1 block w-full px-3 py-2 bg-white text-gray-700 border-2 border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-300 ease-in-out"
            />
          </div>
      </div>
    </form>
  );
};

export default SearchBar;
