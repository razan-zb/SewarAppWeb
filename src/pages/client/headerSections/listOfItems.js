import React, { useEffect, useState } from 'react';
import Header from '../header';
import * as S from './styleHeader';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  const location = useLocation(); 
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    setCategory(categoryParam);

    getData(categoryParam);
  }, [location.search]);

  // Navigate to item details
  const handlePressItem = (item) => {
    navigate(`/client/detailsScreen?id=${item._id}`); 
  };

  // Fetch data and filter by category
  const getData = async () => {
    try {
      const results = localStorage.getItem('fashionItems'); 
      if (results) {
        const parsedResults = JSON.parse(results);
        const filteredItems =
          category === 'All'
            ? parsedResults
            : parsedResults.filter((item) => item.type === category);
        setItems(filteredItems);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return category ? (
    <S.PageContainer>
      <Header />
      <S.TitleForPage6>
        {category === 'All' ? 'Full Catalog' : `${category} Catalog`}
      </S.TitleForPage6>

      <S.StyledFlatList1>
        {items.map((item, index) => (
          <S.Card1 key={index} onClick={() => handlePressItem(item)}> {/* Use onClick for web */}
            <S.BlurredBackground
              style={{ filter: 'blur(15px)' }}
              src={item.photos[0]} // Use src for web-compatible images
            />
            <S.CardImage src={item.photos[0]} />
          </S.Card1>
        ))}
      </S.StyledFlatList1>
    </S.PageContainer>
  ) : (
    <div>No items available!</div>
  );
};

export default ItemList;