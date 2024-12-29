import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './styleMain';
import logo from '../assets/images/SewarLogo.png';
import { loadLanguage } from '../i18n';
import { useTranslation } from 'react-i18next';
import { fetchClientsData, fetchUserData, fetchTasksData, fetchFashionItemsData } from '../helpers/api';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // Load language translations
    loadLanguage();

  }, []);

  const handleLogInPress = () => {
    const token = localStorage.getItem('authToken'); // Use localStorage for web
    if (token) {
      navigate('/mainForAdmin/mainAdminPage?name=sewar');
    } else {
      navigate('/LogIn');
    }
  };

  const fetchData = async () => {
    try {
      const clients = await fetchClientsData();
      console.log('Clients:', clients.length);

      const user = await fetchUserData('sewar.doe@example.com');
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User:', user.name);

      const tasks = await fetchTasksData('1234567890');
      console.log('Tasks:', tasks.length);

      const fashionItems = await fetchFashionItemsData();
      localStorage.setItem('fashionItems', JSON.stringify(fashionItems));
      console.log('Fashion Items:', fashionItems.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleVisited = () => {
    navigate('/client/mainForClient');
  };

  return (
    <SC.Container>
      <SC.WelcomeBackground>
        <SC.ImageOnBox src={logo} alt="Logo" />
        <SC.WelcomeText>{t('welcome')}</SC.WelcomeText>
        <SC.ButtonContainer2 onClick={handleVisited}>
          <SC.ButtonText2>{t('Visitor')}</SC.ButtonText2>
        </SC.ButtonContainer2>
        <SC.LogInButtonText as="button" onClick={handleLogInPress}>
          {t('logIn')}
        </SC.LogInButtonText>
      </SC.WelcomeBackground>
    </SC.Container>
  );
};

export default Home;