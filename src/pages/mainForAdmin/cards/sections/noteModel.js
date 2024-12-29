/* eslint-disable react/prop-types */
// NoteModal.js
import React from 'react';
import * as S from '../sections/sectionsStyle';
import { useTranslation } from 'react-i18next';

const NoteModal = ({ isVisible, setModalVisible, toggleModal, notes, setNotes, saveNotes }) => {
  const { t } = useTranslation();

  if (!isVisible) return null; // Render nothing if the modal is not visible

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ExitButton onClick={() => setModalVisible(false)}>
          <S.ExitButtonText>X</S.ExitButtonText>
        </S.ExitButton>

        <S.ModalTitle>{t('note_button_text')}</S.ModalTitle>
        <S.ModalInput
          placeholder={t('enterNote')}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          multiline
        />
        <S.ModalSaveButton onClick={saveNotes}>
          <S.ModalSaveButtonText>{t('save_button_text')}</S.ModalSaveButtonText>
        </S.ModalSaveButton>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default NoteModal;