import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects, Archive, Contact } from "./pages/index";
import { ScrollToTopButton } from "./components/scroll-to-top-button";
import globalApi from "./services/global-api";
import SingleProject from './pages/single-project';

function App({ Component, pageProps }) {

  const [project, setProject] = useState([]);
      useEffect(()=>{
          getProjectList();
      },[])
      const getProjectList = () => {
          globalApi.getProject().then(resp=>{
              setProject(resp.projects);
          })
      }

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        {project.map((proj) => (
          <Route path={"/project/"+proj.slug} element={<SingleProject project={proj} />} />
        ))}
      </Routes>
      <ScrollToTopButton />
      <Footer></Footer>
    </div>
  );
}

export default App;
