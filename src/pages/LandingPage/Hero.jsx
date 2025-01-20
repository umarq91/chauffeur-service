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
  const [hours, setHours] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !startDate ||
      !time ||
      !pickUpLocation ||
      (service === 'airportTransfer' && !dropOffLocation) ||
      (service === 'fullDayChauffeur' && (!days || days < 1 || days > 8)) ||
      (service === 'hourlyChauffeur' && (!hours || hours < 1 || hours > 12))
    ) {
      setErrorMessage('Please fill all the fields correctly.');
      return;
    }

    const queryParams = new URLSearchParams({
      date: startDate.toISOString().split('T')[0],
      time,
      pickUpLocation,
      dropOffLocation: service === 'airportTransfer' ? dropOffLocation : undefined,
      days: service === 'fullDayChauffeur' ? days : undefined,
      hours: service === 'hourlyChauffeur' ? hours : undefined,
      service,
    }).toString();

    navigate(`/booking?${queryParams}`);
  };

  return (
    <div
      className="relative min-h-screen p-10 w-full bg-cover bg-blue-500 flex items-center"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/premium-photo/group-business-people-with-lit-background-mixed-media_641298-12027.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay */}
      <div className="container mx-auto px-4 flex flex-col relative z-20">
        <div className="text-left text-white mb-5 md:mb-4">
          <h1 className="text-4xl font-bold mb-4 md:w-1/2">PREMIUM SERVICES TAILORED FOR YOU</h1>
          <p className="text-xl">International Ground Transportation and more. Make Your Online Reservation</p>
        </div>
        <div className="md:w-2/3 self-center">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-7xl">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <button
                onClick={() => setService('airportTransfer')}
                className={`px-4 py-2 rounded-md ${
                  service === 'airportTransfer' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                }`}
              >
                Airport Transfer
              </button>
              <button
                onClick={() => setService('fullDayChauffeur')}
                className={`px-4 py-2 rounded-md ${
                  service === 'fullDayChauffeur' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                }`}
              >
                Full Day Chauffeur
              </button>
              <button
                onClick={() => setService('hourlyChauffeur')}
                className={`px-4 py-2 rounded-md ${
                  service === 'hourlyChauffeur' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                }`}
              >
                Hourly Chauffeur
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-wrap bg-white p-7 gap-4 items-center">
              <div className="flex-1 min-w-[250px]">
                <label className="block text-gray-600 text-sm text-left">Pick Up Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="mt-1 block p-1.5 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  dateFormat="yyyy-MM-dd"
                  showYearDropdown
                  showMonthDropdown
                  minDate={new Date()}
                  dropdownMode="select"
                />
              </div>
              <div className="flex-1 min-w-[250px]">
                <label className="block text-gray-600 text-sm text-left">Pick Up Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex-1 min-w-[250px]">
                <label className="block text-gray-600 text-sm text-left">Pick Up Location</label>
                <input
                  type="text"
                  value={pickUpLocation}
                  onChange={(e) => setPickUpLocation(e.target.value)}
                  placeholder="Enter pick up location"
                  className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              {service === 'airportTransfer' && (
                <div className="flex-1 min-w-[250px]">
                  <label className="block text-gray-600 text-sm text-left">Drop Off Location</label>
                  <input
                    type="text"
                    value={dropOffLocation}
                    onChange={(e) => setDropOffLocation(e.target.value)}
                    placeholder="Drop off location"
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              )}
              {service === 'fullDayChauffeur' && (
                <div className="flex-1 min-w-[250px]">
                  <label className="block text-gray-600 text-sm text-left">Days</label>
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    min="1"
                    max="8"
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              )}
              {service === 'hourlyChauffeur' && (
                <div className="flex-1 min-w-[250px]">
                  <label className="block text-gray-600 text-sm text-left">Hours</label>
                  <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    min="1"
                    max="12"
                    className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              )}
              <button
                type="submit"
                className="mt-4 md:mt-0 w-full md:w-auto bg-indigo-600 text-white py-2 px-8 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Book
              </button>
            </form>
            {errorMessage && <div className="mt-4 text-red-600 text-center">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
