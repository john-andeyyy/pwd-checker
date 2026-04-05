import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppShell } from "./Components/PagePrimitives";
import WelcomeLoader from "./Components/WelcomeLoader";
import ApplicationGuide from "./Page/ApplicationGuide";
import Details from "./Page/Details";
import LandingPage from "./Page/LandingPage";
import Officer from "./Page/Officer";
import RenewGuide from "./Page/RenewGuide";
import SearchByID from "./Page/SearchByID";
import SearchName from "./Page/Search_name";

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/search-name" element={<SearchName />} />
          <Route path="/search-id" element={<SearchByID />} />
          <Route path="/SearchByID" element={<SearchByID />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/officer" element={<Officer />} />
          <Route path="/Officer" element={<Officer />} />
          <Route path="/application-guide" element={<ApplicationGuide />} />
          <Route path="/ApplicationGuide" element={<ApplicationGuide />} />
          <Route path="/renew-guide" element={<RenewGuide />} />
          <Route path="/RenewGuide" element={<RenewGuide />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
