import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

const Home = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة

  // محتوى النصوص باللغتين
  const content = {
    en: {
      title: "Hello, I'm Mohammed Alyami",
      description: "Software Developer | Programmer | Data Analyst",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    ar: {
      title: "مرحبًا، أنا محمد اليامي",
      description: "مطور برمجيات | مبرمج | محلل بيانات",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <section
      className="home-section text-center d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://blog.umrahme.com/wp-content/uploads/2023/10/riyadh_3rd_day.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
      dir={language === 'ar' ? 'rtl' : 'ltr'} // تغيير اتجاه النص بناءً على اللغة
    >
      {/* Overlay خلفية شفافة لتحسين وضوح النص */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // شفافية 60%
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <div className="text-center mt-5">
          {/* صورة البروفايل */}
          <img
            src="/MyPicture.jpg" // مسار الصورة
            alt="Profile"
            className="rounded-circle"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover', // الحفاظ على أبعاد الصورة
              border: '5px solid #fff', // إطار أبيض حول الصورة
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // إضافة تأثير الظل
            }}
          />
          <h1 className="text-light mt-3 fw-bold">{selectedContent.title}</h1>
          <p className="text-light fs-5 mt-3 text-description">
            {selectedContent.description}
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/MohammedMahdiAlyami"
              className="btn btn-dark btn-lg me-3 hover-btn"
            >
              {selectedContent.github}
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-mahdi-alyami"
              className="btn btn-primary btn-lg hover-btn"
            >
              {selectedContent.linkedin}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
