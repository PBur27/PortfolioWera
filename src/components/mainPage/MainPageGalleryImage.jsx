import React from "react";
import "./mainPageGalleryAnimations.css";

function MainPageGalleryImage({ imageNumber }) {
  const imageStyle = {
    objectFit: "contain",
    maxWidth: imageNumber === 3 ? "110%" : "90%",
    
  };
  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
  };

  const imageSrc = new URL(
    `../../assets/mainPageImage${imageNumber}.png`,
    import.meta.url,
  ).href;

  return (
    <div style={imageContainerStyle}>
      <img
        className={`rotating-image${imageNumber}`}
        src={imageSrc}
        style={imageStyle}
        alt={`Gallery image ${imageNumber}`}
      />
    </div>
  );
}

export default MainPageGalleryImage;
