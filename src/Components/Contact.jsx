import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

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

  return (
    <div className="container mt-5 contact-section">
  <h2 className="text-center contact-title">Contact Me</h2>
  <form
    action="mailto:Ghib34@gmail.com" // بريدك الإلكتروني
    method="post" 
    encType="text/plain" // نوع الترميز
    className="contact-form mt-4"
  >
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="text" name="name" className="form-control" required />
    </div>
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input type="email" name="email" className="form-control" required />
    </div>
    <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea name="message" className="form-control" rows="3" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">
      Send
    </button>
  </form>
  </div>
  );
};

export default Contact;
