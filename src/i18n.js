import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import heb from './assets/locales/heb.json';
import ar from './assets/locales/ar.json';

// Use localStorage for web
const LANGUAGE_KEY = 'appLanguage';

// Initialize i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    heb: { translation: heb },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

// Function to change the language and save to localStorage
export const changeLanguage = (language) => {
  localStorage.setItem(LANGUAGE_KEY, language); // Save language to localStorage
  i18n.changeLanguage(language); // Change i18n language
};

// Function to load the saved language from localStorage
export const loadLanguage = () => {
  const language = localStorage.getItem(LANGUAGE_KEY); // Get saved language from localStorage
  if (language) {
    i18n.changeLanguage(language); // Change i18n language
  }
};

// Function to get the current language
export const getCurrentLanguage = () => {
  return i18n.language;
};

export default i18n;