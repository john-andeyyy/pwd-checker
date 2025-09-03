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
            {/* <div className="absolute inset-0 z-0">
                <Threads amplitude={1} distance={0.8} color={[0.2, 0.6, 1]} />
            </div> */}

            {/* Main Card */}
            <div className="relative z-10 backdrop-blur-md bg-white/80 rounded-3xl p-6 sm:p-10 shadow-xl max-w-2xl w-full text-center flex flex-col">
                {/* Header */}
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
                    PWD <span className="text-blue-600">Registration Checker</span>
                </h1>

                <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                    Easily check if you are registered as a{" "}
                    <span className="font-semibold">Person with Disability (PWD)</span> in{" "}
                    <span className="font-semibold">Cambag, Bustos, Bulacan</span>.
                </p>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
                    <button
                        onClick={() => navigate("/search-name")}
                        className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-green-300"
                    >
                        Find by Name
                    </button>

                    <button
                        onClick={() => navigate("/SearchByID")}
                        className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-purple-300"
                    >
                        Find by ID
                    </button>

                    <button
                        onClick={() => navigate("/Officer")}
                        className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-orange-300"
                    >
                        Officer
                    </button>

                    <a
                        href="https://forms.gle/KXwjZj8VcfW9e5ck8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300">
                            Register
                        </button>
                    </a>
                </div>

                {/* Footer */}
                <footer className="mt-8 text-gray-500 text-xs sm:text-sm border-t border-gray-200 pt-4">
                    © {new Date().getFullYear()} PWD Portal. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
