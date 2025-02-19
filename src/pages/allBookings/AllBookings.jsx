import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/db";
import { FiCheckCircle, FiXCircle, FiMessageSquare } from "react-icons/fi";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await supabase.from("bookings").select("*, cars(*)");
        setBookings(data);
        setFilteredBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  // Filter bookings based on status
  useEffect(() => {
    if (filterStatus === "All") {
      setFilteredBookings(bookings); // Show all bookings
    } else {
      setFilteredBookings(
        bookings.filter((booking) => booking.status === filterStatus)
      );
    }
  }, [filterStatus, bookings]);

  const updateStatus = async (id, status) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", id);
      if (error) {
        console.error("Error updating booking:", error);
      } else {
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.id === id ? { ...booking, status } : booking
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Your Bookings</h1>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          className="border p-2 rounded-lg"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Bookings</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
        </select>
      </div>

      {/* Booking Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBookings.map((booking) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <img
              src={booking.cars?.image_url}
              alt={booking.cars?.name}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {booking.cars?.name} ({booking?.cars?.brand} -{" "}
                {booking.cars.year})
              </h2>
              <p className="text-gray-600">Booking ID: {booking.id}</p>
              <p>
                <strong>Pickup:</strong> {booking.pickup_location}
              </p>
              {booking.dropoff_location && (
                <p>
                  <strong>Dropoff:</strong> {booking.dropoff_location}
                </p>
              )}
              <p>
                <strong>Date:</strong>{" "}
                {new Date(booking.date).toLocaleDateString()}{" "}
                <strong>Time:</strong> {booking.time}
              </p>
              {booking.days && (
                <p>
                  <strong>Days:</strong> {booking.days}
                </p>
              )}
              {booking.hours && (
                <p>
                  <strong>Hours:</strong> {booking.hours}
                </p>
              )}
              <p>
                <strong>Bill:</strong> PKR {booking.bill.toFixed(2)}
              </p>
              <p>
                <strong>Customer:</strong> {booking.customer_name} (
                {booking.customer_email})
              </p>
              <p>
                <strong>Phone:</strong> {booking.customer_phone}
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-500">
                <strong>Status:</strong> {booking.status}
              </p>
              <div className="flex justify-around mt-4">
                {booking.status === "pending" && (
                  <>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                      onClick={() => updateStatus(booking.id, "cancelled")}
                    >
                      <FiXCircle /> Cancel
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                      onClick={() => updateStatus(booking.id, "confirmed")}
                    >
                      <FiCheckCircle /> Confirm
                    </button>
                  </>
                )}
                {booking.status === "confirmed" && (
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${booking.customer_phone}`,
                        "_blank"
                      )
                    }
                  >
                    <FiMessageSquare /> WhatsApp
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminBookings;
