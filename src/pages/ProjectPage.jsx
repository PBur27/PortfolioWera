import React from "react";
import { useParams } from "react-router";

function ProjectPage() {
  const { projectId } = useParams();

  return (
    <div className="container mt-5">
      <h1>Project Details</h1>
      <p>
        Currently viewing: <strong>{projectId}</strong>
      </p>
      {/* Here you would filter your project data using the projectId */}
    </div>
  );
}

export default ProjectPage;
