import React, { useState } from "react";

function MultipleRequests() {
  const [formData, setFormData] = useState({
    people: "",
    luggagebags: "",
    transfer: false,
    chauffer: false,
    busesAndCoaches: false,
    noOfTransfers: "",
    pickupLocation: "",
    flightNumber: "",
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["people", "luggagebags", "fullName", "contactNumber", "email"];
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
      <form onSubmit={handleSubmit} className="bg-gray-200 text-black min-h-screen max-w-6xl mx-auto p-10 rounded-lg space-y-12">
        {/* Multiple Request Section */}
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Multiple Requests</h1>
          <h3 className="text-lg mb-6">Choose the Number of People and Luggage</h3>
          <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4">
            <div>
              <label htmlFor="people" className="block text-base font-normal mb-2">Number of People *</label>
              <input type="number" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="people" name="people" value={formData.people} onChange={handleChange} min="1" max="100" />
            </div>
            <div>
              <label htmlFor="luggagebags" className="block text-base font-normal mb-2">Estimated Luggage Bags *</label>
              <input type="number" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="luggagebags" name="luggagebags" value={formData.luggagebags} onChange={handleChange} min="1" max="100" />
            </div>
            <div>
              <label className="block text-base font-normal mb-2">Services *</label>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" id="transfer" name="transfer" checked={formData.transfer} onChange={handleChange} />
                <label htmlFor="transfer" className="mr-4">Transfer</label>
                <input type="checkbox" className="mr-2" id="chauffer" name="chauffer" checked={formData.chauffer} onChange={handleChange} />
                <label htmlFor="chauffer" className="mr-4">Chauffer</label>
                <input type="checkbox" className="mr-2" id="busesAndCoaches" name="busesAndCoaches" checked={formData.busesAndCoaches} onChange={handleChange} />
                <label htmlFor="busesAndCoaches">Buses and Coaches</label>
              </div>
              {formData.transfer && (
                <div className="mt-4">
                  <label htmlFor="noOfTransfers" className="block text-base font-normal mb-2">Number of Transfers *</label>
                  <input type="number" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="noOfTransfers" name="noOfTransfers" value={formData.noOfTransfers} onChange={handleChange} min="1" max="100" />
                </div>
              )}
              {formData.chauffer && (
                <div className="mt-4">
                  <label htmlFor="noOfTransfers" className="block text-base font-normal mb-2">Number of Transfers *</label>
                  <input type="number" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="noOfTransfers" name="noOfTransfers" value={formData.noOfTransfers} onChange={handleChange} min="1" max="100" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pick Up Location (conditionally displayed) */}
        {formData.busesAndCoaches && (
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">Pick Up</h1>
            <h3 className="text-lg mb-6">Provide Pickup Details</h3>
            <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4">
              <div>
                <label htmlFor="pickupLocation" className="block text-base font-normal mb-2">Pickup Location *</label>
                <input type="text" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="flightNumber" className="block text-base font-normal mb-2">Flight Number (Optional)</label>
                <input type="text" className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="flightNumber" name="flightNumber" value={formData.flightNumber} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

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

export default MultipleRequests;
