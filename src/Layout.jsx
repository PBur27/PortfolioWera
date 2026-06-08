import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import NavBarMobile from "./components/NavBarMobile.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { Outlet } from "react-router";

function Layout() {
  const location = useLocation();
  const shouldLoadingBeDisplayed = location.state?.skipLoadingScreen ?? false;
  const [skipLoading, setSkipLoading] = useState(shouldLoadingBeDisplayed);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = (event) => setIsMobileDevice(event.matches);

    updateIsMobile(mediaQuery);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <div className="app-layout">
      {!skipLoading && <LoadingScreen setSkipLoading={setSkipLoading} />}
      {isMobileDevice ? <NavBarMobile /> : <Navbar />}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
