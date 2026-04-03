import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // Deep dark blue for eyes
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      {/* Pass mode and toggle function to Navbar */}
      <Navbar title="ForgeText" mode={mode} toggleMode={toggleMode} />
      
      <div className="container my-3">
        <Routes>
          {/* Pass mode to components so they can style themselves */}
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route path="*" element={<PageNotFound mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;