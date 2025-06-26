import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import Skills from "./pages/Skill";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CertificatePage from "./pages/Certificate";
import "./App.css";
import { useRef } from "react";

// ✅ Wrap routed content in this
function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (

    <CSSTransition
      key={location.pathname}
      classNames="flip"
      timeout={600}
      nodeRef={nodeRef}  // ✅ use nodeRef here
    >
      <div ref={nodeRef} className="page-content"> {/* ✅ attach ref here */}
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/Skill" element={<Skills />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Certificate" element={<CertificatePage />} />
        </Routes>
      </div>
    </CSSTransition>


  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
