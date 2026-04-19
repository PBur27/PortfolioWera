import React from "react";
import { Link, useParams } from "react-router";
import ProjectGrid from "../components/projects&photos/ProjectGrid";
import { useT } from "../LanguageContext";
import "./pages.css";

function ProjectPage() {
  const { projectId } = useParams();
  const t = useT();

  const galleryData = {
    Hydropolis: {
      title: "Hydropolis",
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
      title: "Festiwal wędkarski",
      images: [
        "RYBY%20PLAKATY.avif",
        "RYBY%20NAKLEJKI.avif",
        "RYBY%20TAGI%20PRZYBLIZENIE.avif",
        "RYBY%20BILLBOARD.avif",
        "RYBY%20BILLBOARD%20PODWOJNY.avif",
        "RYBY%20KOSZULKA.avif",
        "RYBY%20PLAKAT%202.avif",
      ],
    },
    Pszlotawa: {
      title: "Wykład Pszlotawy",
      images: [
        "PSZLOTAWA%20PLAKAT.avif",
        "PSZLOTAWA%20POST%202.avif",
        "PSZLOTAWA%20INSTASTORY.avif",
        "PSZLOTAWA%20MOCKUP%20BAG.avif",
        "PSZLOTAWA%20OPASKA.avif",
        "PSZLOTAWA%20FORMS.avif",
        "PSZLOTAWA%20PLAKAT%202.avif",
      ],
    },
    Pomidory: {
      title: "Pomidory",
      images: [
        "POMIDORY%201.avif",
        "POMIDORY%202.avif",
        "POMIDORY%203.avif",
        "POMIDORY%204.avif",
      ],
    },
    Kamcia: {
      title: "Kamcia",
      images: [
        "KAMCIA%200.avif",
        "KAMCIA%201.avif",
        "KAMCIA%202.avif",
        "KAMCIA%203.avif",
      ],
    },
    Zielone: {
      title: "Dobre Zielone",
      images: [
        "DOBRE%20ZIELONE%20LOGO.avif",
        "DOBRE%20ZIELONE%20OKLADKA%201.avif",
        "DOBRE%20ZIELONE%20OKLADKA%202.avif",
        "DOBRE%20ZIELONE%20CALE%201.avif",
        "DOBRE%20ZIELONE%20OTWARTE%201.avif",
        "DOBRE%20ZIELONE%20OTWARTE%202.avif",
        "DOBRE%20ZIELONE%20POLOTWARTE.avif",
      ],
    },
    Kora: {
      title: "Tom poezji Kory",
      images: [
        "KORA%201.avif",
        "KORA%202.avif",
        "KORA%208.avif",
        "KORA%207.avif",
        "KORA%203.avif",
        "KORA%206.avif",
        "KORA%200.avif",
      ],
    },
    Flow: {
      title: "Flow festival",
      images: [
        "FLOW%20PLAKAT.avif",
        "FLOW%20LOGO%202.avif",
        "FLOW%20LOGO.avif",
        "FLOW%20PLAKATY.avif",
        "FLOW%20WRISTBAND.avif",
        "FLOW%20INSTAGRAM.avif",
        "FLOW%20TORBA.avif",
      ],
    },
  };

  //helper that prepares an array by packing every 3 elements into a subobject
  const packToNestedObject = (arr) => {
    const result = {};

    arr.forEach((item, i) => {
      const groupIndex = Math.floor(i / 3);
      const itemIndex = i % 3;
      const groupKey = `group_${groupIndex}`;

      if (!result[groupKey]) {
        result[groupKey] = {};
      }

      result[groupKey][`image_${itemIndex}`] = item;
    });

    return result;
  };

  const projectPackedToDisplay = packToNestedObject(
    galleryData[projectId].images,
  );

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    console.log("Function started!");
  };

  return (
    <>
      <div className="project-top-spacer"></div>
      <div className="content gap-5">
        <div>
          <h1 className="project-title">{t(`projects.${projectId}.title`)}</h1>
          <p className="project-description">
            {t(`projects.${projectId}.description`)}
          </p>
        </div>
        <ProjectGrid content={projectPackedToDisplay} />
        <div className="project-details">
          <p className="m-0">{t("projects.scope_title")}</p>
          <p>{t(`projects.${projectId}.scope`)}</p>
          <p>{t("projects.university_description")}</p>
        </div>
        <div className="go-back-container">
          <h2 className="fw-bold">{t("projects.other_projects")}</h2>
          <div className="go-back-image-container">
            <Link
              className="go-back-link fw-bold"
              to="/projects"
              onClick={handleBackClick}
            >
              {t("projects.other_projects_check")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
