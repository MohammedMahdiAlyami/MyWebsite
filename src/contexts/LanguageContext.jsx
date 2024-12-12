// src/contexts/LanguageContext.jsx

import React, { createContext, useState } from 'react';

// إنشاء السياق
export const LanguageContext = createContext();

// مزود اللغة (LanguageProvider) الذي سيغلف التطبيق
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // اللغة الافتراضية هي الإنجليزية

  // دالة لتغيير اللغة بين الإنجليزية والعربية
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
