import React from "react";
import ContentRowLarge from "./ContentRowLarge";
import ContentRowSmall from "./ContentRowSmall";
import './galleryGridStyle.css'

function ContentGrid({type, content, largeRows, smallRows }) {

  console.log("large(x2) rows: " + largeRows);
  console.log("small(x3) rows: " + smallRows);



  //group content in objects according to the number of small and big rows
  let contentToDisplay = []
  let index = 0
  for (let i = 0; i < largeRows; i++) {
    contentToDisplay.push(
      {
        type: 'large',
        element1: content[index],
        element2: content[index+1]
      }
    )
    index += 2
  }
  for (let i = 0; i < smallRows; i++) {
    contentToDisplay.push(
      {
        type: 'small',
        element1: content[index],
        element2: content[index+1],
        element3: content[index+2]
      }
    )
    index += 3
  }
 

  return (
  <div className="grid-container">

    {contentToDisplay.map((item,index)=>{
      console.log(item.type)
      if (item.type === 'large'){
        return <ContentRowLarge key={index} type={type} element1={item.element1} element2={item.element2} />
      }
      else{
        return <ContentRowSmall key={index} type={type} element1={item.element1} element2={item.element2} element3={item.element3} />
      }
    })}
    
  </div>);
}

export default ContentGrid;
