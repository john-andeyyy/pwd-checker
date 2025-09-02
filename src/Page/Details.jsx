import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Phone,
    Calendar,
    IdCard,
    MapPin,
    User,
    Activity,
    FileText,
    Heart,
} from "lucide-react";

export default function Details() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center">
                <p className="text-lg">No data available.</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                    ← Back
                </button>
            </div>
        );
    }

    // Reusable details config
    const details = [
        { label: "Birthday", value: state.birthday, icon: Calendar, color: "text-blue-500" },
        { label: "Age", value: `${state.age} years old`, icon: User, color: "text-green-500" },
        { label: "Cellphone", value: state.cellphone, icon: Phone, color: "text-yellow-500" },
        { label: "Disability", value: state.disability, icon: Activity, color: "text-red-500" },
        { label: "Address", value: state.address, icon: MapPin, color: "text-purple-500" },
        { label: "PWD Number", value: state.pwdNumber, icon: IdCard, color: "text-indigo-500" },
        { label: "Date Issued", value: state.dateIssued, icon: FileText, color: "text-pink-500" },
        { label: "Bedridden", value: state.bedridden, icon: Activity, color: "text-orange-500" },
        { label: "Status", value: state.status, icon: Heart, color: "text-pink-600" },
        { label: "Civil Status", value: state.civilStatus, icon: User, color: "text-cyan-500" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
            {/* Back Button */}
            <button
                onClick={() => navigate("/search-name")}
                className="mb-6 flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow"
            >
                <ArrowLeft size={18} /> Back
            </button>

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold">
                    {state.first} {state.middle} {state.last}
                </h1>
                <p className="text-gray-500">Profile Details</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto md:max-h-none md:overflow-visible pb-6">
                {details.map(({ label, value, icon: Icon, color }, idx) => (
                    <div
                        key={idx}
                        className="p-4 bg-white rounded-xl shadow hover:shadow-md transition flex items-center gap-3"
                    >
                        <Icon className={color} />
                        <div>
                            <p className="text-sm text-gray-500">{label}</p>
                            <p className="md:text-lg font-medium">{value || "No Record"}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
