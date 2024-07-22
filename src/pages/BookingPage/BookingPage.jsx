import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const day = queryParams.get('day');
  const time = queryParams.get('time');
  const place = queryParams.get('place');
console.log(day);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Booking Details</h1>
        <p className="text-gray-700">Day: {day}</p>
        <p className="text-gray-700">Time: {time}</p>
        <p className="text-gray-700">Place: {place}</p>
      </div>
    </div>
  );
}

export default BookingPage;
