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
    <div className="min-h-screen flex flex-col flex-col-reverse md:flex-row bg-gray-100 p-4 md:p-8">
      <div className="w-full md:w-1/4 bg-white p-6 md:p-8 rounded-md shadow-md mb-6 md:mb-0">
        <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>
        <p className="text-gray-700 mb-2">Date: {date}</p>
        <p className="text-gray-700 mb-2">Time: {time}</p>
        <p className="text-gray-700 mb-2">Pick Up Location: {pickUpLocation}</p>
        {service === 'airportTransfer' && (
          <p className="text-gray-700 mb-2">Drop Off Location: {dropOffLocation}</p>
        )}
        {service === 'fullDayChauffeur' && (
          <p className="text-gray-700 mb-2">Days: {days}</p>
        )}
        <p className="text-gray-700 mb-2">Service: {service}</p>
      </div>
      <div className="w-full md:w-3/4 bg-white p-6 md:p-8 rounded-md shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Filter Results</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className='w-full md:w-1/2 mb-4 md:mb-0'>
              <label htmlFor="passengers" className="block text-gray-700 mb-1">Passengers</label>
              <select
                id="passengers"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className='w-full md:w-1/2'>
              <label htmlFor="suitcases" className="block text-gray-700 mb-1">Suitcases</label>
              <select
                id="suitcases"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={suitcases}
                onChange={(e) => setSuitcases(e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        {filteredCars.map((car) => (
          <motion.div 
            className="flex flex-col md:flex-row mb-8 bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer" 
            key={car.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img className="w-full md:w-1/3 rounded-lg object-cover mb-4 md:mb-0" src={car.img} alt={car.name} />
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{car.name}</h2>
                  <span className="text-white px-3 py-2 rounded-md text-sm bg-gray-400">{car.policy}</span>
                </div>
                <p className="mt-2 text-gray-700">{car.description}</p>
                <div className="flex mt-4 text-gray-600">
                  <div className="flex items-center mr-6">
                    <FaUsers className="mr-2" /> {car.numberofPeople} Passengers
                  </div>
                  <div className="flex items-center">
                    <FaSuitcase className="mr-2" /> {car.numberofSuitcases} Suitcases
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Book</button>
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
