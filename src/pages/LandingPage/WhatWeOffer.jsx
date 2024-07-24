import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const images = [
  { src: "https://i0.wp.com/silimo.co/wp-content/uploads/2024/03/chauffeur-service.jpg", title: "Chauffeur Service", link: "" },
  { src: "https://qatarchauffeurs.com/wp-content/uploads/2022/02/airportservice2.jpg", title: "Airport Transfer Service", link: "" },
  { src: "https://qph.cf2.quoracdn.net/main-qimg-b47a4c74fc75b824028555b777220782", title: "Meet & Greet", link: "/booking/meetngreet" },
  { src: "https://www.nationalbuscharter.com/blog/wp-content/uploads/2021/02/national-charter-bus-fleet.jpg", title: "Buses and Coaches", link: "/booking/busesncoaches" },
];

function WhatWeOffer() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link) {
      navigate(link);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
  <div className='bg-gray-200'>
      <div className="p-4 mt-1 max-w-6xl mx-auto">
      <h2 className="text-2xl   text-center text-green-800">What We Offer</h2>
      <h3 className='text-center mb-8 text-4xl'>See What We Can Do For You</h3>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
            onClick={() => handleClick(image.link)}
          >
            <img
              className="w-full h-full object-cover"
              src={image.src}
              alt={image.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default WhatWeOffer;
