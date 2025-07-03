

const MainServicesCard = ({ subService }) => {


    return (
        <div className="relative p-5 rounded-2xl shadow-lg overflow-hidden group transition duration-300 cursor-pointer bg-white">
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-orange-100 via-blue-50 to-green-300"></div>
  
  <div className="relative z-10">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{subService.name}</h2>
    <p className="text-gray-600 mb-4">{subService.description}</p>
    <p className="text-lg font-extrabold text-gray-800">{subService.priceRange}</p>
  </div>
</div>



    );
};

export default MainServicesCard;
