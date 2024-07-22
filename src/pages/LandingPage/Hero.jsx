import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function HeroPage() {
  const navigate = useNavigate();
  const [service, setService] = useState('fullDayChauffeur');
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [days, setDays] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startDate || !time || !pickUpLocation || (service === 'airportTransfer' && !dropOffLocation) || (service === 'fullDayChauffeur' && (!days || days < 1 || days > 8))) {
      setErrorMessage('Please fill all the fields correctly.');
      return;
    }

    const queryParams = new URLSearchParams({
      date: startDate.toISOString().split('T')[0],
      time,
      pickUpLocation,
      dropOffLocation,
      days: service === 'fullDayChauffeur' ? days : undefined,
    }).toString();

    navigate(`/booking?${queryParams}`);
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/group-business-people-with-lit-background-mixed-media_641298-12027.jpg)' }}
    >
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Book Your Trip</h1>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setService('airportTransfer')}
            className={`px-4 py-2 rounded-l-md ${service === 'airportTransfer' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          >
            Airport Transfer
          </button>
          <button
            onClick={() => setService('fullDayChauffeur')}
            className={`px-4 py-2 rounded-r-md ${service === 'fullDayChauffeur' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          >
            Full Day Chauffeur
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <label className="block text-gray-700">Pick Up Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              showMonthDropdown
              minDate={new Date()}
              dropdownMode="select"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Pick Up Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Pick Up Location</label>
            <input
              type="text"
              value={pickUpLocation}
              onChange={(e) => setPickUpLocation(e.target.value)}
              placeholder="Enter pick up location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          {service === 'airportTransfer' ? (
            <div className="flex-1">
              <label className="block text-gray-700">Drop Off Location</label>
              <input
                type="text"
                value={dropOffLocation}
                onChange={(e) => setDropOffLocation(e.target.value)}
                placeholder="Enter drop off location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          ) : (
            <div className="flex-1">
              <label className="block text-gray-700">Days</label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                min="1"
                max="8"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          )}
          <button
            type="submit"
            className="mt-4 md:mt-0 w-full md:w-auto bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Book
          </button>
        </form>
        {errorMessage && (
          <div className="mt-4 text-red-600 text-center">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroPage;
