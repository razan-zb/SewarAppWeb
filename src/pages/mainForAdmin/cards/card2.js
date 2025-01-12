import React, { useState, useEffect } from 'react';
import * as S from '../style2';
import SearchCard2 from './sections/searchCard2';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { fetchClientsData } from '../../../helpers/api';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa';

// Measuring List Page
const Card2 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);

  // Fetch clients data from API
  const fetchData = async () => {
    try {
      const clients = await fetchClientsData();
      setClients(clients);
      setFilteredClients(clients);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Filter clients based on search query
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = clients.filter(
      (client) =>
        client.firstName.toLowerCase().includes(query) ||
        client.lastName.toLowerCase().includes(query)
    );
    setFilteredClients(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  // Handle "+" button press
  const handlePress = () => {
    navigate('/mainForAdmin/cards/sections/measuresForOne', { state: null });
  };

  // Handle client item press
  const handlePressItem = (user) => {
    navigate('/mainForAdmin/cards/sections/measuresForOne', { state: user });
  };

  return (
    <S.Card2Container>
       <S.TopContainer>
        <FaArrowLeft onClick={() => navigate(-1)}  />
      </S.TopContainer>
      <SearchCard2
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSearch={handleSearch}
     />

      <S.ListContainer>
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <S.ContentContainer key={client._id} onClick={() => handlePressItem(client)}>
              <S.CustomName>
                {client.firstName} {client.lastName}
              </S.CustomName>
            </S.ContentContainer>
          ))
        ) : (
          <S.NoDataText>{t('noClientAvailable')}</S.NoDataText>
        )}
      </S.ListContainer>

      <S.CircleButton onClick={handlePress}>
          <FaPlus size={24} color="#fff" />
      </S.CircleButton>
    </S.Card2Container>
  );
};

export default Card2;