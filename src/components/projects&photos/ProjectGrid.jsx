import React from 'react'

import ProjectTriangleCell from './ProjectTriangleCell'
import styles from './projectGridStyle.module.css'

function ProjectGrid({content}) {

  console.log(Object.values(content))
  
  return (
    <div className={styles.projectGalleryGrid}>
      {Object.values(content).map((group,index)=>{
        return <ProjectTriangleCell key={index} number ={index} content={group} />
      })}
    </div>
  )
}

export default ProjectGrid