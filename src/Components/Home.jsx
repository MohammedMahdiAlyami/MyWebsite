import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section
      className="home-section text-center d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundImage:
        'url(https://blog.umrahme.com/wp-content/uploads/2023/10/riyadh_3rd_day.jpg)',
        // 'url(https://blog.umrahme.com/wp-content/uploads/2023/09/attraction1-7.jpg)',
        // 'url(https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR6V4qSEiDtdtOe5cqzIJAbC78-nQGHcyUz3Gcj1c2B4y_nhcs2QRWS1xdMzo-Ia3rbrGFl1mCl36ubfazwRZOCuqL3tV3o5L93X-bLnA)',
          // 'url(https://www.jotform.com/blog/wp-content/uploads/2022/02/matt-nelson-dCNGrp_0GyM-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay خلفية شفافة لتحسين وضوح النص */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // شفافية 60%
          zIndex: 1,
        }}
      ></div>

<Container style={{ position: 'relative', zIndex: 2 }}>
  <div className="text-center mt-5">
    {/* صورة البروفايل */}
    <img
      src="/MyPicture.jpg"  // مسار الصورة
      alt="Profile"
      className="rounded-circle"
      style={{
        width: '150px',
        height: '150px',
        objectFit: 'cover', // الحفاظ على أبعاد الصورة
        border: '5px solid #fff',  // إطار أبيض حول الصورة
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',  // إضافة تأثير الظل
      }}
          />
          <h1 className="text-light mt-3 fw-bold">Hello, I'm Mohammed Alyami</h1>
          <p className="text-light fs-5 mt-3 text-description">
            Software Developer | Programmer | Data Analyst
            </p>
            <div className="mt-4">
              <a
              href="https://github.com/MohammedMahdiAlyami"
              className="btn btn-dark btn-lg me-3 hover-btn"
              >
                GitHub
                </a>
                <a
                href="https://www.linkedin.com/in/mohammed-mahdi-alyami"
                className="btn btn-primary btn-lg hover-btn"
                >
                  LinkedIn
                  </a>
                  </div>
                  </div>
                  </Container>
                  </section>
                  );
                };

export default Home;
