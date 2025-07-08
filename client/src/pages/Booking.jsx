;'use client'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import API_URL from '../config';
import Navbar from '../components/Navbar';

const Booking = () => {
  const { id, subServiceName } = useParams();
  const [subService, setSubService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceById = async () => {
      try {
        const response = await fetch(`${API_URL}/api/getBookService/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const service = await response.json();

        const foundSubService = service.subServices.find(
          s => s.name === decodeURIComponent(subServiceName)
        );

        console.log("Subservice fetched: ", foundSubService);
        setSubService(foundSubService);
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    };

    fetchServiceById();
  }, [id, subServiceName]);

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Confirm Your Booking!
        </h1>

        {subService ? (
          <div className="space-y-6">
            {/* Service Details Box */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-3">
                {subService.name}
              </h2>

              <div className="bg-gray-50 p-4 rounded-lg mb-5 border-l-6 border-orange-500">
                <p className="text-base leading-relaxed text-gray-600 m-0">
                  {subService.description}
                </p>
              </div>

              <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg border border-green-200">
                <span className="text-lg font-bold text-gray-800">
                  Price Range:
                </span>
                <span className="text-xl font-bold text-green-600">
                  {subService.priceRange}
                </span>
              </div>
              <div className='mt-2 text-gray-500 font-light'>
                <p>Final price will be decided based on your vehicle model.</p>
              </div>
            </div>

            {/* Confirmation Section */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center shadow-lg">
              <p className="text-lg mb-6 text-gray-800 font-medium">
                You're just 1 click away from your booking. Are you sure you want to proceed?
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 min-w-[100px]"
                  onClick={() => navigate('/services')}
                >
                  No
                </button>
                <button
                  className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 min-w-[100px]"
                  onClick={() => {
                    // You can handle booking logic here later
                    console.log('Booking confirmed!');
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-xl border-2 border-gray-200">
            <div className="text-lg text-gray-500 mb-5">
              Loading service details...
            </div>
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Booking;