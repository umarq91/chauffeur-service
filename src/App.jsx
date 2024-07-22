import { useRef, useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import HeroPage from './pages/LandingPage/Hero'
import BookingPage from './pages/BookingPage/BookingPage'
function App() {

  return (
    <>
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<HeroPage/>} exact=''/>
    <Route path='/booking' element={<BookingPage />}/>

  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
