import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (

    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link" element={<Home />} />
        <Route path="/action" element={<Home />} />
        <Route path="/another-action" element={<Home />} />
        <Route path="/something-else" element={<Home />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
