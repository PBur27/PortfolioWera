import React from "react";
import ContentGrid from "../components/Projects&Photography/ContentGrid";
import TopIcon from "../components/ui/TopIcon";
import styles from "./projects&photography.module.css";

function Projects() {
  const contentToDisplay = [
    {
      id: 1,
      name: "Hydropolis",
      src: "HYDROPOLIS%20PLAKATY.avif",
      category: "Identyfikacja wizualna",
      size: "large",
    },
    {
      id: 2,
      name: "Wedkarstwo",
      src: "RYBY%20PLAKAT%202.avif",
      category: "Identyfikacja wizualna",
      size: "large",
    },
    {
      id: 3,
      name: "Pszlotawa",
      src: "PSZLOTAWA%20PLAKAT%202.avif",
      category: "Identyfikacja wizualna",
      size: "large",
    },
    {
      id: 4,
      name: "Pomidory",
      src: "POMIDORY%204.avif",
      category: "Opakowanie",
      size: "large",
    },
    {
      id: 5,
      name: "Kamcia",
      src: "KAMCIA%200.avif",
      category: "Opakowanie",
      size: "large",
    },
    {
      id: 6,
      name: "Zielone",
      src: "DOBRE%20ZIELONE%20CALE%201.avif",
      category: "Publikacja",
      size: "large",
    },
    {
      id: 7,
      name: "Kora",
      src: "KORA%202.avif",
      category: "Publikacja",
      size: "large",
    },
    {
      id: 8,
      name: "Flow",
      src: "FLOW%20PLAKATY.avif",
      category: "Identyfikacja",
      size: "large",
    },
    {
      id: 9,
      name: "Auto",
      src: "AUTO%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 10,
      name: "Town",
      src: "THE%20TOWN%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 11,
      name: "Monstera",
      src: "MONSTERA.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 12,
      name: "Final",
      src: "FINALPSD%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 13,
      name: "Ewolucja",
      src: "EWOLUCJA%20NATURY%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 14,
      name: "Granat",
      src: "OWOC%20GRANATU%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 15,
      name: "Process",
      src: "TRUST%20THE%20PROCESS%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 16,
      name: "Przeploty",
      src: "PRZEPLOTY%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 17,
      name: "Szyfry",
      src: "SZYFRY%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 18,
      name: "Halloween",
      src: "PSY.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 19,
      name: "Lamiszczeka",
      src: "ŁAMISZCZĘKA%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 20,
      name: "Udomowiona",
      src: "UDOMOWIONA%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
  ];
  return (
    <div className="page-container">
      <TopIcon image={"pencil"} />
      <div className={styles.content}>
        <ContentGrid type="projects" content={contentToDisplay} />
      </div>
    </div>
  );
}

export default Projects;
