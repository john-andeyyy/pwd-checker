import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Search_name() {
    const SheetURL = import.meta.env.VITE_SheetURL;
    const [data, setData] = useState([]);
    const [firstQuery, setFirstQuery] = useState("");
    const [lastQuery, setLastQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searched, setSearched] = useState(false);
    const navigate = useNavigate();

    // Compute age
    const getAge = (value) => {
        if (!value) return "No Record";
        const match = /Date\((\d+),(\d+),(\d+)\)/.exec(value);
        let birthDate = match
            ? new Date(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]))
            : new Date(value);
        if (isNaN(birthDate)) return "No Record";
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        return age;
    };

    // Format Google Sheets Date
    const formatDate = (value) => {
        if (!value) return "No Record";
        const match = /Date\((\d+),(\d+),(\d+)\)/.exec(value);
        let d = match
            ? new Date(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]))
            : new Date(value);
        if (isNaN(d)) return value;
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(d);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(SheetURL);
            const text = await res.text();
            const json = JSON.parse(text.substr(47).slice(0, -2));

            const rows = json.table.rows.map((r, i) => ({
                id: i,
                last: r.c[3]?.v || "No Record",
                first: r.c[4]?.v || "No Record",
                middle: r.c[5]?.v || "No Record",
                FullName: r.c[26]?.v || "",
                address: r.c[6]?.v || "No Record",
                birthday: formatDate(r.c[7]?.v),
                age: getAge(r.c[7]?.v),
                cellphone: r.c[9]?.v || "No Record",
                disability: r.c[10]?.v || "No Record",
                pwdNumber: r.c[11]?.v || "No Record",
                dateIssued: formatDate(r.c[12]?.v),
                bedridden: r.c[13]?.v || "No Record",
                status: r.c[14]?.v || "No Record",
                civilStatus: r.c[15]?.v || "No Record",
                notes: r.c[16]?.v || "No Record",
            }));

            setData(rows);
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        const first = firstQuery.toLowerCase().trim();
        const last = lastQuery.toLowerCase().trim();

        if (!first || !last) {
            alert("⚠️ Please enter both first and last name.");
            return;
        }

        setSearched(true);

        const filtered = data.filter((row) => {
            const fWords = (row.first || "").toLowerCase().trim().split(/\s+/);
            const lWords = (row.last || "").toLowerCase().trim().split(/\s+/);

            const queryFirstWords = first.split(/\s+/).filter(w => w.length >= 2);
            const queryLastWords = last.split(/\s+/).filter(w => w.length >= 2);

            const firstMatch = queryFirstWords.every(qw =>
                fWords.some(word => word.startsWith(qw))
            );

            const lastMatch = queryLastWords.every(qw =>
                lWords.some(word => word.startsWith(qw))
            );

            return firstMatch && lastMatch;
        });

        setResults(filtered);
    };



    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-4 flex flex-col items-center">
            <div className="w-full flex justify-start mb-6">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-medium shadow-md"
                >
                    <ArrowLeft size={18} /> Back
                </button>
            </div>

            <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
                    Search By Name
                </h1>

                <form
                    className="flex flex-col sm:flex-row gap-3 w-full"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                >
                    <input
                        type="text"
                        value={firstQuery}
                        onChange={(e) => setFirstQuery(e.target.value)}
                        placeholder="First Name"
                        required
                        minLength={2} // optional: enforce at least 2 chars
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        value={lastQuery}
                        onChange={(e) => setLastQuery(e.target.value)}
                        placeholder="Last Name"
                        required
                        minLength={2} // optional
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-semibold shadow-md w-full sm:w-auto"
                    >
                        Search
                    </button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-2">
                    Example:{" "}
                    <span className="text-blue-600 font-medium">John Delacruz</span>
                </p>

                {searched && (
                    <div className="w-full mt-6">
                        <div className="overflow-x-auto border border-gray-200 rounded-xl">
                            <table className="w-full text-sm sm:text-base">
                                <thead className="bg-blue-100 sticky top-0 z-10">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Last Name</th>
                                        <th className="px-4 py-2 text-left">First Name</th>
                                        <th className="px-4 py-2 text-left">Middle</th>
                                        <th className="px-4 py-2 text-left">Action</th>
                                    </tr>
                                </thead>
                            </table>

                            <div className="max-h-64 overflow-y-auto">
                                <table className="w-full text-sm sm:text-base">
                                    <tbody>
                                        {results.map((r) => (
                                            <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                                                <td className="px-4 py-2">{r.last}</td>
                                                <td className="px-4 py-2">{r.first}</td>
                                                <td className="px-4 py-2">{r.middle}</td>
                                                <td className="px-4 py-2">
                                                    <button
                                                        onClick={() =>
                                                            navigate(`/details/${r.id}`, {
                                                                state: r,
                                                            })
                                                        }
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {searched && results.length === 0 && (
                    <div className="mt-6 text-center">
                        <p className="text-red-500 font-medium text-lg">No results found</p>
                        {/* <a
                            href="https://forms.gle/KXwjZj8VcfW9e5ck8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-blue-600 hover:underline text-lg"
                        >
                            Do you want to register?
                        </a> */}
                    </div>
                )}
            </div>
        </div>
    );
}
