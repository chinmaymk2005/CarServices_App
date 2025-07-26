import React from "react";
import Navbar from "../components/Navbar";

const ownerImg = "/Images/owner.jpeg"; // place your image in /public

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-10 px-14">
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
              What Drives Us Forward
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
              We don’t just <span className="text-orange-600 font-bold">detail cars</span> — we restore <span className="text-blue-700 font-bold">pride of ownership</span>.
            </p>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              At <span className="font-bold text-gray-900">Your Car Stylist</span>, we believe a clean, well‑kept car changes how you feel behind the wheel.
              That’s why every service we offer, from <span className="font-semibold text-blue-600">basic washes</span> to <span className="font-semibold text-purple-600">advanced ceramic and graphene coatings</span>, is built on one thing: <span className="italic font-medium text-gray-900">care</span>.
            </p>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              <span className="font-medium text-gray-900">No rushed jobs.</span>
              <span className="font-medium text-gray-900"> No one-size-fits-all packages.</span>
              Just <span className="font-semibold text-green-700">honest, professional detailing</span> that suits your car, your needs, and your standards.
            </p>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              We’re a detail studio based in <span className="font-semibold text-gray-900">Kalyan, Maharashtra</span>, run by car lovers who actually get under the paint, into the trims, and inside every surface that deserves attention.
              Whether it’s a <span className="font-medium text-blue-700">hatchback that needs reviving</span> or a <span className="font-medium text-yellow-600">Lamborghini that needs pampering</span> — we treat them with equal respect.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              So whether you’re here for a <span className="font-semibold text-purple-600">quick refresh</span> or a <span className="font-semibold text-orange-600">full-body restoration</span>, you’ll leave with results that <span className="italic">speak for themselves</span>.
            </p>

            <p className="mt-8 text-lg font-medium text-gray-700 italic">
              — Chaitanya Nawale <br />
              <span className="text-gray-800 font-light">(MCA Postgraduate, Automobile Detailer, Digital Marketer)</span>
            </p>
          </div>
        </div>
      </section>


      {/* footer section */}
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
    </>
  );
};

export default About;
