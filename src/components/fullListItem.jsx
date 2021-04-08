import React, { useState } from 'react';
import CourtMainImage from './courtMainImage.jsx';
import CourtTitleDescription from './courtTitleDescription.jsx';

const FullListItem = (props) => {
  console.log(`Image: ${props.court.image}`)
  return (
    <div id="FullListItem">
      <CourtMainImage image={props.court.image}/>
      <CourtTitleDescription title={props.court.title} description={props.court.description}/>
    </div>
  )
}

export default FullListItem;