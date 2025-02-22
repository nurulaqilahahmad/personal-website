import React from 'react';
import './App.css';
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects, Archive, Contact } from "./pages/index";
import { ScrollToTopButton } from "./components/scroll-to-top-button";

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <Footer></Footer>
    </div>
  );
}

export default App;
