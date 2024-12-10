import React from 'react';
import { Container, Button } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        {/* العنوان */}
        <h2 className="text-center about-title mb-4">About Me</h2>

        {/* النصوص */}
        <div className="text-center">
          <p className="fs-5">
            My name is <strong>Mohammed Alyami</strong>. I hold a <strong>Bachelor's Degree in Software Engineering</strong>, specializing in Computer Programming, 
            with a G.P.A of <strong>4.84 out of 5</strong> (Excellent), and I graduated with a <strong>First Honor Degree</strong> from Technical and Vocational Training
            Corporation. Additionally, I earned a <strong>Diploma in Computer Programming</strong> from the same college.
          </p>
          <p className="fs-5">
            I also completed an intensive <strong>English Language program</strong> at the University of Bridgeport in the USA, where I studied for one year. 
            Moreover, I participated in the <strong>Web Application Development Camp with Java</strong> at Tuwaiq Academy, completing about 200 hours over two months.
          </p>
          <p className="fs-5">
            My technical expertise includes programming languages like <strong>HTML, CSS, JavaScript, Java, and Python</strong>, along with database management skills in  
            <strong> SQL, MySQL, and PostgreSQL</strong>. I am also skilled in web design and development.
          </p>
          <p className="fs-5">
            Currently, I work as a <strong>Software Developer</strong> at <strong>Alhamrani Universal</strong>, where I serve as a <strong>Professional Services Engineer</strong>. 
            My role focuses on developing software solutions for KIOSKs, ATMs, tellers, and middleware systems for various financial institutions.
          </p>
          <ul className="text-start mx-auto" style={{ maxWidth: '800px' }}>
            <li>Developing software solutions for ATMs and KIOSKs to ensure high performance and reliability.</li>
            <li>Gathering customer requirements to create tailored software solutions that meet specific needs.</li>
            <li>Integrating and testing end-to-end software solutions for seamless operations and customer satisfaction.</li>
            <li>Utilizing technologies such as HTML, CSS, JavaScript, and Java for front-end and back-end development.</li>
          </ul>

          {/* زر تحميل CV */}
          <div className="mt-4 text-center">
            <Button
            variant="success"
            href="/CV_MOHAMMED_ALYAMI.pdf" // اسم ملف PDF داخل مجلد public
            target="_blank" // يفتح الرابط في نافذة جديدة
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-3 shadow-lg border-0"
            style={{
              fontSize: "1.2rem", // تكبير حجم الخط لجعل الزر أكثر وضوحًا
              transition: "all 0.3s ease", // تأثير الانتقال للهوفر
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)"; // تأثير تكبير الزر عند المرور عليه
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // إعادة الزر لحجمه الطبيعي
            }}
            >
              Download My CV
              </Button>
              </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
