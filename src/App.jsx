import { useRef, useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import HeroPage from './pages/LandingPage/Hero'
import BookingPage from './pages/BookingPage/BookingPage'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import MeetnGreet from './pages/MeetnGreet'
import BusesnCoaches from './pages/BusesnCoaches'
import MultipleRequests from './pages/MultipleRequests'
import { Toaster } from './components/ui/toaster'
function App() {

  return (
    <>
  <BrowserRouter>
  
    <Navbar/>
  <Routes>
    <Route path='/' element={<HeroPage/>} exact=''/>
    <Route path='/booking' element={<BookingPage />}/>
    <Route path='/booking/meetngreet' element={<MeetnGreet/>}/>
    <Route path='/booking/busesncoaches' element={<BusesnCoaches/>}/>
    <Route path='/booking/planmytrip' element={<MultipleRequests/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
