import { useState, useEffect } from "react";
import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import Footer from "./components/ui/Footer.jsx";
import Navbar from "./components/ui/Navbar/NavBar.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";

function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  const [skipLoading, setSkipLoading] = useState(() => {
    return sessionStorage.getItem("hasLoadedOnce") === "true";
  });

  useEffect(() => {
    if (skipLoading) {
      sessionStorage.setItem("hasLoadedOnce", "true");
    }
  }, [skipLoading]);

  const handleExitComplete = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="app-layout">
      {!skipLoading && <LoadingScreen setSkipLoading={setSkipLoading} />}

      <Navbar />

      <main>
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.25,
                ease: [0.25, 1, 0.5, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -8,
              transition: {
                duration: 0.15,
                ease: "easeIn",
              },
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
