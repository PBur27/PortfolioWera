import React from 'react'

import ProjectTriangleCell from './ProjectTriangleCell'

function ProjectGrid({content}) {

  console.log(Object.values(content))
  
  return (
    <div className='projectGalleryGrid'>
      {Object.values(content).map((group)=>{
        return <ProjectTriangleCell content={group} />
      })}
    </div>
  )
}

export default ProjectGrid