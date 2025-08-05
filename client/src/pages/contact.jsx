'use client';
import React, { useState } from "react";
import API_URL from "../config";
import Navbar from "../components/Navbar";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // <-- Add this line
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                const data = await res.json();
                setStatus(`❌ Failed to send message. ${data.message || ""}`);
            }
        } catch (err) {
            console.error(err);
            setStatus("❌ Error sending message.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                        Contact Us
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                    {status && (
                        <p className="mt-4 text-center font-medium text-gray-600">{status}</p>
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
        </>
    );
};

export default ContactUs;
