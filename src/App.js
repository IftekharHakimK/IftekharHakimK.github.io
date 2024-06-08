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
      {/* <Sidebar> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Sidebar><Home /></Sidebar>} />
            <Route path="education" element={<Sidebar><Education /></Sidebar>} />
            <Route path="about" element={<Sidebar><About /></Sidebar>} />
          </Routes>
        </BrowserRouter>
      {/* </Sidebar> */}
    </>
  );
}

export default App;