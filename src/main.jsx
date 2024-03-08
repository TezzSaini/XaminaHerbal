import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/homepage/Navbar'
import Carousel from './components/homepage/Carousel'
import Services from './components/homepage/services'
import AboutCompany from './components/homepage/AboutCompany'
import Footer from './components/homepage/footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Navbar />
       <Carousel />
       <Services/>
       <AboutCompany />
       <Footer />
  </React.StrictMode>,
)
