import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUsers, FaSuitcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { carsData } from '@/data/cars';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+1',
    flightNumber: '',
    message: ''
  });

  // Car data
  // Filter cars based on passengers and suitcases
  const filteredCars = carsData.filter(car => {
    const meetsPassengerCriteria = passengers === '' || car.numberofPeople >= parseInt(passengers);
    const meetsSuitcaseCriteria = suitcases === '' || car.numberofSuitcases >= parseInt(suitcases);
    return meetsPassengerCriteria && meetsSuitcaseCriteria;
  });

  const handleBookClick = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedCar(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    const emailContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <header style="background-color: #f4f4f4; padding: 20px; text-align: center;">
        <img src="your-logo-url-here" alt="Company Logo" style="width: 150px;">
      </header>
      <main style="padding: 20px;">
        <h2>Offer Enquiry</h2>
        <p>This is a new offer enquiry for a chauffeured service from Luxury transport & chauffeur service.</p>
        <p>Please send your offer/quotation directly to <strong>${userInfo.fullName}</strong> at <strong>${userInfo.email}</strong></p>
        <h3>Booking Details</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Pick Up Location:</strong> ${pickUpLocation}</p>
        <p><strong>Drop Off Location:</strong> ${dropOffLocation}</p>
        <p><strong>Days:</strong> ${days}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Suitcases:</strong> ${suitcases}</p>
        <p><strong>Car Name:</strong> ${selectedCar.name}</p>
        <h3>User Information</h3>
        <p><strong>Full Name:</strong> ${userInfo.fullName}</p>
        <p><strong>Email:</strong> ${userInfo.email}</p>
        <p><strong>Phone Number:</strong> ${userInfo.countryCode} ${userInfo.phoneNumber}</p>
        <p><strong>Flight Number:</strong> ${userInfo.flightNumber}</p>
        <p><strong>Message:</strong> ${userInfo.message}</p>
      </main>
      <footer style="background-color: #f4f4f4; padding: 20px; text-align: center;">
        <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  `;

  emailjs.send('service_oxx754x', 'template_7uq7eqg', {
    to_name: userInfo.fullName,
    from_name: 'Your Company Name', // or get this dynamically if needed
    message: emailContent,
  }, 'ZB0s5MrgpcBV07keG')
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert('Booking request sent successfully!');
  }, (error) => {
    console.log('FAILED...', error);
    alert('Failed to send booking request.');
  });



    setShowModal(false);
    setSelectedCar(null);
  };

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
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
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
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => handleBookClick(car)}
                      className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                    >
                      Book Now
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle>Book {car.name}</DialogTitle>
                      <DialogDescription>Fill in your details to complete the booking.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleModalSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={userInfo.fullName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={userInfo.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={userInfo.phoneNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="countryCode" className="block text-gray-700">Country Code</label>
                          <input
                            type="text"
                            id="countryCode"
                            name="countryCode"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={userInfo.countryCode}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="flightNumber" className="block text-gray-700">Flight Number</label>
                          <input
                            type="text"
                            id="flightNumber"
                            name="flightNumber"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={userInfo.flightNumber}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-gray-700">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={userInfo.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button
                          type="submit"
                          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BookingPage;
