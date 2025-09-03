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
} from "lucide-react";

export default function Details() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
                <p className="text-lg font-medium">No data available.</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    ← Back
                </button>
            </div>
        );
    }

    const details = [
        { label: "Birthday", value: state.birthday, icon: Calendar, color: "text-blue-500" },
        {
            label: "Age",
            value: state.age === "No Record" ? "No Record" : `${state.age} years old`,
            icon: User,
            color: "text-green-600"
        },
        { label: "Cellphone Number", value: state.cellphone, icon: Phone, color: "text-yellow-600" },
        { label: "Disability", value: state.disability, icon: Activity, color: "text-red-600" },
        { label: "Address", value: state.address, icon: MapPin, color: "text-purple-600" },
        { label: "PWD Number", value: state.pwdNumber, icon: IdCard, color: "text-indigo-600" },
        { label: "Date Issued", value: state.dateIssued, icon: FileText, color: "text-pink-600" },
        { label: "Bedridden", value: state.bedridden, icon: Activity, color: "text-orange-600" },
        { label: "Civil Status", value: state.civilStatus, icon: User, color: "text-cyan-600" },
    ];
    const sanitizedPWD = state.pwdNumber ? state.pwdNumber.replace(/-/g, "") : "";

    return (
        <div className="min-h-[90vh] bg-gradient-to-r from-blue-200 to-cyan-200 text-gray-900 p-4 sm:p-6 flex flex-col">
            {/* Sticky Back Button */}
            <div className="sticky top-0 z-20  py-2">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <ArrowLeft size={18} aria-hidden="true" /> Back
                </button>
            </div>

            {/* Header */}
            <div className="mt-4 mb-6 text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {state.first} {state.middle} {state.last}
                </h1>
                <p className="text-gray-600 text-sm md:text-base">Profile Details</p>
            </div>

            {/* Scrollable Details */}
            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
                    {details.map(({ label, value, icon: Icon, color }, idx) => (
                        <div
                            key={idx}
                            className="p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-4"
                        >
                            <Icon className={`w-6 h-6 ${color}`} aria-hidden="true" />
                            <div>
                                <p className="text-sm text-gray-500 font-medium">{label}</p>
                                <p className="text-base md:text-lg font-semibold break-words">
                                    {value || "No Record"}
                                </p>

                                {/* {label === "PWD Number" && value && value !== "No Record" && (
                                    <a
                                        href={`https://pwd.doh.gov.ph/tbl_pwd_id_verificationlist.php?csrf_token=ca91b390ea683149b73ba2f9dddd18f295fa5645fc54c667ff469187772f4142&cmd=search&t=tbl_pwd_id_verification&z_pwd_id_number=%3D&x_pwd_id_number=${value.replace(/-/g, "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                                    >
                                        Open Record
                                    </a>
                                )} */}

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
