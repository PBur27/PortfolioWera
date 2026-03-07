import React from 'react'
import { Row } from 'react-bootstrap'

function ContentRowLarge({type,element1,element2}) {
  console.log('row large: '+element1,element2)
  return (
    <div className="grid-row large">
      <div className="grid-cell">
        <div className={`img-wrap large-${type}`}>
          <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${type}/${element1.src}`} className="grid-image" alt={element1.alt || ""} />
        </div>
      </div>
      <div className="grid-cell">
        <div className={`img-wrap large-${type}`}>
          <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${type}/${element2.src}`} className="grid-image" alt={element2.alt || ""} />
        </div>
      </div>
      
    </div>
  )
}

export default ContentRowLarge