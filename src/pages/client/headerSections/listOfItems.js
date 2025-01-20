import React, { useEffect, useState } from 'react';
import Header from '../header';
import * as S from './styleHeader';
import { useLocation, useNavigate } from 'react-router-dom';

const ItemList = () => {
  const location = useLocation(); 
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch category from URL and update state
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam !== category) {
      setCategory(categoryParam); // Only update if categoryParam is different
    }
  }, [location.search, category]);

  // Fetch data whenever category changes
  useEffect(() => {
    if (category) {
      getData();
    }
  }, [category]);

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
      <S.FixedHeaderContainer>
        <Header />
      </S.FixedHeaderContainer>
      <S.TitleForPage6>
        {category === 'All' ? 'Full Catalog' : `${category}`}
      </S.TitleForPage6>

      <S.StyledFlatList1>
        {items.map((item, index) => (
          <S.Card1 key={index} onClick={() => handlePressItem(item)}> 
           
            <S.CardImage src={item.photos[0]} />
            <S.BlurredBackground
              style={{ filter: 'blur(15px)' }}
              src={item.photos[0]} 
            />
          </S.Card1>
        ))}
      </S.StyledFlatList1>
    </S.PageContainer>
  ) : (
    <div>No items available!</div>
  );
};

export default ItemList;