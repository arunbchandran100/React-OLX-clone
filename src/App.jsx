import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import ViewProduct from './pages/ViewProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/product' element={ <ViewProduct/>}/>
      </Routes>
    </>
  );
}

export default App
