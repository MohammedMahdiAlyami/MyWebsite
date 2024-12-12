import React, { useRef, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext'; // استيراد السياق
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const { language } = useContext(LanguageContext); // استخدام السياق للحصول على اللغة الحالية

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_riqowg9', // Service ID
        'template_xxx', // استخدم Template ID الخاص بك من EmailJS
        form.current,
        'your_user_id' // ضع الـ User ID الخاص بك من EmailJS
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.error('Error:', error); // طباعة الخطأ في الـ Console
          alert('Failed to send message, please try again.');
        }
      );
  };

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
    }
  };

  const selectedContent = content[language]; // اختيار المحتوى بناءً على اللغة

  return (
    <div className="container mt-5 contact-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="text-center contact-title">{selectedContent.title}</h2>
      <form
        action="mailto:ghib34@gmail.com" // بريدك الإلكتروني
        method="post"
        encType="text/plain" // نوع الترميز
        className="contact-form mt-4"
        ref={form}
        onSubmit={sendEmail}
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
