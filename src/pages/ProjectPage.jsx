import React from "react";
import { Link, useParams } from "react-router";
import ProjectGrid from "../components/projects&photos/ProjectGrid";
import { useTranslate } from "../context/LanguageContext";
import styles from "./projectPage.module.css";

function ProjectPage() {
  const { projectId } = useParams();
  const t = useTranslate();

  const galleryData = {
    Hydropolis: {
      transitionName: "Hydropolis",
      images: [
        "HYDROPOLIS%20PLAKATY.avif",
        "HYDROPOLIS%20LOGO.avif",
        "HYDROPOLIS%20LOGO%20MOCKUP.avif",
        "BILLBOARD%20HYDROPOLIS.avif",
        "HYDROPOLIS%20KOSZULKA.avif",
        "BANNER%20HYDROPOLIS.avif",
        "HYDROPOLIS%20TICKETS.avif",
      ],
    },
    Wedkarstwo: {
      transitionName: "Wedkarstwo",
      images: [
        "RYBY%20PLAKAT%202.avif",
        "RYBY%20NAKLEJKI.avif",
        "RYBY%20TAGI%20PRZYBLIZENIE.avif",
        "RYBY%20BILLBOARD.avif",
        "RYBY%20BILLBOARD%20PODWOJNY.avif",
        "RYBY%20KOSZULKA.avif",
        "RYBY%20PLAKATY.avif",
      ],
    },
    Pszlotawa: {
      transitionName: "Pszlotawa",
      images: [
        "PSZLOTAWA%20PLAKAT%202.avif",
        "PSZLOTAWA%20POST%202.avif",
        "PSZLOTAWA%20INSTASTORY.avif",
        "PSZLOTAWA%20MOCKUP%20BAG.avif",
        "PSZLOTAWA%20OPASKA.avif",
        "PSZLOTAWA%20FORMS.avif",
        "PSZLOTAWA%20PLAKAT.avif",
      ],
    },
    Pomidory: {
      transitionName: "Pomidory",
      images: [
        "POMIDORY%201.avif",
        "POMIDORY%202.avif",
        "POMIDORY%203.avif",
        "POMIDORY%204.avif",
      ],
    },
    Kamcia: {
      transitionName: "Kamcia",
      images: [
        "KAMCIA%200.avif",
        "KAMCIA%201.avif",
        "KAMCIA%202.avif",
        "KAMCIA%203.avif",
      ],
    },
    Zielone: {
      transitionName: "Zielone",
      images: [
        "DOBRE%20ZIELONE%20CALE%201.avif",
        "DOBRE%20ZIELONE%20OKLADKA%201.avif",
        "DOBRE%20ZIELONE%20OKLADKA%202.avif",
        "DOBRE%20ZIELONE%20LOGO.avif",
        "DOBRE%20ZIELONE%20OTWARTE%201.avif",
        "DOBRE%20ZIELONE%20OTWARTE%202.avif",
        "DOBRE%20ZIELONE%20POLOTWARTE.avif",
      ],
    },
    Kora: {
      transitionName: "Kora",
      images: [
        "KORA%202.avif",
        "KORA%201.avif",
        "KORA%208.avif",
        "KORA%207.avif",
        "KORA%203.avif",
        "KORA%206.avif",
        "KORA%200.avif",
      ],
    },
    Flow: {
      transitionName: "Flow",
      images: [
        "FLOW%20PLAKATY.avif",
        "FLOW%20LOGO%202.avif",
        "FLOW%20LOGO.avif",
        "FLOW%20PLAKAT.avif",
        "FLOW%20WRISTBAND.avif",
        "FLOW%20INSTAGRAM.avif",
        "FLOW%20TORBA.avif",
      ],
    },
  };

  const packToNestedObject = (arr, transitionName) => {
    const result = {};

    arr.forEach((item, i) => {
      const groupIndex = Math.floor(i / 3);
      const itemIndex = i % 3;
      const groupKey = `group_${groupIndex}`;

      if (!result[groupKey]) {
        result[groupKey] = {
          transitionName: transitionName,
        };
      }

      result[groupKey][`image_${itemIndex}`] = item;
    });

    return result;
  };

  const transitionName = galleryData[projectId]?.transitionName || projectId;

  const projectPackedToDisplay = packToNestedObject(
    galleryData[projectId].images,
    transitionName,
  );

  const handleBackClick = () => {
    document.documentElement.classList.remove("nav-forward");
    document.documentElement.classList.add("nav-back");
    document.documentElement.classList.remove("is-project-transition");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page-container">
      <div className={styles.projectTopSpacer}></div>
      <div className={`${styles.content} gap-5`}>
        <div>
          <h1 className={styles.projectTitle}>
            {t(`projects.${projectId}.title`)}
          </h1>
          <p className={styles.projectDescription}>
            {t(`projects.${projectId}.description`)}
          </p>
        </div>

        <ProjectGrid content={projectPackedToDisplay} />

        <div className={styles.projectDetails}>
          <p className="m-0">{t("projects.scope_title")}</p>
          <p>{t(`projects.${projectId}.scope`)}</p>
          <p>{t(`projects.${projectId}.university_description`)}</p>
        </div>

        <div className={styles.goBackContainer}>
          <h2 className="fw-bold">{t("projects.other_projects")}</h2>
          <div className={styles.goBackImageContainer}>
            <Link
              className={`${styles.goBackLink} fw-bold`}
              to="/projects"
              onClick={handleBackClick}
              viewTransition
            >
              {t("projects.other_projects_check")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
