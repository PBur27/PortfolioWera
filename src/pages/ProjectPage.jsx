import React from "react";
import { Link, useParams } from "react-router";
import ProjectGrid from "../components/projects&photos/ProjectGrid";
import smile from "../assets/aboutMeSmile.png";
import { useT } from "../LanguageContext";
import "./pages.css";

function ProjectPage() {
  const { projectId } = useParams();
  const t = useT();

  const galleryData = {
    Hydropolis: {
      title: "Hydropolis",
      images: [
        "HYDROPOLIS%20PLAKATY.webp",
        "HYDROPOLIS%20LOGO.webp",
        "HYDROPOLIS%20LOGO%20MOCKUP.webp",
        "BILLBOARD%20HYDROPOLIS.webp",
        "HYDROPOLIS%20KOSZULKA.webp",
        "BANNER%20HYDROPOLIS.webp",
        "HYDROPOLIS%20TICKETS.webp",
      ],
    },
    Wedkarstwo: {
      title: "Festiwal wędkarski",
      images: [
        "RYBY%20PLAKATY.webp",
        "RYBY%20NAKLEJKI.webp",
        "RYBY%20TAGI%20PRZYBLIZENIE.webp",
        "RYBY%20BILLBOARD.webp",
        "RYBY%20BILLBOARD%20PODWOJNY.webp",
        "RYBY%20KOSZULKA.webp",
        "RYBY%20PLAKAT%202.webp",
      ],
    },
    Pszlotawa: {
      title: "Wykład Pszlotawy",
      images: [
        "PSZLOTAWA%20PLAKAT.webp",
        "PSZLOTAWA%20POST%202.webp",
        "PSZLOTAWA%20INSTASTORY.webp",
        "PSZLOTAWA%20MOCKUP%20BAG.webp",
        "PSZLOTAWA%20OPASKA.webp",
        "PSZLOTAWA%20FORMS.webp",
        "PSZLOTAWA%20PLAKAT%202.webp",
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
          <h2 className="fw-bold">{t('projects.other_projects')}</h2>
          <div className="go-back-image-container">
          <Link className="go-back-link fw-bold" to={{
            pathname:"/projects"
          }}>{t('projects.other_projects_check')}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
