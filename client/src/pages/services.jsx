'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainServicesCard from '../components/mainServicesCard'
import API_URL from '../config'
import { useNavigate } from 'react-router'
import VideoSection from '../components/videoSection'

const services = () => {
  const [services, setServices] = useState([])
  const navigate = useNavigate()

  // Fetch services from the server when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/getServices`)
        const data = await response.json()
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
      <div className="px-4 py-4 text-center text-sm md:text-base">
        <VideoSection />
        <h1 className="text-2xl md:text-3xl font-bold m-4">
          Services
        </h1>
      </div>

      {/* Services cards */}
      <div className="container mx-auto px-4 py-8 w-full bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <h3 className="text-2xl font-bold mb-4">YourCarStylist</h3>
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
              <h4 className="text-lg font-semibold mb-4 text-center">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-center">
                <li>
                  <a
                    href="https://instagram.com/yourcarstylist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Images/instagram.png"
                      alt="Instagram"
                      className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://facebook.com/yourcarstylist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Images/facebook.png"
                      alt="Facebook"
                      className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/message/NS2A54OU2UE2K1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Images/whatsapp.png"
                      alt="WhatsApp"
                      className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://youtube.com/@yourcarstylist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/Images/youtube.png"
                      alt="YouTube"
                      className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </li>

              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="border-b border-gray-500 pb-2">Shop no. 1 Your Car Stylist, Near KM Agrawal College, Opposite Dr. Babasaheb Ambedkar Bhavan, Padgha road, Kalyan(W) 421301.</p>

                <p className="border-b border-gray-500 pb-2">+91 8779638922</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 YourCarStylist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default services
