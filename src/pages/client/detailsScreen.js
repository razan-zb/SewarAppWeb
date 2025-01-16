import React, { useState, useEffect, useCallback } from 'react';
import * as SC from './styleClientPage'; 
import { FaArrowUp, FaArrowDown,FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DetailsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [item1, setItem] = useState(null);
  const [TheImages, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    const results = localStorage.getItem('fashionItems');
    const parsedResults = JSON.parse(results);
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const foundItem = parsedResults.find(item => item._id === id);
    setItem(foundItem);

    if (foundItem) {
      const temps = foundItem.photos.map((photoUrl, index) => ({
        id: (index + 1).toString(),
        src: photoUrl,
      }));
      setImages(temps);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleTabPress = () => {
    setActiveTab(prev => !prev);
  };

  return item1 ? (
    <SC.PageContainer2>
      <SC.TopContainer>
        <FaArrowLeft onClick={() => navigate(-1)} style={{ marginLeft: '20px' ,color:'#fff'}} />
      </SC.TopContainer>
      
      <SC.ViewSection>
        <SC.ScrollContainer>
          {TheImages.map((item, index) => (
            <SC.ImageContainer key={item.id} height={activeTab ? 500 : 700}>
              <SC.BlurredBackground3 style={{ backgroundImage: `url(${item.src})` }} />
              <SC.ImageItem src={item.src} alt={`Photo ${index + 1}`} />
            </SC.ImageContainer>
          ))}
        </SC.ScrollContainer>

        <SC.DotContainer>
          {TheImages?.map((_, index) => (
            <SC.Dot key={index} active={index === currentIndex} />
          ))}
        </SC.DotContainer>

        <SC.ArrowButton onClick={handleTabPress}>
          {!activeTab ? <FaArrowUp size="24" color="#73224B" /> : <FaArrowDown size="24" color="#73224B" />}
        </SC.ArrowButton>
      </SC.ViewSection>

      <div>
        {activeTab && (
          <SC.Details>
            <SC.DetailText>{item1.name}</SC.DetailText>
            <SC.DetailText>Size range: {item1.size}</SC.DetailText>
            <SC.PriceText>{item1.price} ₪</SC.PriceText>
            <SC.DetailTextDiscrebtion>{item1?.description}</SC.DetailTextDiscrebtion>
          </SC.Details>
        )}
      </div>
    </SC.PageContainer2>
  ) : (
    <SC.PageContainer2 />
  );
};

export default DetailsScreen;