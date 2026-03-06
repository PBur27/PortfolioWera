import React from 'react'
import { Row } from 'react-bootstrap'

function ContentRowSmall({element1,element2,element3}) {
  console.log("small row: "+ element1,element2,element3)
  return (
    <div>
      <img src='src\assets\placeholderPhoto.png' />
      <img src='src\assets\placeholderPhoto.png' />
      <img src='src\assets\placeholderPhoto.png' />
    </div>
  )
}

export default ContentRowSmall