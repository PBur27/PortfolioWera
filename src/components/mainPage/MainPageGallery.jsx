import React, { useState, useEffect } from "react";
import MainPageGalleryImage from "./MainPageGalleryImage";

const styles = {
  galleryContainer: {
    
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10vh",
  },
  galleryRow: {
    display: "flex",
    flexDirection: "row",
    gap: "2em",
    padding: "1em",
    height: "auto",
  },
  galleryTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
};

function useIsPhone(breakpoint = 768) {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isPhone;
}

function MainPageGallery() {
  const isPhone = useIsPhone();

  return (
    <div style={{ ...styles.galleryContainer }}>
      {isPhone ? (
        <>
          {/* 2x3 layout for phones */}
          <div style={styles.galleryRow}>
            <div style={styles.galleryTextContainer}>
              <h1 style={{ marginBottom: "-0.15em", fontSize: "12vw" }}>
                CZEŚĆ!
              </h1>
              <p style={{ marginTop: 0, fontSize: "3vw", paddingLeft: "1.5vw" }}>
                Masz pomysł? Sprawdź co tworzę
                <br /> i zróbmy razem coś niesamowitego!
              </p>
            </div>
            <MainPageGalleryImage imageNumber={1} />
          </div>
          <div style={styles.galleryRow}>
            <div style={{ flex: 1, position: "relative", top: "-100px" }}>
              <MainPageGalleryImage imageNumber={2} />
            </div>
            <MainPageGalleryImage imageNumber={4} />
          </div>
          <div style={styles.galleryRow}>
            <MainPageGalleryImage imageNumber={3} />
            <MainPageGalleryImage imageNumber={5} />
          </div>
          
        </>
      ) : (
        <>
          {/*3x2 layout for desktop */}
          <div style={styles.galleryRow}>
            <div style={styles.galleryTextContainer}>
              <div style={{ margin: "-200px 0 0 -20px" }}>
                <h1 style={{ marginBottom: "-0.15em", fontSize: "6vw" }}>
                  CZEŚĆ!
                </h1>
                <p
                  style={{ marginTop: 0, fontSize: "1.5vw", paddingLeft: "0.5vw" }}
                >
                  Masz pomysł? Sprawdź co tworzę
                  <br /> i zróbmy razem coś niesamowitego!
                </p>
              </div>
            </div>
            <MainPageGalleryImage imageNumber={1} />
            <MainPageGalleryImage imageNumber={2} />
          </div>
          <div style={styles.galleryRow}>
            <MainPageGalleryImage imageNumber={4} />
            <MainPageGalleryImage imageNumber={3} />
            <MainPageGalleryImage imageNumber={5} />
          </div>
          
        </>
      )}
    </div>
  );
}

export default MainPageGallery;
