import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Using react-router-dom
import Header from './header';
import * as S from '../styleEditingCard4';
import { FaPlus } from 'react-icons/fa'; // Import FontAwesome plus icon
import AddItemModal from './newFashionItemModal';

const ItemList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category'); // Get the category from URL params
  const [Items, setItems] = useState([]);
  const [fashionItems, setFashionItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to handle saving the new item
  const saveItem = (newItem) => {
    setFashionItems([...fashionItems, newItem]);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePressItem = (item) => {
    navigate(`/mainForAdmin/cards/card4Sections/detailsScreenEdit?id=${item._id}`);
  };

  const getData = async () => {
    const results = localStorage.getItem('fashionItems');
    const parsedResults = JSON.parse(results);
    if (category === 'All') {
      setItems(parsedResults);
    } else {
      const filteredItems = parsedResults.filter((item) => item.type === category);
      setItems(filteredItems);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <S.PageContainer>
      <Header />
      <S.TitleForPage6>{category === 'All' ? 'Full Catalog' : `${category} Catalog`}</S.TitleForPage6>

      <S.StyledFlatList1>
        {Items.map((item, index) => (
          <S.Card1 key={index} onClick={() => handlePressItem(item)}>
            <S.CardImage src={item.photos[0]} alt={item.name} />
          </S.Card1>
        ))}
      </S.StyledFlatList1>

      <S.CircleButton onClick={toggleModal}>
        <FaPlus size={24} color="#fff" />
      </S.CircleButton>

      {/* Add Item Modal */}
      <AddItemModal
        isVisible={isModalVisible}
        setModalVisible={setModalVisible}
        toggleModal={toggleModal}
        saveItem={saveItem}
      />
    </S.PageContainer>
  );
};

export default ItemList;