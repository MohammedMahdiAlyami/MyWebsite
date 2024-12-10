import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container className="mt-5 mb-5 skills-section">
      <h2 className="text-center">My Skills</h2>
      <Row className="mt-4">
        <Col md={6}>
          <h5>HTML & CSS</h5>
          <ProgressBar now={95} label="95%" />
        </Col>
        <Col md={6}>
          <h5>Bootstrap</h5>
          <ProgressBar now={75} label="75%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>JavaScript</h5>
          <ProgressBar now={75} label="75%" />
        </Col>
        <Col md={6}>
          <h5>React.js</h5>
          <ProgressBar now={75} label="75%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Java</h5>
          <ProgressBar now={85} label="85%" />
        </Col> 
        <Col md={6}>
          <h5>Spring Boot</h5>
          <ProgressBar now={85} label="85%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Python</h5>
          <ProgressBar now={70} label="70%" />
        </Col> 
        <Col md={6}>
          <h5>SQL</h5>
          <ProgressBar now={90} label="90%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>MySQL</h5>
          <ProgressBar now={90} label="90%" />
        </Col> 
        <Col md={6}>
          <h5>PostgreSQL</h5>
          <ProgressBar now={85} label="85%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Web Services</h5>
          <ProgressBar now={80} label="80%" />
        </Col>
        <Col md={6}>
          <h5>Web Design</h5>
          <ProgressBar now={90} label="90%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Restful APIs</h5>
          <ProgressBar now={85} label="85%" />
        </Col>
        <Col md={6}>
          <h5>Data Analysis</h5>
          <ProgressBar now={85} label="85%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Customer Support</h5>
          <ProgressBar now={95} label="95%" />
        </Col>
        <Col md={6}>
          <h5>Troubleshooting</h5>
          <ProgressBar now={85} label="85%" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Communication</h5>
          <ProgressBar now={95} label="95%" />
        </Col>
        <Col md={6}>
          <h5>Microsoft Office</h5>
          <ProgressBar now={100} label="100%" />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
