import React, { useState } from 'react';
import CalendarCard from './cards/calendarCard';
import Profile from './cards/profile';
import BottomTabBar from './bottomBar';
import * as S from './style2';
import card2 from '../../assets/images/measuring.png';
import card3 from '../../assets/images/sewing1.png';
import card4 from '../../assets/images/data3.png';
import { useTranslation } from 'react-i18next';
import { useWindowWidth } from './cards/useWindowWidth';
import { useNavigate } from 'react-router-dom';
const MainAdminPage = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [showCards, setShowCards] = useState(true);
  const { t } = useTranslation();
  const width = useWindowWidth(); 
  const navigate = useNavigate();

  const handleCardPress = (name) => {
    console.log(`Navigating to: ${name}`);
  };

  const handleTabPress = (route) => {
    setActiveTab(route);
    setShowCards(route === 'Home');

    if(route==='Exit'){
      navigate('/')
    }
  };
  return (
    <>
      <S.Container4>
        {showCards && (
          <>
            {/* Small Screens */}
            {width < 600 ? (
              <>
              <S.CardContainer>
                <S.Card1 onClick={() => navigate('/mainForAdmin/cards/card1')}>
                  <CalendarCard />
                </S.Card1>
                <S.Card2 onClick={() => navigate('/mainForAdmin/cards/card2')}>
                  <S.CardImage src={card2} alt="Card 2" />
                  <S.CardTitle>{t('card2Title')}</S.CardTitle>
                </S.Card2>
                <S.SmallCardContainer>
                  <S.Card3 onClick={() => navigate('/mainForAdmin/cards/card3')}>
                    <S.CardImage src={card3} alt="Card 3" />
                    <S.CardTitle>{t('card3Title')}</S.CardTitle>
                  </S.Card3>
                  <S.Card4 onClick={() => navigate('/mainForAdmin/cards/card4')}>
                    <S.CardImage src={card4} alt="Card 4" />
                    <S.CardTitle>{t('card4Title')}</S.CardTitle>
                  </S.Card4>
                </S.SmallCardContainer>
               </S.CardContainer>
              </>
            ) : (
              // Large Screens
              <>
                <S.CardContainer>
                  <S.Card1 onClick={() => navigate('/mainForAdmin/cards/card1')}>
                    <CalendarCard />
                  </S.Card1>

                  <S.CardForWeb2 onClick={() => navigate('/mainForAdmin/cards/card2')}>
                    <S.CardImage src={card2} alt="Card 2" />
                    <S.CardTitle>{t('Measurements')}</S.CardTitle>
                  </S.CardForWeb2>

                  <S.CardForWeb2 onClick={() => navigate('/mainForAdmin/cards/card3')}>
                    <S.CardImage src={card3} alt="Card 3" />
                    <S.CardTitle>{t('Notes')}</S.CardTitle>
                  </S.CardForWeb2>

                  <S.CardForWeb2 onClick={() => navigate('/mainForAdmin/cards/card4')}>
                    <S.CardImage2 src={card4} alt="Card 4" />
                    <S.CardTitle>{t('Card 4')}</S.CardTitle>
                  </S.CardForWeb2>
                </S.CardContainer>
              </>
            )}
          </>
        )}

        {!showCards && <Profile />}

        <BottomTabBar onTabPress={handleTabPress} activeTab={activeTab} />
      </S.Container4>
    </>
  );
};
export default MainAdminPage;