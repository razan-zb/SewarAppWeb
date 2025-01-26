import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styleHeader'; 
import LanguageSelector from '../../../changeLangyage'; 
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ClientChangeLanguage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <S.ClientChaContainer>
      <S.BackArrowContainer>
        <FaArrowLeft
          size={24}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(-1)} // Navigates back to the previous page
        />
      </S.BackArrowContainer>
      <S.ClientContentContainer>
        <S.TextLabel>{t('select-language')}</S.TextLabel>
        <LanguageSelector />
      </S.ClientContentContainer>
    </S.ClientChaContainer>
  );
};

export default ClientChangeLanguage;