import React, { useState } from 'react';

const CourtMainImage = (props) => {
  return (
    <img id="image" src={`${props.image}`} />
  )
}

export default CourtMainImage;