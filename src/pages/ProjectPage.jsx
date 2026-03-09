import React from "react";
import { useParams } from "react-router";
import ProjectGrid from "../components/projects&photos/ProjectGrid";
import smile from "../assets/aboutMeSmile.png";

function ProjectPage() {
  const { projectId } = useParams();

  const galleryData = {
    Hydropolis: {
      title: "Hydropolis", 
      images: [
        "HYDROPOLIS PLAKATY.webp",
        "HYDROPOLIS LOGO.webp",
        "HYDROPOLIS LOGO MOCKUP.webp",
        "BILLBOARD HYDROPOLIS.webp",
        "HYDROPOLIS KOSZULKA.webp",
        "BANNER HYDROPOLIS.webp",
        "HYDROPOLIS TICKETS.webp",
      ],
    },
    Wedkarstwo: {
      title: "Festiwal wędkarski",
      images: [
        "RYBY PLAKATY.webp",
        "RYBY NAKLEJKI.webp",
        "RYBY TAGI PRZYBLIZENIE.webp",
        "RYBY BILLBOARD.webp",
        "RYBY BILLBOARD PODWOJNY.webp",
        "RYBY KOSZULKA.webp",
        "RYBY PLAKAT 2.webp",
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

  const projectPackedToDisplay = packToNestedObject(galleryData[projectId].images);

  return (
    <>
      <div className="project-top-spacer"></div>
      <div className="content">
        <h1>Project Details</h1>
        <p>
          Placeholder description for: <strong>{galleryData[projectId].title}</strong>
        </p>
        <ProjectGrid content={projectPackedToDisplay} />
      </div>
    </>
  );
}

export default ProjectPage;
