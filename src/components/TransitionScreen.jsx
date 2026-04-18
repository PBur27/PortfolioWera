import { useEffect, useState } from "react";
import loadingGif from "../assets/loadingGif2.gif";

function TransitionScreen() {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startFadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 750);

    const unmountTimer = setTimeout(() => {
      setSkipLoading(true); 
    }, 1050);

    return () => {
      clearTimeout(startFadeTimer);
      clearTimeout(unmountTimer);
    };
  }, );

  const styles = {
    overlay: {
      position: "fixed",
      zIndex: 9999,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#2F2D2D",
      alignItems: "center",
      justifyChild: "center",
      display: "flex",

      opacity: isFadingOut ? 0 : 1,
      transition: "opacity 0.5s ease-in-out",
      pointerEvents: isFadingOut ? "none" : "auto",
    },
    loadingLogo: {
      maxWidth: "40%",
      aspectRatio: "2.97/2.1",
    },
  };

  return (
    <div style={styles.overlay}>
      <div className="center" style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img src={loadingGif} style={styles.loadingLogo} alt="logo" />
      </div>
    </div>
  );
}

export default TransitionScreen;