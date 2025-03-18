import React from 'react';
import 'tailwindcss'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;