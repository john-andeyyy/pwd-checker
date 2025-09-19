import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Printer, RefreshCw, ClipboardCheck } from "lucide-react";

export default function RenewGuide() {
    const navigate = useNavigate();

    return (
        <main className="max-h-[90vh] bg-gradient-to-b from-green-50 to-white p-6 sm:p-10">
            <div className="max-w-5xl mx-auto">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            aria-label="Go back"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 flex items-center gap-2">
                            <RefreshCw className="w-6 h-6 text-green-600" />
                            PWD ID Renewal Guide
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
                                    <ClipboardCheck className="w-7 h-7 text-green-600" />
                                    <h2 className="text-xl font-bold text-slate-800">
                                        Tagalog Version
                                    </h2>
                                </div>
                                <p className="text-sm text-slate-600 mt-1">
                                    Paano Mag-Renew ng PWD ID
                                </p>
                            </header>

                            <ol className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow">
                                        1
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Magdala ng Medical Certificate
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Kung kitang-kita na ang kapansanan
                                            (hal. putol ang kamay/paa, bulag,
                                            etc.), hindi na kailangan ng
                                            medical certificate.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow">
                                        2
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Magdala ng 2 pirasong 1x1 ID picture
                                            ng PWD
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Gumamit ng malinaw na litrato na may
                                            puti o simpleng background.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow">
                                        3
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Kung hindi kayang pumunta ang PWD
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Puwedeng mag-apply ang{" "}
                                            <strong>representative</strong>{" "}
                                            basta dala ang mga requirements.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow">
                                        4
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Kung minor ang PWD
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Ang <strong>guardian</strong> ang
                                            pupunta sa DSWD at dapat may dalang
                                            valid ID.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </article>

                        {/* English */}
                        <article className="p-8">
                            <header className="mb-6">
                                <div className="flex items-center gap-3">
                                    <ClipboardCheck className="w-7 h-7 text-emerald-500" />
                                    <h2 className="text-xl font-bold text-slate-800">
                                        English Version
                                    </h2>
                                </div>
                                <p className="text-sm text-slate-600 mt-1">
                                    How to Renew a PWD ID
                                </p>
                            </header>

                            <ol className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow">
                                        1
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Bring a Medical Certificate
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            If the disability is visibly obvious
                                            (e.g., amputated arm/leg, blindness,
                                            etc.), a medical certificate is not
                                            required.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow">
                                        2
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Bring 2 pieces of 1x1 ID photos
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Use a clear photo with a plain
                                            background.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow">
                                        3
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Representative may apply
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            If the PWD cannot personally go, a{" "}
                                            <strong>representative</strong> may
                                            file the application with complete
                                            requirements.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow">
                                        4
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Minor PWDs
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            If the PWD is a minor, the{" "}
                                            <strong>guardian</strong> should go
                                            to the DSWD and present a valid ID.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </article>
                    </div>

                </section>
            </div>
        </main>
    );
}
