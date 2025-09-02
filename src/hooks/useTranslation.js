import { useState, useEffect } from 'react';
import { translations } from '../translations';

export const useTranslation = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'sq');

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('language'));
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  const t = (key) => translations[language][key] || key;

  return { t, language };
};
