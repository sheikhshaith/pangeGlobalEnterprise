import React from "react";
import { Link } from "react-router-dom";


const ContactPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Previous sections remain the same until the last section */}
            <div className="flex justify-center mt-0">
                <div className="flex space-x-6 bg-black bg-opacity-50 px-6 py-2 mt-12 rounded-lg relative overflow-hidden">
                    {/* Animated Border */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveX_2s_linear_infinite]"></div>
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
                        <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-cyan-800 via-cyan-400 to-cyan-800 animate-[borderMoveY_2s_linear_infinite]"></div>
                    </div>

                    {/* Navigation Links */}
                    <Link
                        to="/"
                        className="text-white hover:text-cyan-400 px-3 py-1 transition-colors duration-200 text-sm"
                    >
                        Home
                    </Link>
                    <Link
                        to="/About"
                        className="text-white hover:text-cyan-400 px-3 py-1 transition-colors duration-200 text-sm"
                    >
                        About
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-4">
                {/* Previous sections remain unchanged */}
                <div className="text-center py-8 md:py-12">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8">
                        Leading Provider Of
                        <br />
                        Comprehensive Business Solutions
                    </h1>

                    <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden my-8">
                        <img
                            src="/breadcrumb-img-1.webp"
                            alt="Business meeting"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed px-4">
                        We offer a wide range of services, including strategic planning,
                        financial management, marketing, and technology integration. By
                        leveraging the latest industry insights and innovative strategies,
                        we ensure your business stays ahead of the curve.
                    </div>
                </div>

            </main>
        </div>
    );
};

export default ContactPage;
