import React, { useContext } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

const Skills = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  // محتوى النصوص باللغتين
  const content = {
    en: {
      title: "My Skills",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "Bootstrap", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 80 },
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 85 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Web Services", level: 80 },
        { name: "Web Design", level: 90 },
        { name: "Restful APIs", level: 85 },
        { name: "Data Analysis", level: 85 },
        { name: "Customer Support", level: 95 },
        { name: "Troubleshooting", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Microsoft Office", level: 100 },
      ],
    },
    ar: {
      title: "مهاراتي",
      skills: [
        { name: "HTML و CSS", level: 95 },
        { name: "Bootstrap", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 80 },
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 85 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Web Services", level: 80 },
        { name: "Web Design", level: 90 },
        { name: "Restful APIs", level: 85 },
        { name: "Data Analysis", level: 85 },
        { name: "Customer Support", level: 95 },
        { name: "Troubleshooting", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Microsoft Office", level: 100 },
      ],
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <Container className="mt-5 mb-5 skills-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="text-center">{selectedContent.title}</h2>
      <Row className="mt-4">
        {selectedContent.skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-4"> {/* إضافة مساحة بين الأعمدة */}
            <h5>{skill.name}</h5>
            <ProgressBar now={skill.level} label={`${skill.level}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
