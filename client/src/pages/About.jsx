import React from "react";

const ownerImg = "/owner.jpg"; // place your image in /public

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Owner Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={ownerImg}
            alt="Owner"
            className="w-64 h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* About Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Our Car Servicing Centre
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Welcome to <span className="font-semibold text-blue-600">Prime Car Servicing Centre</span>, 
            your trusted partner for all your car maintenance and repair needs. 
            With years of experience and a passion for automobiles, our owner, 
            <span className="font-semibold"> Mr. John Doe</span>, leads a team of certified professionals dedicated 
            to delivering top-notch service and customer satisfaction.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            We offer a comprehensive range of services including routine maintenance, diagnostics, repairs, 
            and custom upgrades. Our state-of-the-art facility is equipped with the latest technology 
            to ensure your vehicle receives the best care possible.
          </p>
          <p className="text-gray-700 text-lg">
            At Prime Car Servicing Centre, we believe in transparency, integrity, 
            and building lasting relationships with our clients. Thank you for choosing us 
            to keep your car running smoothly and safely on the road.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
