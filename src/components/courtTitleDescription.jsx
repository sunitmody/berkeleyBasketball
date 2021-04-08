import React, { useState } from 'react';

const CourtTitleDescription = (props) => {
  console.log(`title: ${props.title}`)
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default CourtTitleDescription;