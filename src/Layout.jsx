import { useState, useEffect } from "react";
import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import Footer from "./components/ui/Footer.jsx";
import Navbar from "./components/ui/Navbar/NavBar.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";
import ScrollToTop from "./components/util/ScrollToTop.jsx";

function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

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
      <ScrollToTop />

      {!skipLoading && <LoadingScreen setSkipLoading={setSkipLoading} />}

      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, ease: "easeIn" },
            }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
