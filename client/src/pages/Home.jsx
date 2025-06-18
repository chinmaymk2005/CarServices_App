'use client';
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react";
import { Wrench, Palette, Car, Sparkles } from "lucide-react"; // Importing icons


export default function Home() {

  const navigate = useNavigate();


  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Car Servicing",
      description: "Complete car maintenance and servicing",
      price: "₹2,500 - ₹8,000",
      duration: "2-4 hours"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Scratch Removal",
      description: "Professional scratch repair and touch-up",
      price: "₹1,500 - ₹5,000",
      duration: "1-3 hours"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Painting",
      description: "Full body painting and color restoration",
      price: "₹15,000 - ₹50,000",
      duration: "3-5 days"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Detailing & Polish",
      description: "Premium car detailing and shine restoration",
      price: "₹3,000 - ₹12,000",
      duration: "4-6 hours"
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


  const handleBooking = () => {
    if(!req.cookies.JwtToken) {
      alert("Please login to book a service");
      navigate("/auth");
    }else {
      navigate("/booking");
    }
  };

  const handleServices = () => {
    navigate("/services");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Premium Car Care Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional car servicing, scratch removal, painting & detailing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBooking}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Book Now <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleServices}
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold text-green-600">{service.price}</p>
                  <p>{service.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">We stand behind our work with a satisfaction guarantee</p>
            </div>
            <div className="text-center">
              <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Service</h3>
              <p className="text-gray-600">Fast turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
              <p className="text-gray-600">Skilled professionals with years of experience</p>
            </div>
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
              <li><button onClick={() => navigate('/')}>Home</button></li>
              <li><button onClick={() => navigate('/services')}>Services</button></li>
              <li><button onClick={() => navigate('/booking')}>Book Now</button></li>
              <li><button onClick={() => navigate('/contactUs')}>Contact</button></li>
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

  );
}
