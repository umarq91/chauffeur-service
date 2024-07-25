import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useToast } from '@/components/ui/use-toast';

function MeetnGreet() {
  const { toast } = useToast();

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

  const initialFormData = {
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
  };

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
    
    const emailContent = `
      Meet & Greet Enquiry

      This is a new meet & greet enquiry for Apollo transport service.

      Booking Details:
      People: ${formData.people}
      Luggage Bags: ${formData.luggagebags}
      Pickup Location: ${formData.pickupLocation}
      Flight Number: ${formData.flightNumber}
      Pickup Date: ${formData.pickupDate}
      Pickup Time: ${formData.pickupTime}

      User Information:
      Full Name: ${formData.fullName}
      Contact Number: ${formData.contactNumber}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    emailjs.send('service_oxx754x', 'template_7uq7eqg', {
      to_name: "Apollo Transport Service",
      from_name: formData.fullName,
      message: emailContent,
    }, 'ZB0s5MrgpcBV07keG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData(initialFormData);
        toast({
          title: "Email Sent",
          description: `Requested a quote for Meet & Greet service.`,
          className: "bg-white text-gray-800"
        });

        const clientMessage = `
          Dear ${formData.fullName},

          Thank you for choosing our services for your transportation needs. 

          We have successfully received your booking request with the following details:

          **Booking Details:**
          People: ${formData.people}
          Luggage Bags: ${formData.luggagebags}
          Pickup Location: ${formData.pickupLocation}
          Flight Number: ${formData.flightNumber}
          Pickup Date: ${formData.pickupDate}
          Pickup Time: ${formData.pickupTime}

          **User Information:**
          Full Name: ${formData.fullName}
          Contact Number: ${formData.contactNumber}
          Email: ${formData.email}
          Message: ${formData.message}

          Our team is now processing your request and will get back to you shortly with a confirmation and further details.

          If you have any questions or need to make changes to your booking, please do not hesitate to contact us.

          For cancellation or additional information, please do not hesitate to contact us.
          Email: info@atsworld.com
          
          Best regards,
          Apollo Transport Service
        `;

        emailjs.send('service_oxx754x', 'template_fdjemvn', {
          to_email: formData.email,
          from_name: "Apollo Transport Service",
          message: clientMessage,
        }, 'ZB0s5MrgpcBV07keG').then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }).catch((error) => {
          toast({
            title: "Email Failed",
            description: 'Failed to send booking request.',
            className: "bg-white text-red-800"
          })
        });

      }, (error) => {
        console.log('FAILED...', error);
        toast({
          title: "Email Failed",
          description: 'Failed to send booking request.',
          className: "bg-white text-red-800"
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 font-poppins">
      <section
        id="mainbanner"
        style={{ backgroundImage: "url('https://djmag.com/sites/default/files/styles/djm_23_961x540_jpg/public/article/image/KSHMR%20Live%20Shot.jpg?itok=ffdOdRgu')" }}
        className="bg-center bg-no-repeat bg-cover banner-img-meetngreet"
      >
        <div className="flex flex-col mx-auto w-full lg:w-theme-dw py-24 px-11 md:px-0">
          <h2 className="font-bold text-4xl md:text-6xl uppercase text-white mb-4">
            Unlock Memorable Moments with Our Exclusive Meet and Greet Service!
          </h2>
          <div className="flex flex-col text-white mb-12">
            <div className="text-xl md:text-2xl">
              Personalized Experiences, Lasting Connections
            </div>
            <div className="text-xl md:text-2xl">
              Elevate Your Events with Our Premium Meet and Greet Services
            </div>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="bg-gray-200 text-black max-w-6xl mx-auto p-10 rounded-lg space-y-12">
        {/* Meet and Greet */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h1 className="text-2xl font-bold mb-4">Meet & Greet</h1>
            <h3 className="text-lg mb-6">Choose the Number of People and Luggage</h3>
          </div>
          <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4 md:col-span-2">
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
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h1 className="text-2xl font-bold mb-4">Pick Up</h1>
            <h3 className="text-lg mb-6">Provide Pickup Details</h3>
          </div>
          <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4 md:col-span-2">
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

        {/* User Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h1 className="text-2xl font-bold mb-4">User Information</h1>
            <h3 className="text-lg mb-6">Provide Your Contact Information</h3>
          </div>
          <div className="bg-white p-5 rounded-md shadow-md text-gray-800 space-y-4 md:col-span-2">
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
              <textarea className="py-2 px-3 w-full border-gray-300 border-2 rounded-md" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <button type="submit" className="py-2 px-4 md:w-1/3 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MeetnGreet;
