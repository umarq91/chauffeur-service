import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 font-poppins">
      <div className="bg-gray-200 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 items-center place-items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-lg mb-2">Address</h1>
          <p className="flex items-center text-xl">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-green-500 text-2xl" />
            Lorem Address Place
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-lg mb-2">Phone</h1>
          <p className="flex items-center text-xl">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-500 text-2xl" />
            BOOK A RIDE: +973 3214 1440 
          </p>
          <p className="flex items-center text-xl mt-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-500 text-2xl" />
            OFFICE: +973 1700 1550
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-lg mb-2">Working Hours</h1>
          <p className="flex items-center text-xl">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-green-500 text-2xl" />
            24/7
          </p>
        </div>
      </div>
      <div className="w-full py-12 mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-around">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">Apollo transport service</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline mr-4 md:mr-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline mr-4 md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline mr-4 md:mr-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
