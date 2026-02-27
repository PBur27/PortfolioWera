import React from "react";
import smile from "../assets/aboutMeSmile.png";
import ContentGrid from "../components/projects&photos/ContentGrid";

function Projects() {
  return (
    <>
      <div className="top-image-container">
        <img src={smile} className="top-image" />
      </div>
      <div className="content">
        <ContentGrid>

        </ContentGrid>
      </div>
    </>
  );
}

export default Projects;
