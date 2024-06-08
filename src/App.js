import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Educations';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Sidebar from './components/sidebar';
const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <>
      <Sidebar>
        <BrowserRouter>
          <Routes>
            <Route index element={<Education />} />
            <Route path="education" element={<Education />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Sidebar>
    </>
  );
}

export default App;