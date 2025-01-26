import React, { useState, useEffect } from 'react';
import * as S from '../sections/sectionsStyle';
import { featchCreateFashionItem, sendImageFirebase } from "../../../../helpers/api";
import { useTranslation } from 'react-i18next';

const AddItemModal = ({ isVisible, setModalVisible, toggleModal, saveItem }) => {
  const [name, setName] = useState('');
  const [sizeRange, setSizeRange] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [type, setType] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddingNewType, setIsAddingNewType] = useState(false);
  const [newType, setNewType] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const results =localStorage.getItem('fashionItems');
      if (results !== null) {
        const parsedResults = JSON.parse(results);
        const allTypes = parsedResults.map(item => item.type);
        const uniqueTypes = [...new Set(allTypes)];
        const typeItems = uniqueTypes.map(type => ({ label: type, value: type }));
        setItems(typeItems);
      }
    };

    fetchData();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert('No file selected');
      return;
    }
    if (file && name) {
      const formData = new FormData();
      formData.append('file', file, `${name}${photos.length}.png`);
      try {
        setLoading(true);
        const downloadURL = await sendImageFirebase(formData);
        if (downloadURL) {
          setPhotos([...photos, downloadURL.url]);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert('Upload Failed: There was a problem uploading the image.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please fill all fields before adding photos.');
    }
  };
  const handleAddNewType = () => {
    if (newType.trim() === '') {
      window.alert('Please enter a valid type');
      return;
    }
  
    const newTypeItem = { label: newType, value: newType };
    setItems((prevItems) => [...prevItems, newTypeItem]); 
    setType(newType); 
    setIsAddingNewType(false); 
    setNewType(''); 
    window.alert('New type added!');
  };
  const handleSaveItem = async () => {
    if (!name || !sizeRange  || photos.length === 0) {
      alert('Please fill all fields and upload at least one photo.');
    } else {
      const newItem = {
        _id: name,
        name,
        size: sizeRange,
        price: price || '',
        description: description || '',
        photos,
        type,
      };

      try {
        setLoading(true);
        await featchCreateFashionItem(newItem);
        saveItem(newItem);
        alert('The item was uploaded successfully.');
        setModalVisible(false);
        setName('');
        setSizeRange('');
        setPrice('');
        setDescription('');
        setPhotos([]);
      } catch (error) {
        console.error("Error uploading item:", error);
        alert('Upload Failed: There was a problem uploading the item.');
      } finally {
        setLoading(false);
      }
    }
  };

  return isVisible ? (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContainer}>
        <button style={styles.closeButton} onClick={toggleModal}>X</button>

        <h2>{t('addingNewItem')}</h2>

        <S.ModalInput2
          type="text"
          placeholder={t('namePlaceholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.ModalInput2
          type="text"
          placeholder={t('sizeRangePlaceholder')}
          value={sizeRange}
          onChange={(e) => setSizeRange(e.target.value)}
        />
        <S.ModalInput2
          type="number"
          placeholder={t('pricePlaceholder')}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
            style={styles.dropdown}
            value={isAddingNewType ? '' : type} // Prevent "add-new" from being set as type
            onChange={(e) => {
              const selectedValue = e.target.value;
              if (selectedValue === 'add-new') {
                setIsAddingNewType(true); // Show input for new type
                setType(''); // Clear the type to avoid "add-new" being used
              } else {
                setType(selectedValue); // Update type normally
                setIsAddingNewType(false); // Hide new type input
              }
            }}
          >
            <option value="">{t('selectTypePlaceholder')}</option>
            {items.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
            <option value="add-new">{t('addNewTypeLabel')}</option>
          </select>

        {isAddingNewType && (
          <S.newTypeSection>
            <input
              type="text"
              placeholder={t('addNewTypeLabel')}
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            />
            <button onClick={() => handleAddNewType(newType)}>{t('addNewTypeLabel')}</button>
          </S.newTypeSection>
        )}

        
        <S.AddDiscreption
          placeholder={t('descriptionPlaceholder')}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textArea}
        />

        <div style={styles.photosSection}>
          <p>{t('photosLabel')}</p>
          <input type="file" accept="image/*" onChange={handleFileChange}/>
          <div style={styles.photosPreview}>
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index + 1}`} style={styles.photo} />
            ))}
          </div>
        </div>

        <button onClick={handleSaveItem} style={styles.saveButton} disabled={loading}>
          {loading ? 'Saving...' : t('saveButton')}
        </button>
      </div>
    </div>
  ) : null;
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContainer: {
    width: '500px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '18px',
    cursor: 'pointer',
  },
  dropdown: {
    width: '270px',
    padding: '10px',
    margin: '10px 0',
  },
  textArea: {
    width: '300px',
    height: '100px',
    padding: '10px',
    margin: '10px 0',
  },
  photosSection: {
    margin: '20px 0',
  },
  photosPreview: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  photo: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  saveButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#73224B',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  newTypeSection:{
    gap:'10',
  }
};

export default AddItemModal;