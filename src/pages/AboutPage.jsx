import React from 'react';

function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-900 font-poppins">
      <nav className="py-5 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">Apollo Transportation Service</a>
         
        </div>
      </nav>

      <section id="mission" className="py-20 bg-indigo-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Mission: Excellence in Motion</h2>
          <p className="text-lg max-w-3xl mx-auto">To provide the highest standard of personalized chauffeur services, meticulously designed to meet the unique needs of each client. We strive to make every trip a seamless and memorable experience, blending elegance, efficiency, and professionalism.</p>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Executive Transportation</h3>
              <p className="text-gray-700">Ideal for corporate clients seeking reliable, discreet, and professional transportation for meetings, conferences, and business engagements.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Airport Transfers</h3>
              <p className="text-gray-700">Ensuring timely, comfortable transfers to and from major airports, making your travel experience hassle-free from start to finish.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Special Events</h3>
              <p className="text-gray-700">Offering luxury transportation for weddings, parties, and other special occasions, adding a touch of sophistication to your memorable events.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Tours and Sightseeing</h3>
              <p className="text-gray-700">Providing customized tours with knowledgeable chauffeurs, allowing you to explore top attractions in ultimate style and comfort.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Exquisite Fleet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://www.detroitnews.com/gcdn/presto/2019/05/13/PDTN/2309ce7d-a291-401e-a085-29efa904649d-B99776835Z.1_20190512204931_000_GBS2FPMA8.1-0.jpg?crop=4255,2318,x0,y220" alt="Sedan" className="w-full h-48 object-cover rounded-lg mb-6"/>
              <h3 className="text-xl font-semibold mb-4">Sedans</h3>
              <p className="text-gray-700">Sleek and sophisticated, our sedans are perfect for corporate travel and everyday luxury.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://www.jeep.co.uk/content/dam/jeep/crossmarket/my23-quality-check/suv/725x408-Grand-Cherokee.jpg" alt="SUV" className="w-full h-48 object-cover rounded-lg mb-6"/>
              <h3 className="text-xl font-semibold mb-4">SUVs</h3>
              <p className="text-gray-700">Spacious and comfortable, our SUVs provide ample room for you and your companions, ensuring a smooth ride.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://www.deluxelimohouston.com/wp-content/uploads/2018/12/the-limos_1-e1564076482159.jpeg" alt="Limousine" className="w-full h-48 object-cover rounded-lg mb-6"/>
              <h3 className="text-xl font-semibold mb-4">Limousines</h3>
              <p className="text-gray-700">Our limousines offer unparalleled luxury, perfect for special occasions and VIP transport.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="chauffeurs" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Elite Chauffeurs</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-4">John Doe</h3>
        <p className="text-gray-700">Experienced chauffeur with over 10 years of service, committed to safety and customer satisfaction.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-4">Jane Smith</h3>
        <p className="text-gray-700">Professional and courteous, Jane ensures a comfortable and enjoyable ride every time.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-4">Michael Johnson</h3>
        <p className="text-gray-700">Known for his impeccable driving skills and friendly demeanor, Michael is the ideal chauffeur for any occasion.</p>
      </div>
    </div>
  </div>
</section>


      <section id="whychoose" className="py-20 bg-indigo-600 text-white ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Apollo Transportation Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800" >
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Unwavering Reliability</h3>
              <p className="text-gray-700">Punctuality is our hallmark. We understand the importance of time and guarantee timely arrivals and departures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Unmatched Luxury and Comfort</h3>
              <p className="text-gray-700">Travel in style with our fleet of luxury vehicles, designed to provide maximum comfort and sophistication.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Professional Chauffeurs</h3>
              <p className="text-gray-700">Our chauffeurs are highly trained, courteous, and dedicated to making your journey enjoyable and stress-free.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Personalized Services</h3>
              <p className="text-gray-700">We cater to your specific needs, ensuring a tailored experience that matches your preferences and schedule.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Luxury Travel?</h2>
          <p className="text-lg mb-8">Contact us today to book your next ride with Apollo Transportation Service. Our team is here to ensure your journey is as comfortable and luxurious as possible.</p>
          <a href="/contact" className="bg-indigo-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">Get in Touch</a>
        </div>
      </section>

      <footer className="py-10 bg-indigo-800 text-white text-center">
        <div className="container mx-auto">
          <p className="mb-4">&copy; 2024 Apollo Transportation Service. All rights reserved.</p>
          <ul className="flex justify-center space-x-4">
            <li><a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-indigo-400">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
