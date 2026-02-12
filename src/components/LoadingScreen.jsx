import { useEffect, useState} from "react";
import logoVee from "../assets/logoVee.svg";

function LoadingScreen() {

  
  const [isExited, setIsExited] = useState(false);
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsExited(true);
    }, 500);
    
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
      transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
      opacity: isExited ? 0 : 1,
      transform: isExited ? "translateX(100%)" : "translateX(0)",
    },
    loadingLogo: {
      maxWidth: "40%",
      transform: "translateX(-33%)",
    },
  };

  return (
    <>
      <div className="overlay" style={styles.overlay}>
        <div className="center">
          <img src={logoVee} style={styles.loadingLogo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
