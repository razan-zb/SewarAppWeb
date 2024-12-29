import * as S from './style2'; // Ensure styles are updated for web
import React from 'react';
import { IoHomeOutline, IoLogOutOutline, IoPersonOutline } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
const BottomTabBar = ({ onTabPress, activeTab }) => {
  return (
    <S.TabBarContainer>
      {['Exit', 'Home', 'Profile'].map((tab) => (
        <S.TabButton key={tab} onClick={() => onTabPress(tab)}>
          {activeTab === tab && (
            <S.Circle>
              {tab === 'Home' && <IoHomeOutline size={30} color="#73224B" />}
              {tab === 'Exit' && <IoLogOutOutline size={30} color="#73224B" />}
              {tab === 'Profile' && <IoPersonOutline size={30} color="#73224B" />}
            </S.Circle>
          )}
          {activeTab !== tab && (
            <>
              {tab === 'Home' && <IoHomeOutline size={30} color="#73224B" />}
              {tab === 'Exit' && <IoLogOutOutline size={30} color="#73224B" />}
              {tab === 'Profile' && <IoPersonOutline size={30} color="#73224B" />}
            </>
          )}
        </S.TabButton>
      ))}
    </S.TabBarContainer>
  );
};

export default BottomTabBar;