import React from "react";
import photo1 from "../../assets/aboutMeImage3.png";
import photo2 from "../../assets/aboutMeImage4.png";

function AboutMeImageBottom() {
  return (
    <div style={{position:"relative", width:"100%", height:"100%"}}>
      <img style={{ objectFit: "contain", width: "100%", maxHeight:'150%', position:'absolute', top:'-33%' }} src={photo2} />
      <img style={{ objectFit: "contain", width: "100%", maxHeight:'150%', position:'absolute', top:'-33%' }} src={photo1} />
    </div>
  );
}

export default AboutMeImageBottom;
