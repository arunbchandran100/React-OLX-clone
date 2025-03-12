import React, { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ViewProduct from './pages/ViewProduct';
import AddProducts from './pages/AddPoducts';
import { AuthProvider } from "./context/AuthContext";

export const SearchContext = createContext();

function App() {
  const [SearchValue, SetSearchValue] = useState('');

  return (
    <AuthProvider>  {/* ✅ Wrapping the entire app */}
      <SearchContext.Provider value={{ SearchValue, SetSearchValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product' element={<ViewProduct />} />
          <Route path='/addProduct' element={<AddProducts />} />
        </Routes>
      </SearchContext.Provider>
    </AuthProvider>
  );
}

export default App;
