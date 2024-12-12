import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // استيراد الأيقونات
import { LanguageContext } from './contexts/LanguageContext'; // استيراد السياق

function App() {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة

  // محتوى النصوص باللغتين
  const content = {
    en: {
      home: "Home",
      about: "About",
      journey: "Timeline",
      qualifications: "Qualifications",
      certificates: "Certificates",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cv: "Download CV",
    },
    ar: {
      home: "الرئيسية",
      about: "عنّي",
      journey: "السيرة المهنية",
      qualifications: "المؤهلات",
      certificates: "الشهادات",
      experience: "الخبرات",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "اتصل بي",
      cv: "تحميل السيرة الذاتية",
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <>
      {/* Navbar ثابت */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">MyProfile</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">{selectedContent.home}</Nav.Link>
              <Nav.Link href="#about">{selectedContent.about}</Nav.Link>
              <Nav.Link href="#journey">{selectedContent.journey}</Nav.Link>
              <Nav.Link href="#qualifications">{selectedContent.qualifications}</Nav.Link>
              <Nav.Link href="#certificates">{selectedContent.certificates}</Nav.Link>
              <Nav.Link href="#experience">{selectedContent.experience}</Nav.Link>
              <Nav.Link href="#skills">{selectedContent.skills}</Nav.Link>
              <Nav.Link href="#projects">{selectedContent.projects}</Nav.Link>
              <Nav.Link href="#contact">{selectedContent.contact}</Nav.Link>
            </Nav>

            {/* زر تحميل CV */}
            <a
              href="/CV_MOHAMMED_ALYAMI.pdf" // رابط ملف CV
              target="_blank" // فتح الرابط في نافذة جديدة
              rel="noopener noreferrer"
              className="btn btn-primary ms-3" // تنسيق Bootstrap
            >
              {selectedContent.cv}
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
      <div id="home" className="dark-white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Home />
      </div>
      <div id="about" className="white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <About />
      </div>
      <div id="journey" className="dark-white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Timeline />
      </div>
      <div id="qualifications" className="white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Qualifications />
      </div>
      <div id="certificates" className="dark-white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Certificates />
      </div>
      <div id="experience" className="white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Experience />
      </div>
      <div id="skills" className="dark-white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Skills />
      </div>
      <div id="projects" className="white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Projects />
      </div>
      <div id="contact" className="dark-white-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Contact />
      </div>
    </>
  );
}

export default App;
