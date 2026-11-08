import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import ContentGrid from "../components/Projects&Photography/ContentGrid";
import TopIcon from "../components/ui/TopIcon";
import styles from "./projects&photography.module.css";
import ActiveContentModal from "../components/Projects&Photography/ActiveContentModal";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const contentToDisplay = [
    {
      id: 1,
      name: "Hydropolis",
      displayName: "Hydropolis",
      transitionName: "Hydropolis",
      src: "HYDROPOLIS%20PLAKATY.avif",
      category: "Identyfikacja wizualna",
      size: "large",
    },
    {
      id: 2,
      name: "Wedkarstwo",
      displayName: "Festiwal wędkarski",
      transitionName: "Wedkarstwo",
      src: "RYBY%20PLAKAT%202.avif",
      category: "Identyfikacja wizualna",
      size: "large",
    },
    {
      id: 3,
      name: "Pszlotawa",
      displayName: "Wykład Pszlotawy",
      transitionName: "Pszlotawa",
      src: "PSZLOTAWA%20PLAKAT%202.avif",
      category: "Identyfikacja wizualna",
      size: "large",
    },
    {
      id: 4,
      name: "Pomidory",
      displayName: "Opakowania Pomidorowe",
      transitionName: "Pomidory",
      src: "POMIDORY%204.avif",
      category: "Opakowanie",
      size: "large",
    },
    {
      id: 5,
      name: "Kamcia",
      displayName: "Kamcia",
      transitionName: "Kamcia",
      src: "KAMCIA%200.avif",
      category: "Opakowanie",
      size: "large",
    },
    {
      id: 6,
      name: "Zielone",
      displayName: "Magazyn Dobre Zielone",
      transitionName: "Zielone",
      src: "DOBRE%20ZIELONE%20CALE%201.avif",
      category: "Publikacja",
      size: "large",
    },
    {
      id: 7,
      name: "Kora",
      displayName: "Tom poezji Kory",
      transitionName: "Kora",
      src: "KORA%202.avif",
      category: "Publikacja",
      size: "large",
    },
    {
      id: 8,
      name: "Flow",
      displayName: "Flow festival",
      transitionName: "Flow",
      src: "FLOW%20PLAKATY.avif",
      category: "Identyfikacja",
      size: "large",
    },
    {
      id: 9,
      name: "Auto",
      displayName: "Wakacyjne Auto",
      src: "AUTO%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 10,
      name: "Town",
      displayName: "The Town is Yours",
      src: "THE%20TOWN%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 11,
      name: "Monstera",
      displayName: "Monstera",
      src: "MONSTERA.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 12,
      name: "Final",
      displayName: "Final.PSD",
      src: "FINALPSD%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 13,
      name: "Ewolucja",
      displayName: "Ewolucja Natury",
      src: "EWOLUCJA%20NATURY%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 14,
      name: "Granat",
      displayName: "Owoc Granatu",
      src: "OWOC%20GRANATU%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 15,
      name: "Process",
      displayName: "Trust the Process",
      src: "TRUST%20THE%20PROCESS%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 16,
      name: "Przeploty",
      displayName: "Przeploty",
      src: "PRZEPLOTY%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 17,
      name: "Szyfry",
      displayName: "Szyfry",
      src: "SZYFRY%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 18,
      name: "Halloween",
      displayName: "Halloweenowe Psy",
      src: "PSY.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 19,
      name: "Lamiszczeka",
      displayName: "Łamiszczęka",
      src: "ŁAMISZCZĘKA%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
    {
      id: 20,
      name: "Udomowiona",
      displayName: "Udomowiona",
      src: "UDOMOWIONA%20POSTER.avif",
      category: "Plakat",
      size: "small",
    },
  ];
  return (
    <div className="page-container">
      <TopIcon image={"pencil"} />
      <div className={styles.content}>
        <ContentGrid
          type="projects"
          content={contentToDisplay}
          setActiveContent={setActiveProject}
        />
      </div>
      <AnimatePresence>
        {activeProject && (
          <ActiveContentModal
            content={activeProject}
            contentType="project"
            setActiveContent={setActiveProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
