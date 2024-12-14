import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

const Projects = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  // محتوى النصوص باللغتين
  const content = {
    en: {
      title: "My Projects",
      projects: [
        {
          title: "Parking Spot Booking System",
          description: (
            <>
              - This system is built using the Spring Boot framework with dependencies such as Spring Web, Validation, Lombok, Spring Data JPA, MySQL Driver, and Spring Security.
              <br />
              - It integrates a MySQL database and employs JPA relationships to manage data effectively.
              <br />
              - A real-time scheduling algorithm ensures efficient bookings and seamless updates, cancellations, check-ins, and check-outs.
              <br />
              - The system supports over 43 API endpoints, enabling companies to manage branches and parking spots, customers to handle accounts and bookings, and includes comprehensive testing with JUnit5.
              <br /><br />
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
          link: "https://github.com/MohammedMahdiAlyami/Human-Resources-Management-System",
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
      ],
    },
    ar: {
      title: "مشاريعي",
      projects: [
        {
          title: "نظام حجز مواقف السيارات",
          description: (
            <>
              - تم بناء هذا النظام باستخدام إطار عمل Spring Boot مع الاعتماد على Spring Web، Validation، Lombok، Spring Data JPA، MySQL Driver، وSpring Security.
              <br />
              - يتكامل مع قاعدة بيانات MySQL ويستخدم علاقات JPA لإدارة البيانات بكفاءة.
              <br />
              - يضمن خوارزمية جدولة في الوقت الفعلي حجوزات فعالة وتحديثات وإلغاءات وتسجيل دخول ومغادرة بسلاسة.
              <br />
              - يدعم النظام أكثر من 43 نقطة API، مما يتيح للشركات إدارة الفروع والمواقف، وللعملاء إدارة الحسابات والحجوزات، مع اختبارات شاملة باستخدام JUnit5.
              <br /><br />
            </>
          ),
          link: "https://github.com/MohammedAjaji/Parking",
        },
        {
          title: "نظام إدارة الموارد البشرية",
          description: (
            <>
              - تم بناء تطبيق سطح مكتب باستخدام قاعدة بيانات داخلية.
              <br />
              - يمكن النظام مديري الموارد البشرية من إضافة وتعديل وحذف الموظفين.
              <br />
              - تم استخدام Tkinter كمكتبة لبناء واجهات المستخدم باستخدام لغة Python.
              <br />
              - استخدمت قاعدة بيانات SQLite لحفظ بيانات الموظفين ومديري الموارد البشرية.
            </>
          ),
          link: "https://github.com/MohammedMahdiAlyami/Human-Resources-Management-System",
        },
        {
          title: "نظام توثيق باستخدام React و Flask",
          description: (
            <>
              - تم تطوير نظام تسجيل الدخول والتسجيل باستخدام React.js و Flask، مع استخدام قاعدة بيانات PostgreSQL لتخزين البيانات.
              <br />
              - تم تقسيم المشروع إلى مرحلتين: الأولى كانت تصميم وتنفيذ صفحة التسجيل، والثانية كانت لتسجيل الدخول وOTP.
              <br />
              - تم تطبيق تدابير أمنية مثل تشفير كلمات المرور ومنع هجمات SQL injection.
              <br />
              - تم تنفيذ مصادقة OTP بالاتصال عبر Gmail لإرسال OTP إلى البريد الإلكتروني للمستخدم.
            </>
          ),
          link: "https://loginwithemailpasswordotp.netlify.app/",
        },
      ],
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <section className="projects-section py-5 text-bg-light" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Container>
        <h2 className="text-center projects-title mb-4">{selectedContent.title}</h2>
        <Row>
          {selectedContent.projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm project-card rounded-3">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-dark project-title fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted project-description">{project.description}</Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-100 project-button"
                    >
                      {language === 'en' ? "View Project" : "عرض المشروع"}
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
