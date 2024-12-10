import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css'; // استيراد مكتبة الحركات AOS
import AOS from 'aos';

// تفعيل الحركات عند التمرير
AOS.init();

const timelineData = [
  {
    year: "2023",
    title: "Started at Alhamrani Universal",
    description: "Began my journey as a Software Developer focusing on developing ATM and KIOSK solutions.",
    icon: "💻",
  },
  {
    year: "2023",
    title: "Web Application Development Camp with Java",
    description: "Completed a 2-month (200-hour) intensive camp at Tuwaiq Academy, focusing on Java-based web application development.",
    icon: "🌐",
  },
  {
    year: "2022",
    title: "Graduated with First Honors",
    description: "Earned a Bachelor's degree in Software Engineering with a GPA of 4.84/5.",
    icon: "🎓",
  },
  {
    year: "2020",
    title: "Completed Diploma in Computer Programming",
    description: "Graduated with a diploma, specializing in software development.",
    icon: "🎓",
  },
  {
    year: "2015",
    title: "English Language Intensive Program",
    description: "Studied at the University of Bridgeport, USA, for one year, enhancing communication and technical writing skills.",
    icon: "📜",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="qualifications-section py-5 text-bg-light">
      <Container>
      <h2 className="text-center mb-4">My Journey</h2>
        <Row>
          {timelineData.map((item, index) => (
            <Col
              md={6}
              key={index}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 200} // تأخير ديناميكي بين العناصر
            >
              <div className="timeline-card p-4 shadow-sm rounded bg-light">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="timeline-icon me-3"
                    style={{
                      fontSize: "2rem",
                      backgroundColor: "#1e3c72",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "10px",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h5 className="mb-0">{item.year}</h5>
                </div>
                <h4 className="fw-bold">{item.title}</h4>
                <p className="text-muted">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Timeline;
