import { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroPage from "./pages/LandingPage/Hero";
import BookingPage from "./pages/BookingPage/BookingPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import MeetnGreet from "./pages/MeetnGreet";
import BusesnCoaches from "./pages/BusesnCoaches";
import MultipleRequests from "./pages/MultipleRequests";
import { Toaster } from "./components/ui/toaster";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import AdminBookings from "./pages/allBookings/AllBookings";
import { UserProvider } from "./UserContext";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} exact="" />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/admin" element={<AdminBookings />} />
            <Route path="/booking/meetngreet" element={<MeetnGreet />} />
            <Route path="/booking/busesncoaches" element={<BusesnCoaches />} />
            <Route path="/booking/planmytrip" element={<MultipleRequests />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} exact="" />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
