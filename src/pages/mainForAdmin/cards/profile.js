// Profile.js
import React from 'react';
import * as S from '../style2'; // Ensure your styled-components are compatible with the web
import sewar from '../../../assets/images/SewarImage.jpg';
import { logout } from '../../../helpers/api';
import { useNavigate } from 'react-router-dom'; // For web navigation
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../../changeLangyage';

const Profile = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useRouter for web
  const { t } = useTranslation();

  const handleLogOut = async () => {
    console.log('Logging out');
    try {
      const respond = await logout();
      if (respond) {
        navigate('/'); // Redirect to the home page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.ProfileContainer>
      <S.ProfileImage src={sewar} alt="Sewar" /> {/* Use src and alt for web images */}
      <S.ProfileName>Sewar</S.ProfileName>
      <S.ProfileInfo>Fashion Designer</S.ProfileInfo>

      <S.TextLabel>{t('select-language')}</S.TextLabel>
      <LanguageSelector />

      <S.ProfileButton onClick={handleLogOut}> {/* Use onClick instead of onPress */}
        <S.ProfileButtonText>{t('log-out')}</S.ProfileButtonText>
      </S.ProfileButton>
    </S.ProfileContainer>
  );
};

export default Profile;