import React from 'react';
import './App.css';
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects, Archive, Contact } from "./pages/index";
import { ScrollToTopButton } from "./components/scroll-to-top-button";

function App({ Component, pageProps }) {

  // document.addEventListener('mousemove', (e) => {
  //   const xPos = e.pageX;
  //   const yPos = e.pageY;
  //   console.log(xPos, yPos);
  //   let m = document.querySelector('.App-cursor');
  //   // Get its dimensions
  //   const cursorWidth = m.offsetWidth;
  //   const cursorHeight = m.offsetHeight;

  //   // Calculate the center position of the cursor
  //   const centerX = xPos - cursorWidth / 2;
  //   const centerY = yPos - cursorHeight / 2;

  //   // Constrain the cursor position within the viewport
  //   const constrainedX = Math.max(0, Math.min(window.innerWidth - cursorWidth, centerX));
  //   const constrainedY = Math.max(0, Math.min(window.innerHeight - cursorHeight, centerY));

  //   // Apply the constrained position
  //   m.style.left = `${constrainedX}px`;
  //   m.style.top = `${constrainedY}px`;
  // });

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
