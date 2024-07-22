import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const pickUpLocation = queryParams.get('pickUpLocation');
  const dropOffLocation = queryParams.get('dropOffLocation');
  const days = queryParams.get('days');
  const service = queryParams.get('service');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Booking Details</h1>
        <p className="text-gray-700">Date: {date}</p>
        <p className="text-gray-700">Time: {time}</p>
        <p className="text-gray-700">Pick Up Location: {pickUpLocation}</p>
        {service === 'airportTransfer' && (
          <p className="text-gray-700">Drop Off Location: {dropOffLocation}</p>
        )}
        {service === 'fullDayChauffeur' && (
          <p className="text-gray-700">Days: {days}</p>
        )}
        <p className="text-gray-700">Service: {service}</p>
      </div>
    </div>
  );
}

export default BookingPage;
