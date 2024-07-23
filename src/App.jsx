import { useRef, useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import HeroPage from './pages/LandingPage/Hero'
import BookingPage from './pages/BookingPage/BookingPage'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
function App() {

  return (
    <>
  <BrowserRouter>
  
    <Navbar/>
  <Routes>
    <Route path='/' element={<HeroPage/>} exact=''/>
    <Route path='/booking' element={<BookingPage />}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
