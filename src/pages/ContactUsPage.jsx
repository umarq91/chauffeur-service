import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [contactInfo] = useState({
    address: '1230 Maecenas Street Donec Road, New York, EEUU',
    phone: '+1 (123) 456-7890',
    email: 'tailnext@gmail.com',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjt1y07', 'template_axw0oba', e.target, 'Lk3rT6NGL9L5D4x1X')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="bg-gray-50 text-gray-900 font-poppins">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-indigo-600">
              Contact Us
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
              We’re Here to Serve You
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
              At Apollo Transportation Service, your satisfaction is our top priority. Whether you have a question, need a quote, or want to book a ride, our dedicated team is here to assist you.
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8 pr-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Call Us</h3>
                <p className="text-gray-600">Speak directly with one of our friendly representatives for immediate assistance or to make a reservation.</p>
                <p className="text-gray-600">Phone: {contactInfo.phone}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Email Us</h3>
                <p className="text-gray-600">For inquiries, quotes, or detailed information about our services, send us an email, and we’ll respond promptly.</p>
                <p className="text-gray-600">Email: {contactInfo.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Visit Us</h3>
                <p className="text-gray-600">We welcome you to visit our office to discuss your transportation needs in person.</p>
                <p className="text-gray-600">Address: {contactInfo.address}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Office Hours</h3>
                <p className="text-gray-600">Our office is open and ready to assist you 24 hours, 7 days.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Connect with Us</h3>
                <p className="text-gray-600">Stay updated with the latest news, offers, and services by following us on social media:</p>
                <ul className="flex space-x-4">
                  <li><a href="#" className="text-indigo-600">Facebook</a></li>
                  <li><a href="#" className="text-indigo-600">Twitter</a></li>
                  <li><a href="#" className="text-indigo-600">Instagram</a></li>
                  <li><a href="#" className="text-indigo-600">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Ready to Get Started?</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="phone" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input type="text" id="phone" autoComplete="tel" placeholder="Your phone number" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="phone" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="subject" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input type="text" id="subject" autoComplete="subject" placeholder="Subject" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="subject" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 font-xl rounded-md hover:bg-indigo-700 transition-colors duration-300">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Feedback</h3>
          <p className="text-gray-600">Your feedback is invaluable to us. If you’ve recently used our services, please let us know how we did. Your comments help us improve and continue to provide exceptional service.</p>
          <a href="#" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 font-xl rounded-md hover:bg-indigo-700 transition-colors duration-300">Feedback Form</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
