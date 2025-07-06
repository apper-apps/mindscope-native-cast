import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Services from '@/components/pages/Services'
import Packages from '@/components/pages/Packages'
import Testimonials from '@/components/pages/Testimonials'
import Blog from '@/components/pages/Blog'
import BookConsultation from '@/components/pages/BookConsultation'
import BookingConfirmation from '@/components/pages/BookingConfirmation'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </Router>
  )
}

export default App