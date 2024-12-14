import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق لاختيار اللغة

const Certificates = () => {
  const { language } = useContext(LanguageContext); // الحصول على اللغة الحالية من السياق

  // بيانات الشهادات مع إضافة فترة الحصول عليها
  const certificates = [
    {
      title: {
        en: "Dynamic and Interactive Website Building and Development Using React Js",
        ar: " بناء وتطوير المواقع الديناميكية والتفاعلية باستخدام React Js"
      },
      period: {
        en: "12/2024",
        ar: "12/2024"
      },
      description: {
        en: "Completed the Dynamic and Interactive Website Building and Development Program Using React Js program from Tuwaiq Academy.",
        ar: "أكملت برنامج بناء وتطوير المواقع الديناميكية والتفاعلية باستخدام React Js من أكاديمية طويق."
      },
      hours: {
        en: " 45 hours",
        ar: " 45 ساعة"
      },
    },
    {
      title: {
        en: "Large Language Models Practitioner",
        ar: "ممارس النماذج اللغوية الكبيرة"
      },
      period: {
        en: "01/2024",
        ar: "01/2024"
      },
      description: {
        en: "Completed the Large Language Models Practitioner Certificate from SDAIA.",
        ar: "أكملت شهادة ممارس النماذج اللغوية الكبيرة LLMs من سدايا."
      },
      hours: {
        en: " 40 hours",
        ar: " 40 ساعة"
      },
    },
    {
      title: {
        en: "Web Development Bootcamp using Java Language",
        ar: "معسكر تطوير مواقع الويب باستخدام لغة Java"
      },
      period: {
        en: "06/2023",
        ar: "06/2023"
      },
      description: {
        en: "Completed the Web Development Bootcamp using Java Language from Tuwaiq Academy.",
        ar: "أكملت معسكر تطوير مواقع الويب باستخدام لغة Java من أكاديمية طويق."
      },
      hours: {
        en: " 200 hours",
        ar: " 200 ساعة"
      },
    },
    {
      title: {
        en: "Web Design using No-Code methodology",
        ar: "تصميم المواقع باستخدام منهجية No-Code"
      },
      period: {
        en: "02/2023",
        ar: "02/2023"
      },
      description: {
        en: "Completed the Web Design using No-Code methodology program from Tuwaiq Academy.",
        ar: "أكملت برنامج تصميم المواقع باستخدام منهجية No-Code من أكاديمية طويق."
      },
      hours: {
        en: " 24 hours",
        ar: " 24 ساعة"
      },
    },
    {
      title: {
        en: "Programming using Python language",
        ar: "البرمجة باستخدام لغة بايثون Python"
      },
      period: {
        en: "2022",
        ar: "2022"
      },
      description: {
        en: "Completed the Programming Using Python program from Technical and Vocational Training Corporation.",
        ar: "أكملت برنامج البرمجة باستخدام لغة بايثون Python من المؤسسة العامة للتدريب التقني والمهني."
      },
      hours: {
        en: " 20 hours",
        ar: " 20 ساعة"
      },
    },
    {
      title: {
        en: "Database Basics",
        ar: "أساسيات قواعد البيانات"
      },
      period: {
        en: "2022",
        ar: "2022"
      },
      description: {
        en: "Completed the Database Basics program from Technical and Vocational Training Corporation.",
        ar: "أكملت برنامج أساسيات قواعد البيانات من المؤسسة العامة للتدريب التقني والمهني."
      },
      hours: {
        en: " 20 hours",
        ar: " 20 ساعة"
      },
    },
    {
      title: {
        en: "Cloud Services Basics",
        ar: "أساسيات الخدمات السحابية"
      },
      period: {
        en: "2022",
        ar: "2022"
      },
      description: {
        en: "Completed the Cloud Services Basics program from Technical and Vocational Training Corporation.",
        ar: "أكملت برنامج أساسيات الخدمات السحابية من المؤسسة العامة للتدريب التقني والمهني."
      },
      hours: {
        en: " 20 hours",
        ar: " 20 ساعة"
      },
    },
    {
      title: {
        en: "Cyber Security",
        ar: "الأمن السيبراني"
      },
      period: {
        en: "2021",
        ar: "2021"
      },
      description: {
        en: "Completed the Cyber Security program from Saudi American Institute.",
        ar: "أكملت برنامج الأمن السيبراني من المعهد السعودي الأمريكي."
      },
      hours: {
        en: " 9 hours",
        ar: " 9 ساعات"
      },
    },
    {
      title: {
        en: "My SQL",
        ar: "My SQL"
      },
      period: {
        en: "2019",
        ar: "2019"
      },
      description: {
        en: "Completed the My SQL program from Ministry of Communications and Information Technology.",
        ar: "أكملت برنامج My SQL من وزارة الاتصالات وتقنية المعلومات."
      },
      hours: {
        en: " 20 hours",
        ar: " 20 ساعة"
      },
    },
  ];

  return (
    <Container className="certificates-section py-5" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="text-center certificates-title mb-4">
        {language === 'en' ? 'My Courses and Certificates' : 'دوراتي وشهاداتي'}
      </h2>
      <Row className="gy-4 d-flex align-items-stretch">
        {certificates.map((certificate, index) => (
          <Col md={4} key={index}>
            <Card className="certificate-card h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title>{language === 'en' ? certificate.title.en : certificate.title.ar}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {language === 'en' ? certificate.period.en : certificate.period.ar}
                </Card.Subtitle>
                <Card.Text>
                  {language === 'en' ? certificate.description.en : certificate.description.ar}
                </Card.Text>
                <Card.Text>
                  <strong>{language === 'en' ? 'Duration:' : 'المدة:'}</strong> 
                  {language === 'en' ? certificate.hours.en : certificate.hours.ar}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificates;
