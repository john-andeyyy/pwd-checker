import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/PageComponents";
import WelcomeLoader from "./components/WelcomeLoader";
import ApplicationGuidePage from "./pages/ApplicationGuidePage";
import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";
import RecordDetailsPage from "./pages/RecordDetailsPage";
import RenewalGuidePage from "./pages/RenewalGuidePage";
import SearchByIdPage from "./pages/SearchByIdPage";
import SearchByNamePage from "./pages/SearchByNamePage";

const EXPIRE_DAYS = 1;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const visitedAt = localStorage.getItem("visitedAt");
    const now = Date.now();

    if (!visitedAt || now - Number(visitedAt) > EXPIRE_DAYS * 24 * 60 * 60 * 1000) {
      setLoading(true);
      const timer = window.setTimeout(() => {
        setLoading(false);
        localStorage.setItem("visitedAt", String(now));
      }, 1800);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, []);

  if (loading) {
    return <WelcomeLoader />;
  }

  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-name" element={<SearchByNamePage />} />
          <Route path="/search-id" element={<SearchByIdPage />} />
          <Route path="/SearchByID" element={<SearchByIdPage />} />
          <Route path="/details/:id" element={<RecordDetailsPage />} />
          <Route path="/officer" element={<OfficersPage />} />
          <Route path="/Officer" element={<OfficersPage />} />
          <Route path="/application-guide" element={<ApplicationGuidePage />} />
          <Route path="/ApplicationGuide" element={<ApplicationGuidePage />} />
          <Route path="/renew-guide" element={<RenewalGuidePage />} />
          <Route path="/RenewGuide" element={<RenewalGuidePage />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
