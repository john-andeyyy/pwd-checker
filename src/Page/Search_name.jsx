import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Search_name() {
    const SheetURL = import.meta.env.VITE_SheetURL;
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searched, setSearched] = useState(false);
    const navigate = useNavigate();

    // Compute age
    const getAge = (value) => {
        if (!value) return "Missing";
        const match = /Date\((\d+),(\d+),(\d+)\)/.exec(value);
        let birthDate;
        if (match) {
            birthDate = new Date(
                parseInt(match[1]),
                parseInt(match[2]),
                parseInt(match[3])
            );
        } else {
            birthDate = new Date(value);
        }
        if (isNaN(birthDate)) return "Missing";
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    // Format Google Sheets Date
    const formatDate = (value) => {
        if (!value) return "Missing";
        const match = /Date\((\d+),(\d+),(\d+)\)/.exec(value);
        let d;
        if (match) {
            d = new Date(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
        } else {
            d = new Date(value);
        }
        if (isNaN(d)) return value;
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(d);
    };

    useEffect(() => {
        const fetchData = async () => {
            const url = SheetURL;
            const res = await fetch(url);
            const text = await res.text();
            const json = JSON.parse(text.substr(47).slice(0, -2));

            const rows = json.table.rows.map((r, i) => ({
                id: i,
                last: r.c[3]?.v || "Missing",
                first: r.c[4]?.v || "Missing",
                middle: r.c[5]?.v || "Missing",
                address: r.c[6]?.v || "Missing",
                birthday: formatDate(r.c[7]?.v),
                age: getAge(r.c[7]?.v),
                cellphone: r.c[9]?.v || "Missing",
                disability: r.c[10]?.v || "Missing",
                pwdNumber: r.c[11]?.v || "Missing",
                dateIssued: formatDate(r.c[12]?.v),
                bedridden: r.c[13]?.v || "Missing",
                status: r.c[14]?.v || "Missing",
                civilStatus: r.c[15]?.v || "Missing",
                notes: r.c[16]?.v || "Missing",
            }));

            setData(rows);
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        const q = query.toLowerCase().trim();
        if (!q) {
            alert("⚠️ Please enter a name before searching.");
            return;
        }
        setSearched(true);

        const filtered = data.filter((row) => {
            const first = row.first.toLowerCase();
            const middle = row.middle.toLowerCase();
            const last = row.last.toLowerCase();

            const combos = [
                `${first} ${middle} ${last}`,
                `${first} ${last}`,
                `${last} ${first} ${middle}`,
                `${last} ${first}`,
                `${first} ${middle}`,
                `${first}`,
                `${last}`,
                `${middle}`,
            ].map((s) => s.replace(/\s+/g, " ").trim());

            return combos.some((name) => name.includes(q));
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
                    Search PWD List
                </h1>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type a name..."
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-semibold shadow-md w-full sm:w-auto"
                    >
                        Search
                    </button>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">
                    Example:{" "}
                    <span className="text-blue-600 font-medium">john delacruz</span>
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
                                        {/* <th className="px-4 py-2 text-left">Action</th> */}
                                    </tr>
                                </thead>
                            </table>

                            {/* Scrollable tbody */}
                            <div className="max-h-64 overflow-y-auto">
                                <table className="w-full text-sm sm:text-base">
                                    <tbody>
                                        {results.map((r) => (
                                            <tr
                                                key={r.id}
                                                className="odd:bg-white even:bg-gray-50"
                                            >
                                                <td className="px-4 py-2">{r.last}</td>
                                                <td className="px-4 py-2">{r.first}</td>
                                                <td className="px-4 py-2">{r.middle}</td>
                                                {/* <td className="px-4 py-2">
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
                                                </td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* No Results */}
                {searched && results.length === 0 && (
                    <div className="mt-6 text-center">
                        <p className="text-red-500 font-medium text-lg">
                            No results found
                        </p>
                        <a
                            href="https://forms.gle/KXwjZj8VcfW9e5ck8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-blue-600 hover:underline text-lg"
                        >
                            Do you want to register?
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
