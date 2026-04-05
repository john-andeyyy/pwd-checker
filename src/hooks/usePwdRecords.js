import { useEffect, useState } from "react";
import { fetchPwdRecords } from "../lib/pwdRecords";

export default function usePwdRecords() {
  const sheetUrl = import.meta.env.VITE_SheetURL;
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadRecords() {
      try {
        setLoading(true);
        setError("");
        const nextRecords = await fetchPwdRecords(sheetUrl);

        if (!cancelled) {
          setRecords(nextRecords);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message || "Unable to load records.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadRecords();

    return () => {
      cancelled = true;
    };
  }, [sheetUrl]);

  return { records, loading, error };
}
