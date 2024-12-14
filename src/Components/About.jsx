import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

const About = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  const content = {
    en: {
      title: "About Me",
      intro: "My name is Mohammed Alyami. I hold a Bachelor's Degree in Software Engineering, specializing in Computer Programming, with a G.P.A of 4.84 out of 5 (Excellent), and I graduated with a First Honor Degree from Technical and Vocational Training Corporation. Additionally, I earned a Diploma in Computer Programming from the same college.",
      englishProgram: "I also completed an intensive English Language program at the University of Bridgeport in the USA, where I studied for one year. Moreover, I participated in the Web Application Development Camp with Java at Tuwaiq Academy, completing about 200 hours over two months.",
      skills: "My technical expertise includes programming languages such as HTML, CSS, JavaScript, Java, Python and C#, along with database management skills in SQL, MySQL, and PostgreSQL. Additionally, I am proficient in web design and development.",
      currentWork: "Currently, I work as a Software Developer at Alhamrani Universal, serving as a Professional Services Engineer. My role involves developing software solutions for kiosks, ATMs, tellers, and middleware systems for banks and other financial institutions.",
      responsibilities: [
        // "Developing software solutions for ATMs and KIOSKs to ensure high performance and reliability.",
        // "Gathering customer requirements to create tailored software solutions that meet specific needs.",
        // "Integrating and testing end-to-end software solutions for seamless operations and customer satisfaction.",
        // "Utilizing technologies such as HTML, CSS, JavaScript, and Java for front-end and back-end development.",
      ],
      button: "Download My CV",
    },
    ar: {
      title: "نبذة عنّي",
      intro: "اسمي محمد اليامي. حاصل على شهادة البكالوريوس في هندسة البرمجيات، تخصص في برمجيات الحاسب، بمعدل 4.84 من 5 (ممتاز)، وقد تخرجت بدرجة الشرف الأولى من المؤسسة العامة للتدريب التقني والمهني. بالإضافة إلى ذلك، حصلت على دبلوم في برمجيات الحاسب من نفس الكلية.",
      englishProgram: "كما أكملت برنامجًا مكثفًا لتعلم اللغة الإنجليزية في جامعة بريدجبورت بالولايات المتحدة الأمريكية، حيث درست لمدة عام. علاوة على ذلك، شاركت في معسكر تطوير تطبيقات الويب باستخدام Java في أكاديمية طويق، وأكملت حوالي 200 ساعة خلال شهرين.",
      skills: "تشمل خبراتي التقنية لغات البرمجة مثل HTML وCSS وJavaScript وJava وPython وC#، بالإضافة إلى مهارات إدارة قواعد البيانات في SQL وMySQL وPostgreSQL. بالإضافة إلى ذلك، أنا ماهر في تصميم وتطوير الويب.",
      currentWork: "حاليًا، أعمل كمطور برمجيات في شركة الحمراني العالمية، وأشغل منصب مهندس خدمات احترافية. تتضمن مهامي تطوير حلول برمجية لأجهزة الخدمة الذاتية، والصرافات الآلية، وأجهزة الصرافين، وأنظمة الوسيط للبنوك والمؤسسات المالية المختلفة.",
      responsibilities: [
        // "تطوير حلول برمجية لـ ATMs وKIOSKs لضمان الأداء العالي والموثوقية.",
        // "جمع متطلبات العملاء لإنشاء حلول برمجية مخصصة تلبي الاحتياجات المحددة.",
        // "دمج واختبار حلول البرمجيات من البداية إلى النهاية لضمان التشغيل السلس ورضا العملاء.",
        // "استخدام تقنيات مثل HTML وCSS وJavaScript وJava لتطوير الواجهات الأمامية والخلفية.",
      ],
      button: "تحميل السيرة الذاتية",
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <section id="about" className="about-section" dir={language === "ar" ? "rtl" : "ltr"}>
      <Container>
        {/* العنوان */}
        <h2 className="text-center about-title mb-4">{selectedContent.title}</h2>

        {/* النصوص */}
        <div className="text-center">
          <p className="fs-5">{selectedContent.intro}</p>
          <p className="fs-5">{selectedContent.englishProgram}</p>
          <p className="fs-5">{selectedContent.skills}</p>
          <p className="fs-5">{selectedContent.currentWork}</p>
          
          {/* القوائم (UL) */}
          <ul className="text-start mx-auto" style={{ maxWidth: "800px", textAlign: language === "ar" ? "right" : "left" }}>
            {selectedContent.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
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
              {selectedContent.button}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
