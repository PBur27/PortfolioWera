import React from 'react'
import './topIcon.css'

function TopIcon({image}) {

  return (
    <div className="top-icon-container">
        <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${image}.avif`} className="top-image" alt="Smile" />
      </div>
  )
}

export default TopIcon