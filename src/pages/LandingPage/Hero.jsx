// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function HeroPage() {
//   const navigate = useNavigate();
//   const [service, setService] = useState('fullDayChauffeur');
//   const [startDate, setStartDate] = useState(new Date());
//   const [time, setTime] = useState('');
//   const [pickUpLocation, setPickUpLocation] = useState('');
//   const [dropOffLocation, setDropOffLocation] = useState('');
//   const [days, setDays] = useState(1);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!startDate || !time || !pickUpLocation || (service === 'airportTransfer' && !dropOffLocation) || (service === 'fullDayChauffeur' && (!days || days < 1 || days > 8))) {
//       setErrorMessage('Please fill all the fields correctly.');
//       return;
//     }

//     const queryParams = new URLSearchParams({
//       date: startDate.toISOString().split('T')[0],
//       time,
//       pickUpLocation,
//       dropOffLocation: service === 'airportTransfer' ? dropOffLocation : undefined,
//       days: service === 'fullDayChauffeur' ? days : undefined,
//       service
//     }).toString();

//     navigate(`/booking?${queryParams}`);
//   };

//   return (
//     <div 
//       className="min-h-screen w-full bg-cover bg-blue-500"
//       style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/group-business-people-with-lit-background-mixed-media_641298-12027.jpg)' }}
//     >
//         {/* content */}
//       <div className=''>

//         <h1 className="text-2xl font-bold  text-center text-white">PREMIUM SERVICES TAILORED FOR YOU</h1>
//         <p> International Ground Transportation and more
//         Make Your Online Reservation </p>
//       </div>
//         <div className='flex'>
            
//         <div className=" p-8 rounded  w-full max-w-7xl ">
// {/* Booking */}
// <div className="flex gap-2 justify-center mb-6">
//   <button
//     onClick={() => setService('airportTransfer')}
//     className={`px-4 py-2 rounded-l-md ${service === 'airportTransfer' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
//   >
//     Airport Transfer
//   </button>
//   <button
//     onClick={() => setService('fullDayChauffeur')}
//     className={`px-4 py-2 rounded-r-md ${service === 'fullDayChauffeur' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
//   >
//     Full Day Chauffeur
//   </button>
// </div>
// <form onSubmit={handleSubmit} className="flex bg-white p-7 flex-col md:flex-row gap-4 items-center">
//   <div className="flex-1">
//     <label className="block text-gray-600 text-sm text-left">Pick Up Date</label>
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       className="mt-1 block p-1.5 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//       dateFormat="yyyy-MM-dd"
//       showYearDropdown
//       showMonthDropdown
//       minDate={new Date()}
//       dropdownMode="select"
//     />
//   </div>
//   <div className="flex-1">
//     <label className="block text-gray-600 text-sm text-left">Pick Up Time</label>
//     <input
//       type="time"
//       value={time}
//       onChange={(e) => setTime(e.target.value)}
//       className="mt-1  p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//     />
//   </div>
//   <div className="flex-1">
//     <label className="block text-gray-600 text-sm text-left">Pick Up Location</label>
//     <input
//       type="text"
//       value={pickUpLocation}
//       onChange={(e) => setPickUpLocation(e.target.value)}
//       placeholder="Enter pick up location"
//       className="mt-1  p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//     />
//   </div>
//   {service === 'airportTransfer' ? (
//     <div className="flex-1">
//       <label className="block text-gray-600 text-sm text-left">Drop Off Location</label>
//       <input
//         type="text"
//         value={dropOffLocation}
//         onChange={(e) => setDropOffLocation(e.target.value)}
//         placeholder="Drop off location"
//         className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//       />
//     </div>
//   ) : (
//     <div className="flex-1">
//       <label className="block text-gray-600 text-sm text-left">Days</label>
//       <input
//         type="number"
//         value={days}
//         onChange={(e) => setDays(e.target.value)}
//         min="1"
        
//         className="mt-1 p-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//       />
//     </div>
//   )}
//   <button
//     type="submit"
//     className="mt-4  md:mt-0 w-full md:w-auto bg-indigo-600 text-white py-2 px-8 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//   >
//     Book
//   </button>
// </form>
// <div className='w-full flex justify-center gap-4'>
// <button
// onClick={()=>navigate('/booking/meetngreet')}
//     className={`px-4 py-4 mt-3  hover:bg-indigo-600 hover:text-white bg-white border-2 border-black}`}
//   >
//     MEET & GREET
//   </button>
//   <button
//   onClick={()=>navigate('/booking/busesncoaches')}
//     className={`px-4 py-4 mt-3  hover:bg-indigo-600 hover:text-white bg-white border-2 border-black}`}
//   >
//    BUSES & COACHES
//   </button>
//   <button
//   onCanPlay={()=>navigate('/booking/planmytrip')}
//     className={`px-4 py-4 mt-3  hover:bg-indigo-600 hover:text-white bg-white border-2 border-black}`}
//   >
//    MULTIPLE REQUESTS
//   </button>
// </div>
// {errorMessage && (
//   <div className="mt-4 text-red-600 text-center">
//     {errorMessage}
//   </div>
// )}
// </div>
//         </div>
   
//     </div>
//   );
// }

// export default HeroPage;

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
      dropOffLocation: service === 'airportTransfer' ? dropOffLocation : undefined,
      days: service === 'fullDayChauffeur' ? days : undefined,
      service
    }).toString();

    navigate(`/booking?${queryParams}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-blue-500" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/group-business-people-with-lit-background-mixed-media_641298-12027.jpg)' }}>
    
      <div className="flex md:flex-row flex-col w-full max-w-7xl  bg-white rounded-lg shadow-lg  justify-center items-center">
       {/* Left */}
        <div className="flex-1 p-8 ">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">PREMIUM SERVICES TAILORED FOR YOU</h1>
          <p className="text-lg text-center text-gray-700">International Ground Transportation and more. Make Your Online Reservation.</p>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 p-8 bg-white rounded-r-lg shadow-lg">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setService('airportTransfer')}
                className={`px-6 py-2 rounded-l-md ${service === 'airportTransfer' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Airport Transfer
              </button>
              <button
                onClick={() => setService('fullDayChauffeur')}
                className={`px-6 py-2 rounded-r-md ${service === 'fullDayChauffeur' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Full Day Chauffeur
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-600 text-sm">Pick Up Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  dateFormat="yyyy-MM-dd"
                  showYearDropdown
                  showMonthDropdown
                  minDate={new Date()}
                  dropdownMode="select"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Pick Up Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Pick Up Location</label>
                <input
                  type="text"
                  value={pickUpLocation}
                  onChange={(e) => setPickUpLocation(e.target.value)}
                  placeholder="Enter pick up location"
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              {service === 'airportTransfer' ? (
                <div>
                  <label className="block text-gray-600 text-sm">Drop Off Location</label>
                  <input
                    type="text"
                    value={dropOffLocation}
                    onChange={(e) => setDropOffLocation(e.target.value)}
                    placeholder="Drop off location"
                    className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-gray-600 text-sm">Days</label>
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    min="1"
                    className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              )}
              <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Book
              </button>
              {errorMessage && (
                <div className="mt-4 text-red-600 text-center">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => navigate('/booking/meetngreet')}
              className="px-6 py-2 bg-white border-2 border-black rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              MEET & GREET
            </button>
            <button
              onClick={() => navigate('/booking/busesncoaches')}
              className="px-6 py-2 bg-white border-2 border-black rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              BUSES & COACHES
            </button>
            <button
              onClick={() => navigate('/booking/planmytrip')}
              className="px-6 py-2 bg-white border-2 border-black rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              MULTIPLE REQUESTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
