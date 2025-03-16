import { useState, useEffect } from "react";
import Head from 'next/head';
import styles from './about.module.css';

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Us | Your Company Name</title>
                <meta name="description" content="Get in touch with us for apartment rentals and 360° virtual tours." />
            </Head>

            {/* Full-screen background video */}
            <div className="relative w-full h-screen">
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                    <source src="/videohr.mp4" type="video/mp4" />
                </video>

                {/* Centered Content */}
                <div className="flex flex-col items-center justify-center h-full text-white text-center px-6">
                    <h1 className="lg:text-9xl text-5xl font-bold drop-shadow-lg">Contact Us</h1>
                    <p className="lg:text-3xl text-xl mt-4 max-w-lg drop-shadow-md">
                        Discover your perfect rental with our 360° virtual tours.
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-gray-100 py-16 px-6">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Get in Touch</h2>
                    <p className="text-center text-gray-600 mb-6">We’d love to hear from you!</p>

                    <form className="space-y-4 text-black">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="name" placeholder="First Name" required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
                            <input type="text" name="surname" placeholder="Surname" required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
                        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
                        <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 h-32"></textarea>
                        <button type="submit" className="bg-blue-600 text-white p-3 rounded w-full text-lg font-semibold hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Forum Section */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 ">Forum - Recent Messages</h2>
                    <p className="text-center text-gray-600 mb-6">Check what others are saying!</p>

                    {/* Placeholder for forum messages */}
                    <div className="space-y-4">
                        <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                            <p className="text-gray-600">Really love the 360° virtual tours! Helped me a lot in finding my apartment.</p>
                        </div>
                        <div className="p-4 bg-white border rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800">Jane Smith</h3>
                            <p className="text-gray-600">Great service, very responsive team!</p>
                        </div>
                        {/* More messages can be dynamically added here */}
                    </div>
                </div>
            </div>
        </>
    );
}
