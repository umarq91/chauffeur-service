import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUsers, FaSuitcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

function BookingPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const pickUpLocation = queryParams.get('pickUpLocation');
  const dropOffLocation = queryParams.get('dropOffLocation');
  const days = queryParams.get('days');
  const service = queryParams.get('service');

  const [passengers, setPassengers] = useState('');
  const [suitcases, setSuitcases] = useState('');

  // Car data
  let carsData = [
    {
      name: 'SUV',
      img: 'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/seo-category/desktop/suvssummary2desktop.png?fit=constrain&qlt=100&wid=550&resMode=bisharp',
      numberofPeople: 4,
      numberofSuitcases: 2,
      description: 'A comfortable sedan with high-end features and a smooth driving experience. The Toyota Camry offers a refined interior, advanced safety features, and a reputation for reliability. With a spacious cabin, it accommodates up to four passengers and two suitcases, making it an ideal choice for both business trips and family vacations.',
      cancellationPolicy: 'Free cancellation up to 72 hours before pick-up',
      policy: 'On request'
    },
    {
      name: 'Honda Accord',
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      numberofPeople: 5,
      numberofSuitcases: 3,
      description: 'A reliable and spacious sedan with modern amenities. The Honda Accord is known for its comfort, efficiency, and stylish design. It offers ample room for five passengers and three suitcases, ensuring a pleasant and practical ride for any occasion. Advanced technology and safety features enhance the driving experience.',
      cancellationPolicy: 'Free cancellation up to 48 hours before pick-up',
      policy: 'On request'
    },
    {
      name: 'Van',
      img: 'https://www.apricottours.pk/wp-content/uploads/2017/03/premium-high-roof-van.jpg',
      numberofPeople: 7,
      numberofSuitcases: 5,
      description: 'A luxury SUV offering premium features and plenty of space. The BMW X5 combines performance, luxury, and versatility. With seating for seven and space for five suitcases, it is perfect for long trips and group travel. High-end interior materials, cutting-edge technology, and powerful performance make every journey enjoyable.',
      cancellationPolicy: 'Free cancellation up to 24 hours before pick-up',
      policy: 'On request'
    }
  ];

  // Filter cars based on passengers and suitcases
  const filteredCars = carsData.filter(car => {
    const meetsPassengerCriteria = passengers === '' || car.numberofPeople >= parseInt(passengers);
    const meetsSuitcaseCriteria = suitcases === '' || car.numberofSuitcases >= parseInt(suitcases);
    return meetsPassengerCriteria && meetsSuitcaseCriteria;
  });

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row bg-gray-100 p-6 md:p-8">
      {/* Booking Summary */}
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Booking Summary</h1>
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 uppercase text-sm">Date</div>
            <div className="text-gray-800 text-base">{date}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 uppercase text-sm">Time</div>
            <div className="text-gray-800 text-base">{time}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 uppercase text-sm">Pick Up Location</div>
            <div className="text-gray-800 text-base">{pickUpLocation}</div>
          </div>
          {service === 'airportTransfer' && (
            <div className="flex flex-col gap-2">
              <div className="text-gray-400 uppercase text-sm">Drop Off Location</div>
              <div className="text-gray-800 text-base">{dropOffLocation}</div>
            </div>
          )}
          {service === 'fullDayChauffeur' && (
            <div className="flex flex-col gap-2">
              <div className="text-gray-400 uppercase text-sm">Days</div>
              <div className="text-gray-800 text-base">{days}</div>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 uppercase text-sm">Service Type</div>
            <div className="text-gray-800 text-base capitalize">{service}</div>
          </div>
        </div>
      </div>

      {/* Filter and Car Listings */}
      <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
        {/* Filter */}
        <div className="mb-6 bg-gray-100 px-6 py-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter Results</h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className='w-full md:w-1/2 mb-4 md:mb-0'>
              <label htmlFor="passengers" className="block text-gray-700 mb-2 font-medium">Passengers</label>
              <select
                id="passengers"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                <option value="">Any</option>
                {[...Array(7)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
            <div className='w-full md:w-1/2'>
              <label htmlFor="suitcases" className="block text-gray-700 mb-2 font-medium">Suitcases</label>
              <select
                id="suitcases"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={suitcases}
                onChange={(e) => setSuitcases(e.target.value)}
              >
                <option value="">Any</option>
                {[...Array(5)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Car Listings */}
        {filteredCars.map((car) => (
          <motion.div 
            className="flex flex-col md:flex-row mb-8 bg-gray-50 p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            key={car.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img className="w-full md:w-1/3 rounded-lg object-cover mb-4 md:mb-0" src={car.img} alt={car.name} />
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{car.name}</h2>
                  <span className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm">{car.policy}</span>
                </div>
                <p className="mt-2 text-gray-700">{car.description}</p>
                <div className="flex mt-4 text-gray-600">
                  <div className="flex items-center mr-6">
                    <FaUsers className="mr-2 text-blue-500" /> {car.numberofPeople} Passengers
                  </div>
                  <div className="flex items-center">
                    <FaSuitcase className="mr-2 text-blue-500" /> {car.numberofSuitcases} Suitcases
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2">Book</button>
                <span className="text-sm text-gray-500">{car.cancellationPolicy}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BookingPage;