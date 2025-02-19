import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import emailjs from "emailjs-com";
import CarCards from "@/components/carCards";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/db";

function BookingPage() {
  const { toast } = useToast();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get("date");
  const time = queryParams.get("time");
  const pickUpLocation = queryParams.get("pickUpLocation");
  const dropOffLocation = queryParams.get("dropOffLocation");
  const initialDays = queryParams.get("days");
  const initalHours = queryParams.get("hours") || 1;
  const service = queryParams.get("service");
  let navigate = useNavigate();
  const [cars, setCars] = useState([]);

  const [passengers, setPassengers] = useState("");
  const [suitcases, setSuitcases] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hours, setHours] = useState(initalHours);
  const [days, setDays] = useState(initialDays);
  const [bill, setBill] = useState(0);

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    flightNumber: "",
    message: "",
    pax: "",
    luggage: "",
  });

  const initialUserInfo = {
    fullName: "",
    email: "",
    phoneNumber: "",
    flightNumber: "",
    message: "",
    pax: "",
    luggage: "",
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsd = await supabase.from("cars").select("*");
        setCars(carsd.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  // Filter cars based on passengers and suitcases
  const filteredCars = cars?.filter((car) => {
    const meetsPassengerCriteria =
      car.capacity >= parseInt(passengers) || passengers === "";
    const meetsSuitcaseCriteria =
      car.suitcase_capacity >= parseInt(suitcases) || suitcases === "";
    return meetsPassengerCriteria && meetsSuitcaseCriteria;
  });

  const handleBookClick = (car) => {
    setSelectedCar(car);
    setPassengers(car.capacity);
    setSuitcases(car.suitcase_capacity);
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

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    console.log({
      car_id: selectedCar.id,
      date: date,
      time: time,
      pickup_location: pickUpLocation,
      dropoff_location: dropOffLocation === undefined && null,
      days: days ? days : null,
      hours: hours ? hours : null,
      bill: bill,
      customer_name: userInfo.fullName,
      customer_email: userInfo.email,
      customer_phone: userInfo.phoneNumber,
      flight_number: userInfo.flightNumber,
      message: userInfo.message,
    });
    await supabase.from("bookings").insert({
      car_id: selectedCar.id,
      date: date,
      time: time,
      pickup_location: pickUpLocation,
      dropoff_location: dropOffLocation ? dropOffLocation : null,
      days: days ? Number(days) : 0,
      hours: hours ? Number(hours) : 0,
      bill: bill,
      customer_name: userInfo.fullName,
      customer_email: userInfo.email,
      customer_phone: userInfo.phoneNumber,
      flight_number: userInfo.flightNumber,
      message: userInfo.message,
    });
    window.location.href="/"
    //   const emailContent = `
    //   Offer Enquiry

    //   This is a new offer enquiry for a Apollo transport service.

    //   Booking Details:
    //   Date: ${date}
    //   Time: ${time}
    //   Pick Up Location: ${pickUpLocation}
    //   ${dropOffLocation && ` Drop Off Location: ${dropOffLocation}`}
    //  ${days && ` Days: ${days}`}
    //   Service: ${service}
    //   bill : ${bill}

    //   Car Name: ${selectedCar.name}
    //   PaxCapacity: ${passengers}
    //   luggageCapacity: ${suitcases}

    //   User Information:
    //   Full Name: ${userInfo.fullName}
    //   Email: ${userInfo.email}
    //   Flight Number: ${userInfo.flightNumber}
    //   phone number : ${userInfo.phoneNumber}
    //   pax: ${userInfo.numberOfPeople}
    //   luggage: ${userInfo.numberOfSuitcases}
    //   Message: ${userInfo.message}
    // `;

    //   emailjs
    //     .send(
    //       "service_oxx754x",
    //       "template_7uq7eqg",
    //       {
    //         to_name: "Company Name", // Company Name
    //         from_name: userInfo.fullName,
    //         message: emailContent,
    //       },
    //       "ZB0s5MrgpcBV07keG"
    //     )
    //     .then(
    //       (response) => {
    //         console.log("SUCCESS!", response.status, response.text);
    //         setShowModal(false);
    //         setSelectedCar(null);
    //         setUserInfo(initialUserInfo);
    //         toast({
    //           title: "Email Sent",
    //           description: `Requested a quote for ${selectedCar.name}`,
    //           className: "bg-white text-gray-800",
    //         });

    //         // Send Copy To the Client email as well
    //         const clientMessage = `
    //       Dear ${userInfo.fullName},

    //       Thank you for choosing our services for your transportation needs.

    //       We have successfully received your booking request with the following details:

    //       **Booking Details:**
    //       Date: ${date}
    //       Time: ${time}
    //       Pick Up Location: ${pickUpLocation}
    //       ${dropOffLocation ? `Drop Off Location: ${dropOffLocation}` : ""}
    //       ${days ? `Days: ${days}` : ""}
    //       Service: ${service}
    //       total Bill : ${userInfo.totalBill}

    //       **Car Details:**
    //       Car Name: ${selectedCar.name}
    //       Pax Capacity: ${passengers}
    //       Luggage Capacity: ${suitcases}

    //       **User Information:**
    //       Full Name: ${userInfo.fullName}
    //       Email: ${userInfo.email}
    //       Phone Number: ${userInfo.phoneNumber}
    //       Flight Number: ${userInfo.flightNumber}
    //       Message: ${userInfo.message}

    //       Our team is now processing your request and will get back to you shortly with a confirmation and further details.

    //       If you have any questions or need to make changes to your booking, please do not hesitate to contact us.

    //       For cancellation or additional information, please do not hesitate to contact us.
    //       Email : info@atsworld.com

    //       Best regards,
    //       Apollo transport service
    //       `;

    //         emailjs
    //           .send(
    //             "service_oxx754x",
    //             "template_fdjemvn",
    //             {
    //               to_email: userInfo.email,
    //               from_name: "Luxury Transport & Chauffeur Service",
    //               message: clientMessage,
    //             },
    //             "ZB0s5MrgpcBV07keG"
    //           )
    //           .then((response) => {
    //             console.log("SUCCESS!", response.status, response.text);
    //           })
    //           .catch((error) => {
    //             toast({
    //               title: "Email Failed",
    //               description: "Failed to send booking request.",
    //               className: "bg-white text-red-800",
    //             });
    //           });
    //       },
    //       (error) => {
    //         console.log("FAILED...", error);
    //         setShowModal(false);
    //         setSelectedCar(null);
    //         setUserInfo(initialUserInfo);
    //         toast({
    //           title: "Email Failed",
    //           description: "Failed to send booking request.",
    //           className: "bg-white text-red-800",
    //         });
    //       }
    //     );
    // setTimeout(() => {
    //   window.location.reload();
    // }, 2000);
  };

  return (
    <div className="min-h-screen font-poppins flex flex-col-reverse md:flex-row bg-gray-100 p-6 md:p-8">
      {/* Booking Summary */}
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg mb-6 md:mb-0">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Booking Summary
        </h1>
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
            <div className="text-gray-400 uppercase text-sm">
              Pick Up Location
            </div>
            <div className="text-gray-800 text-base">{pickUpLocation}</div>
          </div>
          {service === "airportTransfer" && (
            <div className="flex flex-col gap-2">
              <div className="text-gray-400 uppercase text-sm">
                Drop Off Location
              </div>
              <div className="text-gray-800 text-base">{dropOffLocation}</div>
            </div>
          )}
          {service === "fullDayChauffeur" && (
            <div className="flex flex-col gap-2">
              <div className="text-gray-400 uppercase text-sm">Days</div>
              <div className="text-gray-800 text-base">{days}</div>
            </div>
          )}
          {service === "hourlyChauffeur" && (
            <div className="flex flex-col gap-2">
              <div className="text-gray-400 uppercase text-sm">Hours</div>
              <div className="text-gray-800 text-base">{hours}</div>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 uppercase text-sm">Service Type</div>
            <div className="text-gray-800 text-base capitalize">{service}</div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-2/3 flex justify-center items-center rounded-full py-2 hover:bg-opacity-80 text-sm lg:text-lg bg-gray-300"
          >
            <IoIosArrowRoundBack size={20} />
            Edit Booking
          </button>
        </div>
      </div>

      {/* Right */}
      {/* Filter and Car Listings */}
      <div className="w-full md:w-3/4 bg-white md:p-6 rounded-lg ">
        {/* Filter */}
        <div className="mb-6 bg-gray-100 px-6 py-8 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Filter Results
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="passengers"
                className="block text-gray-700 mb-2 font-medium"
              >
                Passengers
              </label>
              <select
                id="passengers"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                <option value="">Any</option>
                {[...Array(7)]?.map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="suitcases"
                className="block text-gray-700 mb-2 font-medium"
              >
                Suitcases
              </label>
              <select
                id="suitcases"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={suitcases}
                onChange={(e) => setSuitcases(e.target.value)}
              >
                <option value="">Any</option>
                {[...Array(5)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Car Listings */}
        {filteredCars?.map((car) => (
          <CarCards
            key={car.name}
            car={car}
            handleModalSubmit={handleModalSubmit}
            userInfo={userInfo}
            handleChange={handleChange}
            handleBookClick={handleBookClick}
            service={service} // new added
            bill={bill}
            hours={hours}
            setHours={setHours}
            days={days}
            setDays={setDays}
            setBill={setBill}
          />
        ))}
      </div>
    </div>
  );
}

export default BookingPage;
