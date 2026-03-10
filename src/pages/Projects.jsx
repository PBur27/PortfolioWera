import React from "react";
import smile from "../assets/aboutMeSmile.png";
import ContentGrid from "../components/projects&photos/ContentGrid";

function Projects() {
  const contentToDisplay = [
  { id: 1, name: "Hydropolis", src: "HYDROPOLIS%20LOGO%20MOCKUP.webp" },
  { id: 2, name: "Wedkarstwo", src: "RYBY%20PLAKAT%202.webp" },
  { id: 3, name: "Pszlotawa", src: "PSZLOTAWA%20PLAKAT%202.webp" },
  { id: 4, name: "", src: "POMIDORY%204.webp" },
  { id: 5, name: "", src: "KAMCIA%200.webp" },
  { id: 6, name: "", src: "DOBRE%20ZIELONE%20CALE%201.webp" },
  { id: 7, name: "", src: "KORA%202.webp" },
  { id: 8, name: "", src: "FLOW%20PLAKATY.webp" },
  { id: 9, name: "", src: "AUTO%20POSTER.webp" },
  { id: 10, name: "", src: "THE%20TOWN%20POSTER.webp" },
  { id: 11, name: "", src: "MONSTERA.webp" },
  { id: 12, name: "", src: "FINALPSD%20POSTER.webp" },
  { id: 13, name: "", src: "EWOLUCJA%20NATURY%20POSTER.webp" },
  { id: 14, name: "", src: "OWOC%20GRANATU%20POSTER.webp" },
  { id: 15, name: "", src: "TRUST%20THE%20PROCESS%20POSTER.webp" },
  { id: 16, name: "", src: "PRZEPLOTY%20POSTER.webp" },
  { id: 17, name: "", src: "SZYFRY%20POSTER.webp" },
  { id: 18, name: "", src: "PSY%20HALLOWEEN.webp" },
  { id: 19, name: "", src: "ŁAMISZCZĘKA%20POSTER.webp" },
  { id: 20, name: "", src: "UDOMOWIONA%20POSTER.webp" },
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
