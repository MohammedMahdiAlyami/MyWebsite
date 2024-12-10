import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './Components/Home';
import About from './Components/About';
import Qualifications from './Components/Qualifications';
import Certificates from './Components/Certificates';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Timeline from './Components/Timeline';

import './App.css';

function App() {
  return (
    <>
      {/* Navbar ثابت */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">MyProfile</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#journey">Timeline</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#qualifications">Qualifications</Nav.Link>
              <Nav.Link href="#certificates">Certificates</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* الأقسام مع الـ id المناسب */}
      <div id="home" className="white-section">
        <Home />
      </div>
      <div id="journey" className="white-section">
        <Timeline />
      </div>
      <div id="about" className="dark-white-section">
        <About />
      </div>
      <div id="qualifications" className="white-section">
        <Qualifications />
      </div>
      <div id="certificates" className="dark-white-section">
        <Certificates />
      </div>
      <div id="experience" className="dark-white-section">
        <Experience />
      </div>
      <div id="skills" className="white-section">
        <Skills />
      </div>
      <div id="projects" className="dark-white-section">
        <Projects />
      </div>
      <div id="contact" className="white-section">
        <Contact />
      </div>

      {/* Footer Section */}
      <footer className="footer bg-secondary text-center py-4 mt-5">
  <p className="text-white">&copy; {new Date().getFullYear()} My Profile. All rights reserved.</p>
  <p>
    <a href="https://www.linkedin.com/in/mohammed-mahdi-alyami" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
      LinkedIn
    </a>
    |
    <a href="https://github.com/MohammedMahdiAlyami" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
      GitHub
    </a>
    |
    <a href="mailto:ghib34@gmail.com" className="text-light mx-3">
      Email
    </a>
  </p>
</footer>
    </>
  );
}

export default App;
