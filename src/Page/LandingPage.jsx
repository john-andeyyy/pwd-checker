import React from "react";
import { useNavigate } from "react-router-dom";
import Threads from "../Components/Threads";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-[90vh] relative flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden 
            bg-gradient-to-r from-blue-200 to-cyan-200"
        >
            {/* Main Card */}
            <div className="relative z-10 backdrop-blur-md bg-white/80 rounded-3xl p-6 sm:p-10 shadow-xl max-w-2xl w-full text-center flex flex-col">
                {/* Header */}
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
                    PWD <span className="text-blue-600">Registration Checker</span>
                </h1>

                <p className="text-gray-600 mb-2 text-sm sm:text-base md:text-lg leading-relaxed">
                    Easily check if you are registered as a{" "}
                    <span className="font-semibold">Person with Disability (PWD)</span> in{" "}
                    <span className="font-semibold">Cambag, Bustos, Bulacan</span>.
                </p>

                {/* RECORD CHECKER SECTION */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">🔎 Record Checker</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto">
                        <button
                            onClick={() => navigate("/search-name")}
                            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Find by Name
                        </button>

                        <button
                            onClick={() => navigate("/SearchByID")}
                            className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            Find by ID
                        </button>

                        <button
                            onClick={() => navigate("/Officer")}
                            className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-orange-300"
                        >
                            Officer
                        </button>

                        <a
                            href="https://forms.gle/KXwjZj8VcfW9e5ck8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <button className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-purple-300">
                                Register for the Barangay Masterlist
                            </button>
                        </a>
                    </div>
                </div>

                {/* INFO GUIDES SECTION */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">ℹ️ Guides & Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto">
                        <button
                            onClick={() => navigate("/ApplicationGuide")}
                            className="w-full px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-pink-300"
                        >
                            PWD ID Application Guide
                        </button>

                        <button
                            onClick={() => navigate("/RenewGuide")}
                            className="w-full px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-teal-300"
                        >
                            PWD ID Renewal Guide
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-8 text-gray-500 text-xs sm:text-sm border-t border-gray-200 pt-4">
                    © {new Date().getFullYear()} PWD Portal. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
