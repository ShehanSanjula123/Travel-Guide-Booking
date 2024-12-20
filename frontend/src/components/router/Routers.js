import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import SearchResultList from '../pages/SearchResultList';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/searchRL' element={<SearchResultList/>}/>
        <Route path='/tour' element={<Tours/>}/>
        <Route path='/tourDetails' element={<TourDetails/>}/>
    </Routes>
  )
}

export default Routers