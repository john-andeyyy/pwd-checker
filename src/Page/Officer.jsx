import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Officer() {
    const navigate = useNavigate();

    const officers = [
        { name: "John Andrei B. Nicolas", position: "President" },
        { name: "Nancy Franco", position: "Vice President" },
        { name: "Fe Torres", position: "Secretary" },
        { name: "Patricia Castro", position: "Treasurer" },
        { name: "Florencio Salvador", position: "Auditor" },
        { name: "Maricel Martin", position: "PIO" },
        { name: "Daniel Palo", position: "PIO" },
        { name: "Kon. Anna Lalu", position: "Council" },
    ];


    return (
        <div className="relative min-h-[90vh] bg-gradient-to-r from-blue-200/80 to-cyan-200/80 flex flex-col px-4 pt-6">
            <div className="relative mb-6 max-w-6xl w-full mx-auto flex items-center justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute left-0 flex items-center gap-2 px-3 sm:px-4 py-2 
               bg-blue-600 hover:bg-blue-700 text-white 
               rounded-lg sm:rounded-xl font-medium shadow 
               focus:outline-none focus:ring-2 focus:ring-blue-300 
               transition text-sm sm:text-base"
                    aria-label="Go back"
                >
                    <ArrowLeft size={18} className="sm:size-[22px]" />
                    <span>Back</span>
                </button>

                <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-blue-900 drop-shadow text-center px-2">
                    Meet Our Officers
                </h1>
            </div>


            {/* Officers Grid */}
            <div className="flex flex-col justify-center items-center flex-1 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
                    {officers.map((officer, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center 
                         text-center hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
                        >
                            {/* Avatar Circle */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full 
                              bg-gradient-to-br from-blue-100 to-blue-300 text-blue-800 
                              text-2xl sm:text-3xl font-extrabold shadow-md mb-3 sm:mb-4">
                                {officer.name.charAt(0)}
                            </div>

                            {/* Name & Position */}
                            <h2 className="text-base sm:text-lg font-bold text-gray-900">{officer.name}</h2>
                            <p className="text-sm sm:text-base font-medium text-blue-700">{officer.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
