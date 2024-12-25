import logo from './aqilah-logo.png';
import './App.css';
import { Button } from "./components/ui/button"
import { HStack } from "@chakra-ui/react"
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages/index";
import { Text } from '@chakra-ui/react';
import { ScrollToTopButton } from "./components/scroll-to-top-button";

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <Footer></Footer>
    </div>
  );
}

export default App;
