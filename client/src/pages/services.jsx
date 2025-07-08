'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainServicesCard from '../components/mainServicesCard'
import API_URL from '../config'
import { useNavigate } from 'react-router'


const services = () => {

  const [services, setServices] = useState([])
  const navigate = useNavigate()

  // Fetch services from the server when the component mounts
  useEffect(() => {

    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/getServices`)
        const data = await response.json()
        // console.log('Fetched services:', data[0].subServices[1].name);

        setServices(data)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchServices()
  }, [])

  return (
    <div>
      <Navbar />

      {/* Hero section */}
      <b>Video and photo will come here</b>


      {/* Services cards */}
      <div className="container mx-auto px-4 py-8 w-full bg-blue-50">
        <h1 className="text-3xl font-bold text-center mb-8">Car Detailing Pricelist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) =>
            service.subServices.map((subService, index) => (
              <MainServicesCard key={index} subService={subService} service={service} />
            ))
          )}
        </div>
      </div>

      {/* Footer section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CarCare Pro</h3>
              <p className="text-gray-400">
                Your trusted partner for premium car care services. Quality work, fair prices, satisfied customers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Car Servicing</li>
                <li>Scratch Removal</li>
                <li>Car Painting</li>
                <li>Detailing & Polish</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className='cursor-pointer' onClick={() => navigate('/')}>Home</button></li>
                <li><button className='cursor-pointer' onClick={() => navigate('/services')}>Services</button></li>
                <li><button className='cursor-pointer' onClick={() => navigate('/booking')}>Book Now</button></li>
                <li><button className='cursor-pointer' onClick={() => navigate('/contactUs')}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Service Road, Mumbai</p>
                <p>+91 98765 43210</p>
                <p>info@cargarageservice.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CarCare Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default services