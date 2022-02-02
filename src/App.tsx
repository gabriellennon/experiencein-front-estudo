import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Perfis } from './Pages/Perfis';
import { Register } from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Login/>}
        />
        <Route 
          path="/home"
          element={<Home/>}
        />
        <Route 
          path="/register"
          element={<Register/>}
        />
        <Route 
          path="/perfis"
          element={<Perfis/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
