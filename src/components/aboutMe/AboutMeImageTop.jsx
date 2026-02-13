import React from "react";
import photo1 from "../../assets/aboutMeImage1.png";
import photo2 from "../../assets/aboutMeImage2.png";

function AboutMeImageTop() {
  return (
    <div style={{position:"relative",width:'100%',height:'100%'}}>
      <img style={{ objectFit: "contain", position:'absolute',width:'100%',height:'100%'}} src={photo2} />
      <img style={{ objectFit: "contain", position:'absolute',width:'100%',height:'100%'}} src={photo1} />
    </div>
  );
}

export default AboutMeImageTop;
