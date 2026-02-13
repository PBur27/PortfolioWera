import { useEffect, useState} from "react";
import loadingGif from "../assets/loadingGif.gif";

function LoadingScreen() {

  
  const [isExited, setIsExited] = useState(false);
  
  useEffect(() => {
    
    const overlay = document.querySelector(".overlay");
    const timer = setTimeout(() => {
      setIsExited(true);
      const fadeOutTimer = setTimeout(() => {
        overlay.remove()
      }, 500);
      return () => clearTimeout(fadeOutTimer);
    }, 2550);
    return () => clearTimeout(timer);
  }, []);
  
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
      justifyContent: "center",
      display: "flex",
      transition: "opacity 0.5s ease-in-out",
      opacity: isExited ? 0 : 1,
    },
    loadingLogo: {
      maxWidth: "40%",
      
    },
  };

  return (
    <>
      <div className="overlay" style={styles.overlay}>
        <div className="center">
          <img src={loadingGif} style={styles.loadingLogo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
