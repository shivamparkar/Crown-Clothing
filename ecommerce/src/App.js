import React from 'react';
import Home from './routes/home/home.component';

import { Routes, Route, Outlet} from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';

import Sign from './routes/sign-in/sign-in.component';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>

      //These index is to when even use is on these path '/' it should directly hit index
      <Route index element={<Home />} /> //Parent 
      <Route path='/shop' element={<Shop />}/>  // Child nested
      <Route path='/signin' element={<Sign />}/>  
      </Route>
      </Routes>
  )
};


const Shop = () => {
  return(
    <h1>We are in shop </h1>
  )
}



export default App;
