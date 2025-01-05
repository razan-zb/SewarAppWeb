import React, { useState, useEffect } from 'react';
import * as SC from '../styleEditingCard4';
import logo from '../../../../assets/images/SewarLogo1.png';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaBars, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // For icons
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = localStorage.getItem('fashionItems');
      if (results) {
        const parsedResults = JSON.parse(results);
        const allTypes = parsedResults.map((item) => item.type);
        const uniqueTypes = [...new Set(allTypes)];
        setTypes(uniqueTypes);
      }
    };
    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const goBack = () => {
    if (location.pathname === '/mainForAdmin/cards/card4') {
      navigate(-1);
    } else {
      navigate('/mainForAdmin/cards/card4');
    }
  };

  const handleSubMenuToggle = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const navigateToCategory = (category) => {
    navigate(`/mainForAdmin/cards/card4Sections/listOfItesEdit?category=${category}`);
  };

  const navigateTo = (path) =>{
    navigate(path)
    setMenuVisible(false)

  }

  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <SC.HeaderWrapper>
      <SC.HeaderContainer>
        <button onClick={goBack} style={{ background: 'none', border: 'none' }}>
          <FaArrowLeft size={30} color="#73224B" />
        </button>
        <button onClick={() => navigate('/mainForAdmin/cards/card4')} style={{ background: 'none', border: 'none' }}>
          <SC.Logo src={logo} alt="Logo" />
        </button>
        <button onClick={toggleMenu} style={{ background: 'none', border: 'none' }}>
          <FaBars size={30} color="#73224B" />
        </button>
      </SC.HeaderContainer>

      {menuVisible && (
        <SC.MenuContainer>
          <SC.MenuText
            onClick={() => navigateTo('/mainForAdmin/cards/card4')}
            style={{ cursor: 'pointer' }}>
                {t('home')}
          </SC.MenuText>

  

          <SC.MenuText
              onClick={() => navigateTo('/mainForAdmin/cards/card4Sections/aboutUsEdit')}
              style={{ cursor: 'pointer' }}
            >
              {t('about_us')}
          </SC.MenuText>

          <div onClick={handleSubMenuToggle} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <SC.MenuText>{t('my_designs')}</SC.MenuText>
            {subMenuVisible ? (
              <IoIosArrowUp size={24} color="#000" />
            ) : (
              <IoIosArrowDown size={24} color="#000" />
            )}
          </div>

          {subMenuVisible && (
            <SC.MenuItemContainer>
              {types.map((item, index) => (
                <div key={index} style={{ cursor: 'pointer' }}>
                  <SC.MenuText onClick={() => navigateToCategory(item)}>{item}</SC.MenuText>
                </div>
              ))}
            </SC.MenuItemContainer>
          )}

        

          <SC.MenuText
              onClick={() => navigateTo('/mainForAdmin/cards/card4Sections/contactUsEdit')}
              style={{ cursor: 'pointer' }}
            >
              {t('contact_us')}
          </SC.MenuText>

          {/* Social Media Icons */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
            <FaInstagram
              size={30}
              color="#E4405F"
              onClick={() => openUrl('https://www.instagram.com/yourusername')}
              style={{ cursor: 'pointer', marginRight: '10px' }}
            />
            <FaWhatsapp
              size={30}
              color="#25D366"
              onClick={() => openUrl('https://www.instagram.com/yourusername')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </SC.MenuContainer>
      )}
    </SC.HeaderWrapper>
  );
};

export default Header;