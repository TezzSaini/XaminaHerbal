import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/sub-comp/navbar'
import Carousel from './components/sub-comp/carousel'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Navbar />
       <Carousel />
  </React.StrictMode>,
)
