import React from "react";
import { useNavigate } from "react-router-dom";
import Threads from "../Components/Threads";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-white">

            <div className="absolute inset-0 z-0">
                <Threads
                    amplitude={1}
                    distance={0}
                    color={[0.2, 0.6, 1]}
                />
            </div>

            <div className="relative z-10 backdrop-blur-md bg-white/70 rounded-2xl p-5 sm:p-8 shadow-lg max-w-xl w-full text-center">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
                    PWD <span className="text-blue-600">Registration Checker</span>
                </h1>

                <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                    Check if you are registered as a PWD in{" "}
                    <span className="font-semibold">Cambag, Bustos, Bulacan</span>.
                    If not, you can register using the button below.
                </p>


                <div className="grid gap-3 sm:gap-4 w-full max-w-sm mx-auto">
                    <button
                        onClick={() => navigate("/search-name")}
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-md transition-all text-base sm:text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-green-300"
                    >
                        Find by Name
                    </button>

                    <button
                        onClick={() => navigate("/SearchByID")}
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow-md transition-all text-base sm:text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-purple-300"
                    >
                        Find by ID
                    </button>

                    <a
                        href="https://forms.gle/KXwjZj8VcfW9e5ck8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-md transition-all text-base sm:text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Register
                        </button>
                    </a>
                </div>

                <footer className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
                    © {new Date().getFullYear()} PWD Portal. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
