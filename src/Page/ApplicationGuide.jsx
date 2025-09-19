import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Printer,
    UserCheck,
    Image as ImageIcon,
} from "lucide-react";

export default function ApplicationGuide() {
    const navigate = useNavigate();

    return (
        <main className="max-h-[90vh] bg-gradient-to-b from-blue-50 to-white p-6 sm:p-10 py-0">
            <div className="max-w-5xl mx-auto">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-10 ">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            aria-label="Go back"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                            PWD ID Application Guide
                        </h1>
                    </div>

                </div>

                {/* Guide Card */}
                <section className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:shadow-none print:border-none print:rounded-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {/* Tagalog */}
                        <article className="p-8">
                            <header className="mb-6">
                                <div className="flex items-center gap-3">
                                    <UserCheck className="w-7 h-7 text-blue-600" />
                                    <h2 className="text-xl font-bold text-slate-800">
                                        Tagalog Version
                                    </h2>
                                </div>
                                <p className="text-sm text-slate-600 mt-1">
                                    Paano Mag-Apply ng PWD ID
                                </p>
                            </header>

                            <ol className="space-y-5">
                                {[
                                    {
                                        title: "Magdala ng Medical Certificate",
                                        desc: "Kung kitang-kita na ang kapansanan (hal. putol ang kamay/paa, bulag, etc.), hindi na kailangan ng medical certificate.",
                                    },
                                    {
                                        title: "Magdala ng 2 pirasong 1x1 ID picture ng PWD",
                                        desc: "Gumamit ng malinaw na litrato na may puti o simpleng background.",
                                    },
                                    {
                                        title: "Kung hindi kayang pumunta ang PWD",
                                        desc: "Puwedeng mag-apply ang representative basta dala ang mga requirements.",
                                    },
                                    {
                                        title: "Kung minor ang PWD",
                                        desc: "Ang guardian ang pupunta sa DSWD at dapat may dalang valid ID.",
                                    },
                                ].map((step, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                                            {idx + 1}
                                        </span>
                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-600">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </article>

                        {/* English */}
                        <article className="p-8">
                            <header className="mb-6">
                                <div className="flex items-center gap-3">
                                    <ImageIcon className="w-7 h-7 text-amber-500" />
                                    <h2 className="text-xl font-bold text-slate-800">
                                        English Version
                                    </h2>
                                </div>
                                <p className="text-sm text-slate-600 mt-1">
                                    How to Apply for a PWD ID
                                </p>
                            </header>

                            <ol className="space-y-5">
                                {[
                                    {
                                        title: "Bring a Medical Certificate",
                                        desc: "If the disability is visibly obvious (e.g., amputated arm/leg, blindness, etc.), a medical certificate is not required.",
                                    },
                                    {
                                        title: "Bring 2 pieces of 1x1 ID photos",
                                        desc: "Use a clear photo with a plain background.",
                                    },
                                    {
                                        title: "Representative may apply",
                                        desc: "If the PWD cannot personally go, a representative may file the application with complete requirements.",
                                    },
                                    {
                                        title: "Minor PWDs",
                                        desc: "If the PWD is a minor, the guardian should go to the DSWD and present a valid ID.",
                                    },
                                ].map((step, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow">
                                            {idx + 1}
                                        </span>
                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-600">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </article>
                    </div>

                </section>
            </div>
        </main>
    );
}
