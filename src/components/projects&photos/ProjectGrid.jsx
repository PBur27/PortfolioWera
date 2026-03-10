import React from 'react'

import ProjectTriangleCell from './ProjectTriangleCell'
import './projectGridStyle.css'

function ProjectGrid({content}) {

  console.log(Object.values(content))
  
  return (
    <div className='project-gallery-grid'>
      {Object.values(content).map((group,index)=>{
        return <ProjectTriangleCell key={index} content={group} />
      })}
    </div>
  )
}

export default ProjectGrid