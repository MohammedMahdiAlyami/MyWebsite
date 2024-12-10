import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  // بيانات الشهادات مع إضافة فترة الحصول عليها
  const certificates = [
    {
      title: "Dynamic and Interactive Website Development Program Using React Js",
      period: "12/2024",
      description: "Completed the Dynamic and Interactive Website Development Program Using React Js program from Tuwaiq Academy.",
      hours: "30 hours",
    },
    {
      title: "Large Language Models Practitioner",
      period: "01/2024",
      description: "Completed the Large Language Models Practitioner Certificate from SDAIA.",
      hours: "40 hours",
    },
    {
      title: "Web Application Development Camp with Java",
      period: "06/2023",
      description: "Completed the Web Application Development Camp with Java from Tuwaiq Academy.",
      hours: "200 hours",
    },
    {
      title: "Web Design with No-Code methodology",
      period: "02/2023",
      description: "Completed the Web Design with No-Code methodology program from Tuwaiq Academy.",
      hours: "24 hours",
    },
    {
      title: "Programming Using Python",
      period: "2022",
      description: "Completed the Programming Using Python program from Technical and Vocational Training Corporation.",
      hours: "20 hours",
    },
    {
      title: "Database Basics",
      period: "2022",
      description: "Completed the Database Basics program from Technical and Vocational Training Corporation.",
      hours: "20 hours",
    },
    {
      title: "Cloud Services Basics",
      period: "2022",
      description: "Completed the Cloud Services Basics program from Technical and Vocational Training Corporation.",
      hours: "20 hours",
    },
    {
      title: "Cyber Security",
      period: "2021",
      description: "Completed the Cyber Security program from Saudi American Institute.",
      hours: "9 hours",
    },
    {
      title: "My SQL",
      period: "2019",
      description: "Completed the My SQL program from Ministry of Communications and Information Technology.",
      hours: "40 hours", 
    },
  ];

  return (
    <Container className="certificates-section py-5">
      <h2 className="text-center certificates-title mb-4">My Certificates</h2>
      <Row className="gy-4 d-flex align-items-stretch">
        {certificates.map((certificate, index) => (
          <Col md={4} key={index}>
            <Card className="certificate-card h-100">
              <Card.Body>
                <Card.Title>{certificate.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{certificate.period}</Card.Subtitle> {/* عرض فترة الشهادة */}
                <Card.Text>{certificate.description}</Card.Text>
                <Card.Text><strong>Duration:</strong> {certificate.hours}</Card.Text> {/* عرض الساعات */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificates;
