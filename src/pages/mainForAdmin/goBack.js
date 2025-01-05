import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  background-color: #73224B; 
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  
`;

const BackIcon = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <GoBackContainer onClick={() => navigate('/mainForAdmin/mainAdminPage')}>
      <BackIcon>&larr;</BackIcon> {/* Left arrow symbol */}
      Go Back
    </GoBackContainer>
  );
};

export default GoBack;