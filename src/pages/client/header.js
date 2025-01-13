import React, { useState, useEffect } from 'react';
import * as SC from './styleClientPage'; // Adjusted styles for web
import logo from '../../assets/images/SewarLogo.png'; // Ensure the logo path is correct
import { useTranslation } from 'react-i18next'; // For translation
import { FaArrowLeft, FaBars, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // React icons
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Dropdown icons
import { useNavigate,useLocation } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchData = async () => {
    try {
      const results = localStorage.getItem('fashionItems'); // Fetch from localStorage
      if (results) {
        const parsedResults = JSON.parse(results);
        const allTypes = parsedResults.map((item) => item.type);
        const uniqueTypes = [...new Set(allTypes)];
        setTypes(uniqueTypes);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSubMenuToggle = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const navigateToCategory = (category) => {
    navigate(`/client/mainForClient`)
    navigate(`/client/headerSections/listOfItems?category=${category}`);
    setMenuVisible(!menuVisible);
  };

  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  const goBack = () => {
    if (location.pathname === '/client/mainForClient') {
      navigate('/');
    } else {
      navigate('/client/mainForClient');
    }
  };

  return (
    <SC.HeaderWrapper>
      <SC.HeaderContainer>
        {/* Back Button */}
        <button
         onClick={goBack}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }} >
          <FaArrowLeft size={30} color="#73224B" />
        </button>

        {/* Logo */}
        <button
          onClick={() => navigate('/client/mainForClient')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <SC.Logo src={logo} alt="Logo" />
        </button>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaBars size={30} color="#73224B" />
        </button>
      </SC.HeaderContainer>

      {/* Menu Content */}
      {menuVisible && (
        <SC.MenuContainer>
         
         <SC.MenuText
          onClick={() => navigate('/client/mainForClient')&&setMenuVisible(false)}
          style={{ cursor: 'pointer' }}>
              {t('home')}
        </SC.MenuText>

        <SC.MenuText
          onClick={() => navigate('/client/headerSections/aboutUs')}
          style={{ cursor: 'pointer' }}
        >
          {t('about_us')}
        </SC.MenuText>

          {/* Submenu for My Designs */}
          <div
            onClick={handleSubMenuToggle}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              width: '150px',
            }}
          >
            <SC.MenuText>{t('my_designs')}</SC.MenuText>
            {subMenuVisible ? (
              <IoIosArrowUp size={24} color="#000" />
            ) : (
              <IoIosArrowDown size={24} color="#000" />
            )}
          </div>

          {/* Submenu Items */}
          {subMenuVisible && (
            <SC.MenuItemContainer>
              <div style={{ cursor: 'pointer' }}>
                  <SC.MenuText onClick={() => navigateToCategory("All")}>
                    All
                  </SC.MenuText>
                </div>
              {types.map((item, index) => (
                <div key={index} style={{ cursor: 'pointer' }}>
                  <SC.MenuText onClick={() => navigateToCategory(item)}>
                    {item}
                  </SC.MenuText>
                </div>
              ))}
            </SC.MenuItemContainer>
          )}

          <SC.MenuText
                onClick={() => navigate('/client/headerSections/contactUs')}
                style={{ cursor: 'pointer' }}
              >
                {t('contact_us')}
          </SC.MenuText>

          {/* Social Media Icons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '10px',
              width: '100px',
            }}
          >
            <FaInstagram
              size={30}
              color="#E4405F"
              onClick={() =>
                openUrl(
                  'https://www.instagram.com/siwardesign_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                )
              }
              style={{ cursor: 'pointer' }}
            />
            <FaWhatsapp
              size={30}
              color="#25D366"
              onClick={() =>
                openUrl(
                  'https://www.instagram.com/siwardesign_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                )
              }
              style={{ cursor: 'pointer' }}
            />
          </div>
        </SC.MenuContainer>
      )}
    </SC.HeaderWrapper>
  );
};

export default Header;