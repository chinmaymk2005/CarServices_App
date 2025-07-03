import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainServicesCard from '../components/mainServicesCard'
import API_URL from '../config'


const services = () => {

  const [services, setServices] = useState([])

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
              <MainServicesCard key={index} subService={subService} />
            ))
          )}
        </div>



      </div>



    </div>
  )
}

export default services