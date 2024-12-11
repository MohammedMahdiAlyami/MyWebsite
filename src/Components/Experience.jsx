import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
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
    // {
    //   title: "Web Application Development Camp at Tuwaiq Academy",
    //   period: "04/2023 - 06/2023",
    //   description: (
    //     <>
    //       - Completed an intensive web development camp with Java for two months (~200 hours).
    //       <br />
    //       - Focused on Java-based web application development using the Spring Boot framework, including backend integration.
    //     </>
    //   ),
    // },
    // {
    //   title: "English Language Intensive Program",
    //   period: "01/2015 - 12/2015",
    //   description: (
    //     <>
    //       - Studied English Language intensively at the University of Bridgeport in the USA for one year.
    //       <br />
    //       - Enhanced communication and technical writing skills in a professional environment.
    //     </>
    //   ),
    // },
  ];

  return (
    <section id="experience" className="experience-section py-5 text-bg-light">
      <Container>
        <h2 className="text-center mb-4">My Professional Experience</h2>
        <Row className="justify-content-center">
          {experiences.map((exp, index) => (
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
