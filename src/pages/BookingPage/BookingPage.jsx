import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import emailjs from 'emailjs-com';
import { carsData } from '@/data/cars';
import CarCards from '@/components/carCards';

function BookingPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const pickUpLocation = queryParams.get('pickUpLocation');
  const dropOffLocation = queryParams.get('dropOffLocation');
  const days = queryParams.get('days');
  const service = queryParams.get('service');
  let navigate = useNavigate();

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
    <div className="min-h-screen font-poppins flex flex-col-reverse md:flex-row bg-gray-100 p-6 md:p-8">
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
          <button
            onClick={() => navigate('/')}
            className='w-2/3 flex justify-center items-center rounded-full py-2 hover:bg-opacity-80 bg-gray-300'>
            <IoIosArrowRoundBack size={20} />
            Edit Booking
          </button>
        </div>
      </div>

      {/* Right */}
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
          <CarCards key={car.name} car={car}
            handleModalSubmit={handleModalSubmit}
            userInfo={userInfo}
            handleChange={handleChange}
            handleBookClick={handleBookClick}
          />
        ))}

        
      </div>
    </div>
  );
}

export default BookingPage;
