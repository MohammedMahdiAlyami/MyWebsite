import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "Parking Spot Booking Website",
      description: (
        <>
          - The backend APIs for the 'ParKing' parking spot booking website provide a set of functionalities to manage various aspects of the system.
          <br />
          - These APIs, developed using Java and the Spring Boot framework, allow users to register and authenticate as either a company or a customer.
        </>
      ),
      link: "https://github.com/MohammedAjaji/Parking",
    },
    {
      title: "Human Resources Management System",
      description: (
        <>
          - Made a desktop app with an internal database.
          <br />
          - Enabled Human Resources Managers to add employees, edit existing employees, and delete them.
          <br />
          - Used Tkinter GUI toolkit, which uses Python language as a base language.
          <br />
          - Used SQLite as an internal database to save Human Resources Managers and employees' data.
        </>
      ),
      link: "#",
    },
    {
      title: "React-Flask Authentication System",
      description: (
        <>
          - Developed a sign-up and sign-in system with React.js and Flask, using a PostgreSQL database for data storage.
          <br />
          - Split the project into two sprints: the first focusing on sign-up page design and implementation, and the second on sign-in and OTP authentication.
          <br />
          - Emphasized security measures such as password hashing and prevention of SQL injection.
          <br />
          - Implemented OTP authentication by connecting with Gmail to send the OTP to the user's email address.
        </>
      ),
      link: "https://loginwithemailpasswordotp.netlify.app/",
    },
  ];

  return (
    <section className="projects-section py-5 text-bg-light">
      <Container>
        <h2 className="text-center projects-title mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm d-flex flex-column project-card">
                <Card.Body className="d-flex flex-column">
                  <div>
                    <Card.Title className="text-dark project-title">{project.title}</Card.Title>
                    <Card.Text className="text-muted project-description">{project.description}</Card.Text>
                  </div>
                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-100 project-button"
                    >
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
