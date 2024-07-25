import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { motion } from 'framer-motion';
import { FaUsers, FaSuitcase } from 'react-icons/fa';

function CarCards({ car, handleModalSubmit, handleBookClick, userInfo, handleChange }) {
  return (
    <motion.div
      className="flex flex-col lg:flex-row mb-8 bg-gray-50 p-6 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      key={car.name}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        className="w-full lg:w-[35%] rounded-lg object-cover mb-4 md:mb-0"
        src={car.img}
        alt={car.name}
      />
      <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{car.name}</h2>
            <span className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm">
              {car.policy}
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-700">{car.description}</p>
          <div className="flex flex-col md:flex-row mt-4 text-gray-600">
            <div className="flex items-center mr-6 mb-2 md:mb-0">
              <FaUsers className="mr-2 text-blue-500" /> {car.numberofPeople}{" "}
              Passengers
            </div>
            <div className="flex items-center">
              <FaSuitcase className="mr-2 text-blue-500" />{" "}
              {car.numberofSuitcases} Suitcases
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={() => handleBookClick(car)}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 w-full md:w-auto"
              >
                Book Now
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Book {car.name}</DialogTitle>
                <DialogDescription>
                  Fill in your details to complete the booking.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleModalSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700">
                      Full Name
                    </label>
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
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
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
                    <label htmlFor="phoneNumber" className="block text-gray-700">
                      Phone Number
                    </label>
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
                    <label htmlFor="numberOfPeople" className="block text-gray-700">
                      Number of People
                    </label>
                    <input
                      type="number"
                      id="numberOfPeople"
                      name="numberOfPeople"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={userInfo.numberOfPeople}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="numberOfSuitcases" className="block text-gray-700">
                      Number of Suitcases
                    </label>
                    <input
                      type="number"
                      id="numberOfSuitcases"
                      name="numberOfSuitcases"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={userInfo.numberOfSuitcases}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="flightNumber" className="block text-gray-700">
                      Flight Number
                    </label>
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
                    <label htmlFor="message" className="block text-gray-700">
                      Message
                    </label>
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
                    Request a quote
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          <div className="text-gray-400 text-sm">{car.cancellationPolicy}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default CarCards;
