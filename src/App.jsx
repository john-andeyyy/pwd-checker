import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Page/Details";
import LandingPage from "./Page/LandingPage";
import Search_name from "./Page/Search_name";
import SearchByID from "./Page/SearchByID";
import Navigation from "./Components/Navigation";
import WelcomeLoader from "./Components/WelcomeLoader";

const EXPIRE_DAYS = 1;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const visitedAt = localStorage.getItem("visitedAt");
    const now = new Date().getTime();

    if (!visitedAt || now - parseInt(visitedAt) > EXPIRE_DAYS * 24 * 60 * 60 * 1000) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("visitedAt", now.toString());
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <WelcomeLoader />;

  return (
    <Router>
      <div className="h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1 overflow-hidden pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search-name" element={<Search_name />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/SearchByID" element={<SearchByID />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
