import React, { useRef, useEffect, useState } from 'react';
import * as SC from './styleClientPage'; // Assuming your styles are already adapted for web
import Header from './header';
import { Dimensions } from 'react-native';
import { useNavigate } from 'react-router-dom';

const screenWidth = Dimensions.get('window').width; 

const MainForClient = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items2, setItems2] = useState([]);
  const [video1, setVideo1] = useState([]);
  const [items, setItems] = useState([]);
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const results = localStorage.getItem('fashionItems');
      const theUser = JSON.parse(localStorage.getItem('user'));
      const parsedResults = JSON.parse(results);

      const allTypes = parsedResults.map(item => item.type);
      const uniqueTypes = [...new Set(allTypes)];
      setTypes(uniqueTypes);
      setItems(parsedResults);

      const temps = theUser.miroPhotos.map((photoUrl, index) => ({
        id: (index + 1).toString(),
        src: photoUrl,
      }));
      setItems2(temps);

      const tempsForVideos = theUser.miroVideos.map((videoUrl, index) => ({
        id: (index + 1).toString(),
        src: videoUrl,
      }));
      setVideo1(tempsForVideos);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePressItem = (item) => {
    navigate(`/client/detailsScreen?id=${item._id}`);
  };
  
  const navigateToCategory = (category) => {
    navigate(`/client/headerSections/listOfItems?category=${category}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollViewRef.current) {
        const nextIndex = (currentIndex + 1) % items2.length;
        scrollViewRef.current.scrollTo({
          left: nextIndex * screenWidth,
          behavior: 'smooth',
        });
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, items2.length]);

  return (
    <SC.PageContainer>
      <Header />

      {/* Image Carousel */}
      <SC.ScrollContainer ref={scrollViewRef} style={{ overflowX: 'scroll', display: 'flex', flexDirection: 'row' }}>
        {items2.map((item, index) => (
          <SC.firstView key={index}>
            <SC.MaroiImage src={item.src} style={{ zIndex: 2 }} />
          </SC.firstView>
        ))}
      </SC.ScrollContainer>

      {/* Videos */}
      {screenWidth <= 600 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          {video1.map((item, index) => (
            <video
              key={index}
              src={item.src}
              controls
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                marginBottom: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', alignSelf: 'center' }}>
          {video1.map((item, index) => (
            <video
              key={index}
              src={item.src}
              controls
              style={{
                width: '350px',
                maxWidth: '600px',
                height: '600px',
                marginBottom: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
          ))}
        </div>
      )}

      {/* Categories and Items */}
      {types.map((type, index) => (
        <div key={index}>
          <SC.SmallContainer>
            <SC.TitleForPage>{type}</SC.TitleForPage>
            <SC.StyledButton onClick={() => navigateToCategory(type)}>
            <SC.StyledButtonIcon>➡</SC.StyledButtonIcon>
            </SC.StyledButton>
          </SC.SmallContainer>
          <SC.StyledFlatList style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll' }}>
            {items
              .filter(item => item.type === type)
              .map((item) => (
                <SC.Card key={item._id} onClick={() => handlePressItem(item)}>
                  <SC.BlurredBackground style={{ filter: 'blur(5px)' }} src={item.photos[0]} />
                  <SC.CardImage src={item.photos[0]} />
                </SC.Card>
              ))}
          </SC.StyledFlatList>
        </div>
      ))}
    </SC.PageContainer>
  );
};

export default MainForClient;