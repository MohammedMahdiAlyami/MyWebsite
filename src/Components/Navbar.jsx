import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // استيراد الأيقونات

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
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#journey">Timeline</Nav.Link>
              <Nav.Link href="#qualifications">Qualifications</Nav.Link>
              <Nav.Link href="#certificates">Certificates</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            {/* زر تحميل CV */}
            <a
              href="/CV_MOHAMMED_ALYAMI.pdf" // رابط ملف CV
              target="_blank" // فتح الرابط في نافذة جديدة
              rel="noopener noreferrer"
              className="btn btn-primary ms-3" // تنسيق Bootstrap
            >
              Download CV
            </a>

            {/* إضافة أيقونات GitHub و LinkedIn على اليمين */}
            <Nav.Link href="https://github.com/your-github-username" target="_blank">
              <FaGithub style={{ fontSize: '1.5rem', marginRight: '10px', color: '#fff' }} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/your-linkedin-username" target="_blank">
              <FaLinkedin style={{ fontSize: '1.5rem', marginRight: '10px', color: '#fff' }} />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* الأقسام مع الـ id المناسب */}
      <div id="home" className="dark-white-section">
        <Home />
      </div>
      <div id="about" className="white-section">
        <About />
      </div>
      <div id="journey" className="dark-white-section">
        <Timeline />
      </div>
      <div id="qualifications" className="white-section">
        <Qualifications />
      </div>
      <div id="certificates" className="dark-white-section">
        <Certificates />
      </div>
      <div id="Experience" className="white-section">
        <Experience />
      </div>
      <div id="skills" className="dark-white-section">
        <Skills />
      </div>
      <div id="projects" className="white-section">
        <Projects />
      </div>
      <div id="contact" className="dark-white-section">
        <Contact />
      </div>
    </>
  );
}

export default App;
