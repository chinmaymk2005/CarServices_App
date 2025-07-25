'use client';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import { FaHome, FaClock, FaCarSide, FaInstagram } from "react-icons/fa";


export function Home() {

  const navigate = useNavigate();



  const features = [
    {
      icon: <FaHome className="text-blue-600 text-4xl mb-4" />,
      title: "Doorstep Service",
      desc: "Get an appointment and relax at home, we will come to your place."
    },
    {
      icon: <FaClock className="text-blue-600 text-4xl mb-4" />,
      title: "Quick & Hassle-free",
      desc: "Hassle-free 15 minute work. 100% safe, branded & premium PH neutral products."
    },
    {
      icon: <FaCarSide className="text-blue-600 text-4xl mb-4" />,
      title: "Optional Services",
      desc: "Dashboard and other plastic parts cleaning available upon request with an additional cost."
    },
    {
      icon: <FaInstagram className="text-blue-600 text-4xl mb-4" />,
      title: "Get Featured",
      desc: "Get the chance to feature Before and After photos of your car on our Instagram page."
    }
  ];

  const services = [
    {
      Img: "./Images/individual_service.jpg",
      title: "Individual Service",
      description: "Exterior polish and deep interior cleaning",
      price: "₹1,500 - ₹2,500",
    },
    {
      Img: "./Images/combo_service_02.jpg",
      title: "Combo Service",
      description: "Polish + Deep Interior Cleaning",
      price: "₹2,400- ₹3,800",
      discount: "10% applied"
    },
    {
      Img: "./Images/interior_service.jpg",
      title: "Interior Add-On Service",
      description: "Leather coating and interior steam cleaning",
      price: "₹100 - ₹1,000",
    },
    {
      Img: "./Images/exterior_service_02.jpg",
      title: "Exterior Add-On Service",
      description: "Wind shield, headlight polishing and so on..",
      price: "₹200 - ₹1,800",
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent service! My car looks brand new after the paint job."
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Quick and professional scratch removal. Highly recommended!"
    },
    {
      name: "Amit Patel",
      rating: 5,
      comment: "Best car servicing in the area. Fair pricing and quality work."
    }
  ];

  const videos = [
    {
      src: "/videos/video_01.mp4",
      title: "Ceramic Coating + Interior Detailing"
    },
    {
      src: "/videos/video_02.mp4",
      title: "Graphene Coating"
    }
  ];


  const handleBooking = () => {
    const token = localStorage.getItem("token");
    const hasToken = token && token !== "undefined" && token !== "null";
    if (!hasToken) {
      navigate("/auth");
    } else {
      navigate("/dashboard");
    }
  };


  const handleServices = () => {
    navigate("/services");
  };


  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Premium
              </span>{" "}
              <span className="text-orange-400 drop-shadow-lg">Car Care</span>{" "}
              <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <span className="text-orange-300 font-semibold">Come visit our studio</span>{" "}
              <span className="text-blue-200">to experience the</span>{" "}
              <span className="text-orange-300 font-bold decoration-yellow-400">wonders of car detailing!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBooking}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="tracking-wider">Book Now</span> <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleServices}
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                <span className="tracking-wider">Our Services</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our work */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Fancy Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
              <Award className="w-8 h-8 text-blue-600 mx-2" />
              <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full ml-4"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Our Work
              </span>
              <div className="absolute -top-2 -right-2 animate-pulse">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our premium car service excellence 
            </p>
          </div>

          {/* ======= Videos Section ======= */}
          <section className="bg-gray-100 py-7 px-4">
            <div className="max-w-250 mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="aspect-video bg-gray-900 relative">
                      <video
                        src={video.src}
                        controls
                        className="w-full h-full object-fit rounded-2xl"
                      ></video>
                      {/* Overlay title */}
                      <div className="absolute bottom-0.5 left-3 text-white px-3 py-1 rounded-md text-sm">
                        {video.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>



      {/* Service card */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">
                  <img src={service.Img} alt={service.title} className="w-full h-auto rounded" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold text-green-600">{service.price}</p>  <br />
                  {service.discount && <p className="text-gray-500">Discount: {service.discount}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why <span className="text-blue-600">Choose Us?</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


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

  );
}
