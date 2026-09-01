import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";

function Layout() {
  // the loading screen should be skipped if the user has already loaded the page once
  const [skipLoading, setSkipLoading] = useState(() => {
    return sessionStorage.getItem("hasLoadedOnce") === "true";
  });

  useEffect(() => {
    if (skipLoading) {
      sessionStorage.setItem("hasLoadedOnce", "true");
    }
  }, [skipLoading]);

  return (
    <div className="app-layout">
      {!skipLoading && <LoadingScreen setSkipLoading={setSkipLoading} />}

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
