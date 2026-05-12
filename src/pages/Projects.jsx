import React from "react";
import ContentGrid from "../components/projects&photos/ContentGrid";
import TopIcon from '../components/TopIcon'

function Projects() {
  const contentToDisplay = [
  { id: 1, name: "Hydropolis", src: "HYDROPOLIS%20PLAKATY.avif" },
  { id: 2, name: "Wedkarstwo", src: "RYBY%20PLAKAT%202.avif" },
  { id: 3, name: "Pszlotawa", src: "PSZLOTAWA%20PLAKAT%202.avif" },
  { id: 4, name: "Pomidory", src: "POMIDORY%204.avif" },
  { id: 5, name: "Kamcia", src: "KAMCIA%200.avif" },
  { id: 6, name: "Zielone", src: "DOBRE%20ZIELONE%20CALE%201.avif" },
  { id: 7, name: "Kora", src: "KORA%202.avif" },
  { id: 8, name: "Flow", src: "FLOW%20PLAKATY.avif" },
  { id: 9, name: "Auto", src: "AUTO%20POSTER.avif" },
  { id: 10, name: "Town", src: "THE%20TOWN%20POSTER.avif" },
  { id: 11, name: "Monstera", src: "MONSTERA.avif" },
  { id: 12, name: "Final", src: "FINALPSD%20POSTER.avif" },
  { id: 13, name: "Ewolucja", src: "EWOLUCJA%20NATURY%20POSTER.avif" },
  { id: 14, name: "Granat", src: "OWOC%20GRANATU%20POSTER.avif" },
  { id: 15, name: "Process", src: "TRUST%20THE%20PROCESS%20POSTER.avif" },
  { id: 16, name: "Przeploty", src: "PRZEPLOTY%20POSTER.avif" },
  { id: 17, name: "Szyfry", src: "SZYFRY%20POSTER.avif" },
  { id: 18, name: "Halloween", src: "PSY.avif" },
  { id: 19, name: "Lamiszczeka", src: "ŁAMISZCZĘKA%20POSTER.avif" },
  { id: 20, name: "Udomowiona", src: "UDOMOWIONA%20POSTER.avif" },
];
  return (
    <>
      <TopIcon image={'pencil'} />
      <div className="content">
        <ContentGrid type="projects" content={contentToDisplay} largeRows={4} smallRows={4}/>
      </div>
    </>
  );
}

export default Projects;
