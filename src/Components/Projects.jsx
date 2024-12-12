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
      ],
    },
    ar: {
      title: "مشاريعي",
      projects: [
        {
          title: "موقع حجز مواقف السيارات",
          description: (
            <>
              - واجهات برمجة التطبيقات (APIs) الخلفية لموقع "مواقف سيارات" توفر مجموعة من الوظائف لإدارة جوانب مختلفة من النظام.
              <br />
              - تتيح هذه الواجهات للمستخدمين التسجيل والتوثيق سواء كانوا شركات أو عملاء، وتم تطويرها باستخدام Java وSpring Boot.
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
          link: "#",
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
