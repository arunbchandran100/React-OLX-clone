import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import ViewProduct from './pages/ViewProduct';
import AddProducts from './pages/AddPoducts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/product' element={ <ViewProduct/>}/>
        <Route path='/addProduct' element={ <AddProducts/>}/>
      </Routes>
    </>
  );
}

export default App
