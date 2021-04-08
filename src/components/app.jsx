import React, { useState } from 'react';
import Search from './search.jsx';
import FullList from './fullList.jsx';
import Description from './description.jsx';
import Title from './title.jsx';
import NewLocation from './newLocation.jsx';


const App = () => {
  return (
    <React.Fragment>
      <Title />
      <Description />
      <Search />
      <FullList />
      <NewLocation />
    </React.Fragment>
  )
}

export default App;