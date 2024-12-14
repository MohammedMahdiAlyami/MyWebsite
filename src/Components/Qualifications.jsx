import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

const Qualifications = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  // محتوى النصوص باللغتين
  const content = {
    en: {
      title: "My Qualifications",
      qualifications: [
        {
          title: "Bachelor's Degree of Software Engineering",
          period: "Graduated: 11/2022",
          description: "Graduated with a Bachelor's Degree in Computer Programming with First Honors from the Technical and Vocational Training Corporation. GPA: 4.84 out of 5.00.",
        },
        {
          title: "Diploma in Computer Programming",
          period: "Graduated: 05/2020",
          description: "Graduated with a Diploma in Computer Programming from Technical and Vocational Training Corporation.",
        },
        {
          title: "English Language Intensive Program",
          period: "01/2015 - 12/2015",
          description: "Studied an intensive English language program at the University of Bridgeport, USA, for one year.",
        },
      ],
    },
    ar: {
      title: "مؤهلاتي",
      qualifications: [
        {
          title: "بكالوريوس في هندسة البرمجيات",
          period: "تخرجت في: 11/2022",
          description: "تخرجت بشهادة بكالوريوس في برمجيات الحاسب مع مرتبة الشرف الأولى من المؤسسة العامة للتدريب التقني والمهني. المعدل التراكمي: 4.84 من 5.00.",
        },
        {
          title: "دبلوم في برمجيات الحاسب",
          period: "تخرجت في: 05/2020",
          description: "تخرجت بشهادة دبلوم في برمجيات الحاسب من المؤسسة العامة للتدريب التقني والمهني.",
        },
        {
          title: "برنامج مكثف في تعلم اللغة الإنجليزية",
          period: "01/2015 - 12/2015",
          description: "درست برنامج مكثف لتعلم اللغة الإنجليزية في جامعة بريدجبورت في الولايات المتحدة الأمريكية لمدة عام.",
        },
      ],
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <section id="qualifications" className="qualifications-section py-5 text-bg-light" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Container>
        <h2 className="text-center mb-4">{selectedContent.title}</h2>
        <Row>
          {selectedContent.qualifications.map((qual, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="qualification-card h-100 shadow-lg border-0 rounded-3 p-4 hover-effect">
                <Card.Body>
                  <Card.Title className="qualification-title">{qual.title}</Card.Title>
                  <Card.Subtitle className="mb-2 qualification-period text-muted">{qual.period}</Card.Subtitle>
                  <Card.Text className="qualification-description">{qual.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Qualifications;
