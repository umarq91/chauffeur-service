import React from 'react';
import { motion } from 'framer-motion';

function HowThisWorks() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-4 text-center my-10">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-2xl text-green-800 mb-4"
      >
        How This Works
      </motion.h2>
      <motion.h5
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-8 text-4xl"
      >
        Get service in 3 simple steps
      </motion.h5>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-xs text-center p-4"
        >
          <img
            className="w-20 h-20 mx-auto mb-4"
            src="https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg"
            alt="Choose Location"
          />
          <h3 className="text-xl font-semibold mb-2">Choose Location</h3>
          <p className="text-gray-600 text-xs">
            Choose your location to find the best car for you
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="max-w-xs text-center p-4"
        >
          <img
            className="w-20 h-20 mx-auto mb-4"
            src="https://st2.depositphotos.com/2704315/9133/v/450/depositphotos_91339136-stock-illustration-hand-with-pen-mark-calendar.jpg"
            alt="Pick up date"
          />
          <h3 className="text-xl font-semibold mb-2">Pick Up Date</h3>
          <p className="text-gray-600 text-xs">
            Pick up date and time according to you
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="max-w-xs text-center p-4"
        >
          <img
            className="w-20 h-20 mx-auto mb-4 object-cover"
            src="https://static.vecteezy.com/system/resources/thumbnails/006/428/439/small_2x/flat-yellow-sport-car-with-isolated-white-background-modern-car-design-free-vector.jpg"
            alt="Book a Car"
          />
          <h3 className="text-xl font-semibold mb-2">Book a Car</h3>
          <p className="text-gray-600 text-xs">
            Book the car according to people, preferences, and luggage
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HowThisWorks;
