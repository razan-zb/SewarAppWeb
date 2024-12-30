import React, { useState, useEffect } from 'react';
import { I18nManager, Platform, Alert } from 'react-native';
import { changeLanguage, getCurrentLanguage } from './i18n'; // Ensure this handles i18n logic.

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  // Fetch current language on load
  useEffect(() => {
    const fetchCurrentLanguage = () => {
      const currentLanguage = 
        Platform.OS === 'web' 
          ? localStorage.getItem('appLanguage') 
          : getCurrentLanguage();

      setSelectedLanguage(currentLanguage || 'en');
      const isRTL = currentLanguage === 'ar' || currentLanguage === 'heb';
      I18nManager.forceRTL(isRTL);
    };

    fetchCurrentLanguage();
  }, []);

  const handleLanguageChange = async (language) => {
    setSelectedLanguage(language);

    if (Platform.OS === 'web') {
      localStorage.setItem('appLanguage', language);
    }

    changeLanguage(language);

    const isRTL = language === 'ar' || language === 'heb';
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);

      // Prompt user to restart the app/page for text direction changes
      if (Platform.OS === 'web') {
        alert('Please refresh the page to apply the language direction change.');
      } else {
        Alert.alert('Restart Required', 'Please restart the app to apply the language direction change.');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <select
        id="language-selector"
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        style={{
          fontSize: '16px',
          padding: '10px',
          border: '2px solid #73224B',
          borderRadius: '4px',
          color: '#73224B',
          width: '200px',
          textAlign: 'center',
          outline: 'none',
          cursor: 'pointer',
        }}
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
        <option value="heb">עברית</option>
      </select>
    </div>
  );
};

export default LanguageSelector;