import React, { useEffect, useState } from 'react';
import * as S from '../styleEditingCard4';
import Header from './header';
import sewar from '../../../../assets/images/SewarImage.jpg';
import { useTranslation } from 'react-i18next';
import { fetchUpdateUser } from '../../../../helpers/api';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const [userLog, setUserLog] = useState(null);

  // State variables for editable text
  const [aboutMeText, setAboutMeText] = useState('');
  const [myVisionText, setMyVisionText] = useState('');

  // State to toggle between edit and view mode
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    try {
      const updatedUser = {
        ...userLog,
        aboutMeEn: userLog.aboutMeEn,
        aboutMeAr: userLog.aboutMeAr,
        aboutMeHe: userLog.aboutMeHe,
        myVisionEn: userLog.myVisionEn,
        myVisionAr: userLog.myVisionAr,
        myVisionHe: userLog.myVisionHe,
      };

      if (i18n.language === 'ar') {
        updatedUser.aboutMeAr = aboutMeText;
        updatedUser.myVisionAr = myVisionText;
      } else if (i18n.language === 'en') {
        updatedUser.aboutMeEn = aboutMeText;
        updatedUser.myVisionEn = myVisionText;
      } else if (i18n.language === 'heb') {
        updatedUser.aboutMeHe = aboutMeText;
        updatedUser.myVisionHe = myVisionText;
      }

      const result = await fetchUpdateUser(userLog.email, updatedUser);
      if (result.message === 'User updated successfully') {
        alert(t('update_success'));
        setIsEditing(false);
        localStorage.setItem('user', JSON.stringify(updatedUser)); // Update localStorage
        setUserLog(updatedUser);
      }
    } catch (error) {
      console.error('Failed to update user:', error);
      alert(t('update_error'));
    }
  };

  useEffect(() => {
    const fetchUser = () => {
      try {
        const user = localStorage.getItem('user');
        if (user) {
          const parsedUser = JSON.parse(user);
          setUserLog(parsedUser);

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
        console.error('Failed to fetch user from localStorage:', error);
      }
    };

    fetchUser();
  }, [i18n.language]);

  return (
    <S.PageContainer>
      <Header />
      <S.AboutUsContainer>
        <S.ContentContainer>
          <S.ProfileImage src={sewar} alt="Sewar" />

          <S.TextSection>
            <S.SectionTitle>{t('about_me_title')}</S.SectionTitle>
            {isEditing ? (
              <S.EditableInput
                value={aboutMeText}
                onChange={(e) => setAboutMeText(e.target.value)}
                rows="4"
              />
            ) : (
              <S.DescriptionText>{aboutMeText}</S.DescriptionText>
            )}

            <S.SectionTitle>{t('my_vision_title')}</S.SectionTitle>
            {isEditing ? (
              <S.EditableInput
                value={myVisionText}
                onChange={(e) => setMyVisionText(e.target.value)}
                rows="4"
              />
            ) : (
              <S.DescriptionText>{myVisionText}</S.DescriptionText>
            )}

            {isEditing && (
              <S.Button onClick={handleSave}>
                <S.ButtonText>{t('save_button_text')}</S.ButtonText>
              </S.Button>
            )}
          </S.TextSection>
        </S.ContentContainer>

        <S.Button33 onClick={() => setIsEditing(!isEditing)}>
          <S.ButtonText>
            {isEditing ? t('cancel_button_text') : t('edit_button_text')}
          </S.ButtonText>
        </S.Button33>
      </S.AboutUsContainer>
    </S.PageContainer>
  );
};

export default AboutUs;