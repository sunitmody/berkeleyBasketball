import React, { useState } from 'react';
import FullListItem from './fullListItem.jsx';

const FullList = () => {

  const [info, setInfo] = useState([
    {
      image: 'https://images.unsplash.com/photo-1559686838-545ca2396ad6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Title of Court 1',
      description: 'This basketball court is great for playing on weekends. It comes with special features to do this and that'
    },
    {
      image: 'https://images.unsplash.com/photo-1559686838-545ca2396ad6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Title of Court 2',
      description: 'This basketball court is great for playing on weekends. It comes with special features to do this and that'
    },
    {
      image: 'https://images.unsplash.com/photo-1559686838-545ca2396ad6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Title of Court 3',
      description: 'This basketball court is great for playing on weekends. It comes with special features to do this and that'
    }
  ])

  const items = info.map((court, index) => {
    return <FullListItem court={court} key={index}/>
  })

  return (
    <div id='fullList'>
      {items}
    </div>
  )
}

export default FullList;