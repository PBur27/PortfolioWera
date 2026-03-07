import React from "react";
import smile from "../assets/aboutMeSmile.png";
import ContentGrid from "../components/projects&photos/ContentGrid";

function Projects() {
  const contentToDisplay = [
    { id: 1, src: "HYDROPOLIS%20LOGO%20MOCKUP.webp" },
    { id: 2, src: "RYBY%20PLAKAT%202.webp" },
    { id: 3, src: "PSZLOTAWA%20PLAKAT%202.webp" },
    { id: 4, src: "POMIDORY%204.webp" },
    { id: 5, src: "KAMCIA%200.webp" },
    { id: 6, src: "DOBRE%20ZIELONE%20CALE%201.webp" },
    { id: 7, src: "KORA%202.webp" },
    { id: 8, src: "FLOW%20PLAKATY.webp" },
    { id: 9, src: "AUTO%20POSTER.webp" },
    { id: 10, src: "THE%20TOWN%20POSTER.webp" },
    { id: 11, src: "MONSTERA.webp" },
    { id: 12, src: "FINALPSD%20POSTER.webp" },
    { id: 13, src: "EWOLUCJA%20NATURY%20POSTER.webp" },
    { id: 14, src: "OWOC%20GRANATU%20POSTER.webp" },
    { id: 15, src: "TRUST%20THE%20PROCESS%20POSTER.webp" },
    { id: 16, src: "PRZEPLOTY%20POSTER.webp" },
    { id: 17, src: "SZYFRY%20POSTER.webp" },
    { id: 18, src: "PSY%20HALLOWEEN.webp" },
    { id: 19, src: "ŁAMISZCZĘKA%20POSTER.webp" },
    { id: 20, src: "UDOMOWIONA%20POSTER.webp" },
  ];
  return (
    <>
      <div className="top-image-container">
        <img src={smile} className="top-image" />
      </div>
      <div className="content">
        <ContentGrid type="projects" content={contentToDisplay} largeRows={4} smallRows={4}/>
      </div>
    </>
  );
}

export default Projects;
