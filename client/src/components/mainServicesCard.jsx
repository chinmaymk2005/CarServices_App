'use client';
import { Link } from "react-router";

const MainServicesCard = ({ subService, service }) => {
    return (
        <div className="relative p-5 rounded-2xl shadow-lg overflow-hidden group transition duration-300 cursor-pointer bg-white">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-100 to-blue-300"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <h2 className="text-xl font-bold text-blue-800 mb-2">{subService.name}</h2>
                    <p className="text-gray-700 mb-4">{subService.description}</p>
                </div>
                <div>
                    <p className="text-lg font-bold text-orange-600 mb-3">{subService.priceRange}</p>
                    <Link
                        to={`/services/booking/${service._id}/${encodeURIComponent(subService.name)}`}
                        className="inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Book Now!!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainServicesCard;
