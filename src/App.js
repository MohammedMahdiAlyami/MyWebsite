import React, { useContext } from 'react';
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
import { LanguageContext, LanguageProvider } from './contexts/LanguageContext'; // استيراد السياق

import './App.css';

function AppContent() {
  const { language, toggleLanguage } = useContext(LanguageContext); // استخدام السياق

  return (
    <>
      {/* Navbar ثابت */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">{language === 'en' ? 'Mohammed Alyami' : 'محمد اليامي'}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">{language === 'en' ? 'Home' : 'الرئيسية'}</Nav.Link>
              <Nav.Link href="#journey">{language === 'en' ? 'Timeline' : 'الخط الزمني'}</Nav.Link>
              <Nav.Link href="#about">{language === 'en' ? 'About' : 'نبذة عنّي'}</Nav.Link>
              <Nav.Link href="#qualifications">{language === 'en' ? 'Qualifications' : 'المؤهلات'}</Nav.Link>
              <Nav.Link href="#certificates">{language === 'en' ? 'Certificates' : 'الشهادات'}</Nav.Link>
              <Nav.Link href="#experience">{language === 'en' ? 'Experience' : 'الخبرات'}</Nav.Link>
              <Nav.Link href="#skills">{language === 'en' ? 'Skills' : 'المهارات'}</Nav.Link>
              <Nav.Link href="#projects">{language === 'en' ? 'Projects' : 'المشاريع'}</Nav.Link>
              <Nav.Link href="#contact">{language === 'en' ? 'Contact' : 'التواصل'}</Nav.Link>
            </Nav>
            {/* زر تغيير اللغة */}
            <button
              onClick={toggleLanguage}
              className="btn btn-secondary ms-3"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
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
        <p className="text-white">&copy; {new Date().getFullYear()} {language === 'en' ? 'Mohammed Alyami. All rights reserved.' : 'محمد اليامي. جميع الحقوق محفوظة'}</p>
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

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
