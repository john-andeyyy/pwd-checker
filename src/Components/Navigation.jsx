import React from "react";

export default function Navigation() {
    return (
        <header className="sticky top-0 left-0 w-full  bg-white shadow-md py-2 px-4 sm:px-6 flex items-center justify-between z-50 min-h-[10vh]">
            <div className="flex-shrink-0">
                <img
                    src="/Images/CambaogPWD.png"
                    alt="Organization Logo"
                    className="h-11 sm:h-12 md:h-16 object-cover rounded"
                />
            </div>

            <h1 className="absolute left-1/3 md:left-1/2 transform -translate-x-1/2 text-lg sm:text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">
                PWD Portal
            </h1>

            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4">
                <img
                    src="/Images/Brgy_Cambaog.png"
                    alt="Brgy Logo"
                    className="h-10 sm:h-12 md:h-15 object-cover rounded"
                />
                <img
                    src="/Images/BustosLogo.png"
                    alt="Bustos Logo"
                    className="h-11 sm:h-12 md:h-16 object-cover rounded"
                />
                <img
                    src="/Images/Samaka.jpg"
                    alt="Samaka Logo"
                    className="h-10 sm:h-12 md:h-16 object-cover rounded"
                />
            </div>
        </header>
    );
}
