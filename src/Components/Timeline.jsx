import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css'; // استيراد مكتبة الحركات AOS
import AOS from 'aos';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

// تفعيل الحركات عند التمرير
AOS.init();

const timelineData = {
  en: [
    {
      year: "2023",
      title: "Started my journey as a Software Developer",
      description: "Began my journey as a Software Developer at Alhamrani Universal, focusing on developing ATM and KIOSK solutions for banks.",
      icon: "💻",
    },
    {
      year: "2023",
      title: "Web Development Bootcamp using Java Language",
      description: "Completed a 2-month (200-hour) intensive bootcamp at Tuwaiq Academy, focusing on web application development using the Spring Boot framework.",
      icon: "🌐",
    },
    {
      year: "2022",
      title: "Completed Bachelor's degree in Software Engineering with First Honors",
      description: "Earned a Bachelor's degree in Software Engineering with a GPA of 4.84/5.",
      icon: "🎓",
    },
    {
      year: "2020",
      title: "Completed Diploma in Computer Programming",
      description: "Graduated with a diploma in Software Development.",
      icon: "🎓",
    },
    {
      year: "2015",
      title: "English Language Intensive Program",
      description: "Studied at the University of Bridgeport, USA, for one year, enhancing communication and technical writing skills.",
      icon: "📜",
    },
  ],
  ar: [
    {
      year: " 2023",
      title: "بدأت رحلتي كمطور برمجيات",
      description: "بدأت رحلتي كمطور برمجيات في شركة الحمراني العالمية، مع التركيز على تطوير حلول أجهزة الصراف الآلي وأجهزة الخدمة الذاتية للبنوك.",
      icon: "💻",
    },
    {
      year: " 2023",
      title: "معسكر تطوير مواقع الويب باستخدام لغة Java",
      description: "أكملت دورة مكثفة لمدة شهرين (200 ساعة) في أكاديمية توايق، مع التركيز على تطوير التطبيقات باستخدام Java.",
      icon: "🌐",
    },
    {
      year: " 2022",
      title: "تخرجت بدرجة البكالوريوس مع مرتبة الشرف الأولى",
      description: "حصلت على درجة البكالوريوس في هندسة البرمجيات بمعدل تراكمي 4.84/5.",
      icon: "🎓",
    },
    {
      year: " 2020",
      title: "أكملت دبلوم في برمجيات الحاسب",
      description: "تخرجت بشهادة دبلوم في تطوير البرمجيات.",
      icon: "🎓",
    },
    {
      year: " 2015",
      title: "برنامج مكثف في اللغة الإنجليزية",
      description: "درست في جامعة بريدجبورت في الولايات المتحدة لمدة عام، مع تعزيز مهارات الاتصال وكتابة التقنية.",
      icon: "📜",
    },
  ],
};

const Timeline = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  // اختيار البيانات بناءً على اللغة
  const selectedTimelineData = timelineData[language];

  return (
    <section id="timeline" className="qualifications-section py-5 text-bg-light" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Container>
        <h2 className="text-center mb-4">{language === 'ar' ? 'رحلتي' : 'My Journey'}</h2>
        <Row>
          {selectedTimelineData.map((item, index) => (
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
