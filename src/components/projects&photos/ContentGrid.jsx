import React from "react";

function ContentGrid(props) {
  const contentArray = Object.values(props);
  if (contentArray.length < 8) {
    return <div>Not enough elements</div>;
  }

  return <div>ContentGrid</div>;
}

export default ContentGrid;
