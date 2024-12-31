import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق

const Contact = () => {
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  const content = {
    en: {
      title: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Message",
      sendButton: "Send",
    },
    ar: {
      title: "اتصل بي",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      sendButton: "إرسال",
    },
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  const handleSend = (e) => {
    e.preventDefault();

    // جلب القيم من الحقول
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // إنشاء رابط mailto مع البيانات المرسلة
    const mailtoLink = `mailto:ghib34@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink; // فتح رابط mailto
  };

  return (
    <div className="container mt-5 contact-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="text-center contact-title">{selectedContent.title}</h2>
      <form
        className="contact-form mt-4"
        onSubmit={handleSend} // استدعاء دالة الإرسال
      >
        <div className="mb-3">
          <label className="form-label">{selectedContent.name}</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">{selectedContent.email}</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">{selectedContent.message}</label>
          <textarea name="message" className="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {selectedContent.sendButton}
        </button>
      </form>
    </div>
  );
};

export default Contact;
