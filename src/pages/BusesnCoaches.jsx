import React, { useState } from "react";

function BusesnCoaches() {
  const [formData, setFormData] = useState({
    people: "",
    luggagebags: "",
    pickupLocation: "",
    flightNumber: "",
    pickupDate: "",
    pickupTime: "",
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["people", "luggagebags", "pickupLocation", "flightNumber", "pickupDate", "pickupTime", "fullName", "contactNumber", "email"];
    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      alert("Please fill all the required fields.");
      return;
    }
    console.log(formData);
    // Handle form submission here (e.g., send email)
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800">
      <section
        id="mainbanner"
        style={{ backgroundImage: "url('https://djmag.com/sites/default/files/styles/djm_23_961x540_jpg/public/article/image/KSHMR%20Live%20Shot.jpg?itok=ffdOdRgu')" }}
        className="bg-center bg-no-repeat bg-cover banner-img-meetngreet"
      >
        <div className="flex flex-col mx-auto w-full lg:w-theme-dw py-24 px-11 md:px-0">
          <h2 className="font-bold text-4xl md:text-6xl uppercase text-white mb-4">
          RIDE IN COMFORT, ARRIVE IN STYLE: YOUR PREMIER BUSES AND COACHES SERVICE AWAITS!
          </h2>
          <div className="flex flex-col text-white mb-12">
            <div className="text-xl md:text-2xl">
            Seamless Travel Solutions for Every Occasion
            Choose Luxury, Choose Convenience with Our Exclusive Buses and Coaches Service
            </div>
            <div className="text-xl md:text-2xl">
              Elevate Your Events with Our Premium Meet and Greet Services
            </div>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="bg-gray-200 text-black min-h-screen max-w-6xl mx-auto p-10 rounded-lg space-y-12">
        {/* Meet and Greet */}
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Buses & Caoches</h1>
          <h3 className="text-lg mb-6">Choose the No of People and Luggage</h3>
          <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4">
            <div>
              <label htmlFor="people" className="block text-base font-normal mb-2">Number of People *</label>
              <input type="number" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="people" name="people" value={formData.people} onChange={handleChange} min="1" max="100" />
            </div>
            <div>
              <label htmlFor="luggagebags" className="block text-base font-normal mb-2">Estimated Luggage Bags *</label>
              <input type="number" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="luggagebags" name="luggagebags" value={formData.luggagebags} onChange={handleChange} min="1" max="100" />
            </div>
          </div>
        </div>

        {/* Pick Up */}
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Pick Up</h1>
          <h3 className="text-lg mb-6">Provide Pickup Details</h3>
          <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4">
            <div>
              <label htmlFor="pickupLocation" className="block text-base font-normal mb-2">Pickup Location *</label>
              <input type="text" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="flightNumber" className="block text-base font-normal mb-2">Flight Number *</label>
              <input type="text" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="flightNumber" name="flightNumber" value={formData.flightNumber} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="pickupDate" className="block text-base font-normal mb-2">Date *</label>
              <input type="date" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="pickupDate" name="pickupDate" value={formData.pickupDate} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="pickupTime" className="block text-base font-normal mb-2">Time *</label>
              <input type="time" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="pickupTime" name="pickupTime" value={formData.pickupTime} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Guest Details */}
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Guest Details</h1>
          <h3 className="text-lg mb-6">Provide Guest Information</h3>
          <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-base font-normal mb-2">Full Name *</label>
              <input type="text" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-base font-normal mb-2">Contact Number *</label>
              <input type="text" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-normal mb-2">Email *</label>
              <input type="email" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message" className="block text-base font-normal mb-2">Message (Optional)</label>
              <textarea className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="message" name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 transition duration-300">
          Request a quote
        </button>
      </form>
    </div>
  );
}

export default BusesnCoaches;
