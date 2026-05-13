import { useState } from "react";
import { useLocation } from "react-router";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { Outlet } from "react-router";

function Layout() {
  const location = useLocation();
  const shouldLoadingBeDisplayed = location.state?.skipLoadingScreen ?? false;
  const [skipLoading, setSkipLoading] = useState(shouldLoadingBeDisplayed);

  return (
    <div className="app-layout">
      {!skipLoading && <LoadingScreen setSkipLoading={setSkipLoading} />}
      <Navbar />

      <main style={{ viewTransitionName: "content" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
