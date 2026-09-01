import { useEffect, useState } from "react";
import loadingGif from "../../assets/loadingGif2.gif";

function LoadingScreen({ setSkipLoading }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startFadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2550);

    const unmountTimer = setTimeout(() => {
      setSkipLoading(true);
    }, 3050);

    return () => {
      clearTimeout(startFadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [setSkipLoading]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--primary-bg)",
        opacity: isFadingOut ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: isFadingOut ? "none" : "auto",
      }}
    >
      <img
        src={loadingGif}
        alt="Loading..."
        fetchPriority="high"
        style={{
          maxWidth: "40%",
          aspectRatio: "2.97 / 2.1",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default LoadingScreen;
