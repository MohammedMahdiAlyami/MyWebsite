import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

const Experience = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  const content = {
    en: {
      title: "My Professional Experience",
      experiences: [
        {
          title: "Software Developer at Alhamrani Universal",
          period: "07/2023 - Present",
          description: (
            <>
              - Develop software solutions for ATMs and KIOSKs, ensuring high performance and reliability.
              <br />
              - Gather customer requirements to tailor software solutions that meet specific needs.
              <br />
              - Integrate and test end-to-end software solutions to ensure seamless operation and customer satisfaction.
              <br />
              - Utilize technologies including HTML, CSS, JavaScript, C# and Java for front-end and back-end development.
            </>
          ),
        },
      ],
    },
    ar: {
      title: "خبراتي المهنية",
      experiences: [
        {
          title: "مطور برمجيات في شركة الحمراني العالمية",
          period: "07/2023 - الآن",
          description: (
            <>
              - تطوير حلول برمجية لـ ATMs و KIOSKs لضمان الأداء العالي والموثوقية.
              <br />
              - جمع متطلبات العملاء لإنشاء حلول برمجية مخصصة تلبي الاحتياجات المحددة.
              <br />
              - دمج واختبار حلول البرمجيات من البداية إلى النهاية لضمان التشغيل السلس ورضا العملاء.
              <br />
              - استخدام تقنيات مثل HTML و CSS و JavaScript و C# و Java لتطوير الواجهات الأمامية والخلفية.
            </>
          ),
        },
      ],
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <section
      id="experience"
      className="experience-section py-5 text-bg-light"
      dir={language === 'ar' ? 'rtl' : 'ltr'} // ضبط اتجاه النصوص حسب اللغة
    >
      <Container>
        <h2 className="text-center mb-4">{selectedContent.title}</h2>
        <Row className="justify-content-center">
          {selectedContent.experiences.map((exp, index) => (
            <Col md={8} lg={6} key={index}>
              <Card className="h-100 experience-card">
                <Card.Body>
                  <Card.Title className="experience-title">{exp.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted experience-period">{exp.period}</Card.Subtitle>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
