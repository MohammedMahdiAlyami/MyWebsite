import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Qualifications = () => {
  const qualifications = [
    {
      title: "Bachelor's Degree of Software Engineering in Computer Programming",
      period: "Graduated: 11/2022",
      description: `
        Graduated with honors from Technical and Vocational Training Corporation.
        GPA: 4.84 out of 5.00.
      `,
    },
    {
      title: "Diploma in Computer Programming",
      period: "Graduated: 05/2020",
      description: `
        Graduated from Technical and Vocational Training Corporation.
      `,
    },
    {
      title: "English Language Intensive Program",
      period: "01/2015 - 12/2015",
      description: `
        Studied an intensive English language program at the University of Bridgeport, USA, for one year.
      `,
    },
  ];

  return (
    <section id="qualifications" className="qualifications-section py-5 text-bg-light">
      <Container>
        <h2 className="text-center mb-4">My Qualifications</h2>
        <Row>
          {qualifications.map((qual, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm qualification-card hover-effect">
                <Card.Body>
                  <Card.Title className="qualification-title">{qual.title}</Card.Title>
                  <Card.Subtitle className="mb-2 qualification-period">{qual.period}</Card.Subtitle>
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
