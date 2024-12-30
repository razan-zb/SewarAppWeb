import React, { useState, useEffect } from 'react';
import {Text,Modal,Alert,TouchableOpacity } from 'react-native';
import * as S from './cardStyle';
import DrawablePage from './drawablePage'; 
import { Platform } from 'react-native';
import { FaPlus } from 'react-icons/fa';
import { IoTrashBinOutline } from 'react-icons/io5'; // Import from react-icons

const Card3 = () => {
  const [pages, setPages] = useState([0]); 
  const [selectedPage, setSelectedPage] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);
  const [isNamingModalVisible, setIsNamingModalVisible] = useState(false); 
  const [newPageName, setNewPageName] = useState(''); 

  const addNewPage = () => {
    setIsNamingModalVisible(true); // Show the input modal for naming the page
  };

  const saveNewPage = () => {
    if (newPageName.trim() === '') {
      Alert.alert('Error', 'Page name cannot be empty');
      return;
    }

    const updatedPages = [...pages, newPageName];
    setPages(updatedPages);
    savePages(updatedPages);
    setNewPageName('');
    setIsNamingModalVisible(false); // Close the naming modal
  };

  // Open the full DrawablePage when a mini card is clicked
  const openDrawablePage = (pageId) => {
    setSelectedPage(pageId);
    setModalVisible(true);
  };

  // Close the full DrawablePage
  const closeDrawablePage = () => {
    setModalVisible(false);
    setSelectedPage(null);
  };

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      const storedPages = localStorage.getItem('drawablePages');
            if (storedPages) {
        setPages(JSON.parse(storedPages));
      }
    } catch (error) {
      console.error('Error loading pages:', error);
    }
  };

  const savePages = async (newPages) => {
    try {
      localStorage.setItem('drawablePages', JSON.stringify(newPages));
        } catch (error) {
      console.error('Error saving pages:', error);
    }
  };

  const deletePage = async (id) => {
  
    const showConfirmDialog = (title, message, onConfirm) => {
      if (Platform.OS === 'web') {
        const confirmDelete = window.confirm(`${title}\n\n${message}`);
        if (confirmDelete) onConfirm();
      } else {
        Alert.alert(
          title,
          message,
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            {
              text: "Delete",
              style: "destructive",
              onPress: onConfirm
            }
          ],
          { cancelable: true }
        );
      }
    };
  
    showConfirmDialog(
      "Delete Page",
      "Are you sure you want to delete this page?",
      async () => {
        const updatedPages = pages.filter(page => page !== id);
        setPages(updatedPages);
        localStorage.setItem('drawablePages', JSON.stringify(updatedPages));
        localStorage.removeItem(`drawnLines_${id}`);
        localStorage.removeItem(`textElements_${id}`);
        localStorage.removeItem(`images_${id}`);
        closeDrawablePage();
      }
    );
  };

  return (
    <S.Container>
      <S.ContainerScrollView>
        <S.CardRow>
          {pages.map((page, index) => (
            <S.MiniCard onClick={() => openDrawablePage(page)} key={index}>
              <S.PageName>{page}</S.PageName>
            </S.MiniCard>
          ))}
        </S.CardRow>

        <S.AddButton2 onClick={addNewPage} >
          <Text style={{color:"white" ,fontSize:18}}>+ Add New Note</Text>
        </S.AddButton2>
      </S.ContainerScrollView>

      {selectedPage !== null && (
        <Modal visible={modalVisible} animationType="slide" onRequestClose={closeDrawablePage}>
          <S.Container>
            <S.Container4>

              <TouchableOpacity  onClick={closeDrawablePage}>
                <FaPlus size={32} color="#0073e6" />;
              </TouchableOpacity>

              <TouchableOpacity 
                style={{
                  right: Platform.OS === 'web' ? -250 : -290,
                }}  
                onClick={() => deletePage(selectedPage)}
              >
                <IoTrashBinOutline size={32} color="#0073e6" />
              </TouchableOpacity>
           
            </S.Container4>
            
            <DrawablePage key={selectedPage} pageId={selectedPage} />
          </S.Container>
        </Modal>
      )}

      {/* Modal for entering the name of the new page */}
      <Modal visible={isNamingModalVisible} transparent={true} animationType="fade">
        <S.NamingModal>
          <S.NamingModalContent>
            <S.TextInputs
              value={newPageName}
              onChange={(e) => setNewPageName(e.target.value)} // Use e.target.value for web
              placeholder="Enter page name"
            />
            <S.SaveButton  onClick={saveNewPage}>
              <S.SaveButtonText>Save</S.SaveButtonText>
            </S.SaveButton >
            <S.CancelButton onClick={() => setIsNamingModalVisible(false)}>
              <S.CancelButtonText>Cancel</S.CancelButtonText>
            </S.CancelButton>
          </S.NamingModalContent>
        </S.NamingModal>
      </Modal>
    </S.Container>
  );
};

export default Card3;
