import React from 'react';
import * as S from './sectionsStyle';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const SearchCard2 = ({ value, onChangeText, onSearch }) => {
  const { t } = useTranslation();

  return (
    <S.SearchContainer>
      <S.SearchButton onClick={onSearch}>
         <FaSearch size={20} color="#73224B" />
      </S.SearchButton>
      <S.SearchInput
        placeholder={t('nameOfClient')}
        value={value}
        onChange={(e) => onChangeText(e.target.value)} // Update for web
      />
    </S.SearchContainer>
  );
};

SearchCard2.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchCard2;