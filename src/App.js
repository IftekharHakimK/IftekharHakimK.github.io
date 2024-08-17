import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Education from './pages/Educations';
import Project from './pages/Projects';
import Research from './pages/Research';
import Sidebar from './components/sidebar';
import Honours from './pages/Honours';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Sidebar><Home /></Sidebar>} />
            <Route path="education" element={<Sidebar><Education /></Sidebar>} />
            <Route path="experience" element={<Sidebar><Experience/></Sidebar>} />
            <Route path="projects" element={<Sidebar><Project/></Sidebar>} />
            <Route path="honours" element={<Sidebar><Honours /></Sidebar>} />
            <Route path="contact" element={<Sidebar><Contact /></Sidebar>} />
            <Route path="research" element={<Sidebar><Research /></Sidebar>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;