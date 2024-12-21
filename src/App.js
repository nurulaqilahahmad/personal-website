import logo from './aqilah-logo.png';
import './App.css';
import { Button } from "./components/ui/button"
import { HStack } from "@chakra-ui/react"
import { Nav } from "./components/nav";
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
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <HStack>
          <Button>Click me</Button>
          <Button>Click me</Button>
        </HStack> */}

        {/* <h1 className="bg-red-500">
          Hello world!
        </h1> */}


        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
