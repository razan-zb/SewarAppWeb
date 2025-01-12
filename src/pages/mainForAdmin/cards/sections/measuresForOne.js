import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import * as S from '../sections/sectionsStyle';
import { featchsaveClient } from '../../../../helpers/api';
import { useTranslation } from 'react-i18next';
import NoteModal from './noteModel';
import { useNavigate } from 'react-router-dom';


const MeasuresForOne = () => {
  const location = useLocation();
  const user = location.state||{};
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const formattedDate = moment(date).format('D MMMM YYYY');
  const formattedDate2 = moment(date2).format('D MMMM YYYY');

  const measurementFields = {
    chestHeight: user.chestHeight || '',
    frontWaistHeight: user.frontWaistHeight || '',
    hipHeight: user.hipHeight || '',
    backWaistHeight: user.backWaistHeight || '',
    waistHeight: user.waistHeight || '',
    kneeHeight: user.kneeHeight || '',
    fullLength: user.fullLength || '',
    shoulderWidth: user.shoulderWidth || '',
    shoulderSlope: user.shoulderSlope || '',
    bustDistance: user.bustDistance || '',
    bustCircumference: user.bustCircumference || '',
    waistCircumference: user.waistCircumference || '',
    hipCircumference: user.hipCircumference || '',
    sleeveCircumference: user.sleeveCircumference || '',
    wristCircumference: user.wristCircumference || '',
    handCircumference: user.handCircumference || '',
    sleeveLength: user.sleeveLength || '',
  };

  const [values, setValues] = useState(measurementFields);

  useEffect(() => {
    if (user) {
      user.firstName===undefined?setName(""):setName(user.firstName + " " + user.lastName);
      setPhoneNumber(user.phoneNumber || '');
      if (user.lastModifingDate) setDate(new Date(user.lastModifingDate));
      if (user.eventDate) setDate2(new Date(user.eventDate));
      setNotes(user.notes|| '');
    }
  }, []);

  const handleValueChange = (field, value) => {
    setValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const fetchSave = async () => {
    try {
      const [firstName, lastName = ''] = name.split(' ', 2);
      const respond = await featchsaveClient(firstName, lastName, phoneNumber, date2, values, notes);

      if (respond) {
        alert(t('success_message'));
      } else {
        alert(t('error_message'));
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const checkFields = () => {
    if (!name || !phoneNumber || !formattedDate || !formattedDate2) {
      alert(t('validation_error'));
      return false;
    }

    if (isNaN(phoneNumber)) {
      alert(t('phone_validation_error'));
      return false;
    }

    for (const field in values) {
      if (!values[field]) {
        alert(`${t(field)} ${t('is_required')}`);
        return false;
      }

      if (isNaN(values[field])) {
        alert(`${t(field)} ${t('must_be_numeric')}`);
        return false;
      }
    }

    return true;
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSave = () => {
    if (checkFields()) {
      fetchSave();
    }
  };

  return (
    <S.ContainerOneM>
      <S.BackArrow onClick={() => navigate(-1)}>
        &larr;
      </S.BackArrow>


      <S.InputsContainer>
        <S.DateLabel>{t('name_label')}</S.DateLabel>
        <S.PhoneInput
          type="text"
          placeholder={t('enter_name_placeholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.InputsContainer>

      <S.InputsContainer>
        <S.DateLabel>{t('phone_label')}</S.DateLabel>
        <S.PhoneInput
          type="text"
          placeholder={t('enter_phone_placeholder')}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </S.InputsContainer>

      <S.InputsContainer>
        <S.DateLabel>{t('last_modified_date_label')}</S.DateLabel>
        <S.PhoneInput
          type="date"
          value={moment(date).format('YYYY-MM-DD')}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </S.InputsContainer>

      <S.InputsContainer>
        <S.DateLabel>{t('event_date_label')}</S.DateLabel>
        <S.PhoneInput
          type="date"
          value={moment(date2).format('YYYY-MM-DD')}
          onChange={(e) => setDate2(new Date(e.target.value))}
        />
      </S.InputsContainer>

      <S.ScrollContainer>
        {Object.keys(measurementFields).map((field) => (
          <S.DetailsContainer key={field}>
            <S.Label>{t(field)}</S.Label>
            <S.PhoneInput2
              type="text"
              placeholder={t('enter_value_placeholder')}
              value={values[field]}
              onChange={(e) => handleValueChange(field, e.target.value)}
            />
          </S.DetailsContainer>
        ))}
      </S.ScrollContainer>

      <S.ButtonsContainer>
      <S.SaveButton onClick={handleSave}>{t('saveButton')}</S.SaveButton>
      <S.NoteButton onClick={toggleModal}>{t('note_button_text')}</S.NoteButton>
    </S.ButtonsContainer>

      <NoteModal
        isVisible={isModalVisible}
        setModalVisible={setModalVisible}
        toggleModal={toggleModal}
        notes={notes}
        setNotes={setNotes}
        saveNotes={() => setModalVisible(false)}
      />
    </S.ContainerOneM>
  );
};

export default MeasuresForOne;