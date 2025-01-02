import React, { useEffect, useState } from 'react';
import * as S from './styleHeader'; // Import your styled components
import Header from '../header';
import sewar from '../../../assets/images/SewarImage.jpg'; // Ensure the image path is correct
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const [aboutMeText, setAboutMeText] = useState('');
  const [myVisionText, setMyVisionText] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch the user from localStorage (replaces AsyncStorage for web)
        const user = localStorage.getItem('user');
        if (user) {
          const parsedUser = JSON.parse(user);
          if (i18n.language === 'ar') {
            setAboutMeText(parsedUser.aboutMeAr);
            setMyVisionText(parsedUser.myVisionAr);
          } else if (i18n.language === 'en') {
            setAboutMeText(parsedUser.aboutMeEn);
            setMyVisionText(parsedUser.myVisionEn);
          } else if (i18n.language === 'heb') {
            setAboutMeText(parsedUser.aboutMeHe);
            setMyVisionText(parsedUser.myVisionHe);
          }
        }
      } catch (error) {
        console.error('Failed to fetch user from storage:', error);
      }
    };

    fetchUser();
  }, [i18n.language]); // Add `i18n.language` as a dependency to refetch data on language change

  return (
    <S.PageContainer>
      <Header />
      <S.AboutUsContainer>
        <S.ContentContainer>
          <S.ProfileImage src={sewar} alt="Profile Image" />
          <S.TextSection>
            <S.SectionTitle>{t('about_me_title')}</S.SectionTitle>
            <S.DescriptionText>{aboutMeText}</S.DescriptionText>
            <S.SectionTitle>{t('my_vision_title')}</S.SectionTitle>
            <S.DescriptionText>{myVisionText}</S.DescriptionText>
          </S.TextSection>
        </S.ContentContainer>
      </S.AboutUsContainer>
    </S.PageContainer>
  );
};

export default AboutUs;