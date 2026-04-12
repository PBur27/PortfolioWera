import React from 'react'
import { Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function ContentRowLarge({type,element1,element2, lazy}) {
  console.log('row large: '+element1,element2)

  let navigate = useNavigate()

  const handleClick = (element) => {
    console.log(element)
    if (type != 'projects'){
      return
    }
    document.getElementById('root').scrollTo(0,0)
    navigate(`/projects/${element.name}` )
  }

  return (
    <div className="grid-row large">
      <div className="grid-cell" onClick={()=>{handleClick(element1)}}>
        <div className={`img-wrap large-${type}`}>
          <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element1.src}`} className="grid-image" alt={element1.alt || ""} loading={lazy ? "lazy" : undefined} />
        </div>
      </div>
      <div className="grid-cell" onClick={()=>{handleClick(element2)}}>
        <div className={`img-wrap large-${type}`}>
          <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element2.src}`} className="grid-image" alt={element2.alt || ""} loading={lazy ? "lazy" : undefined} />
        </div>
      </div>
      
    </div>
  )
}

export default ContentRowLarge