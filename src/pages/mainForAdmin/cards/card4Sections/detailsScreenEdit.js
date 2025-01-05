import React, { useState, useEffect, useCallback } from 'react';
import * as SC from '../styleEditingCard4';
import Header from './header';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'; 
import { UpdateFashionItem, DeleteFashionItem } from '../../../../helpers/api';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const DetailsScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [item1, setItem] = useState();
  const [TheImages, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [sizeRange, setSizeRange] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const results = localStorage.getItem('fashionItems');
      const parsedResults = JSON.parse(results);
      const foundItem = parsedResults.find((item) => item._id === id);

      if (foundItem) {
        const temps = foundItem.photos.map((photoUrl, index) => ({
          id: (index + 1).toString(),
          src: photoUrl,
        }));
        setImages(temps);
        setItem(foundItem);
        setProductName(foundItem.name);
        setPrice(`${foundItem.price}`);
        setSizeRange(foundItem.size);
        setDescription(foundItem.description);
      }
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  const handleSave = async () => {
    const updatedItem = {
      _id: item1._id,
      name: productName,
      size: sizeRange,
      price: price,
      description: description,
      photos: item1.photos,
      type: item1.type,
    };

    const result = await UpdateFashionItem(updatedItem);
    if (result) {
      alert('The item was updated successfully.');
      setIsEditing(false);
    } else {
      alert('Failed to update the item.');
    }
  };

  const handleDelete = async () => {
    const result = await DeleteFashionItem(item1._id);
    if (result) {
      alert('The item was deleted.');
      navigate('/mainForAdmin/cards/card4');
    } else {
      alert('Failed to delete the item.');
    }
  };

  const handleTabPress = () => {
    setActiveTab(!activeTab);
  };

  const handleViewableItemsChanged = useCallback(({ target }) => {
    setCurrentIndex(parseInt(target.dataset.index, 10));
  }, []);

  return item1 ? (
    <SC.PageContainer2>
      <Header />
      <SC.ViewSection height={activeTab ? 'auto' : '100%'}>
        <SC.Button44 onClick={() => setIsEditing(!isEditing)}>
           <>{isEditing ? <FaTimes size="lg" color="white" /> : <FaPencilAlt size="lg" color="white" />}</>
          <SC.ButtonText>{isEditing ? 'Cancel' : 'Edit'}</SC.ButtonText>
        </SC.Button44>

        <div style={{ display: 'flex', overflowX: 'auto' }}>
          {TheImages.map((item, index) => (
            <SC.ImageContainer key={index} height={activeTab ? 500 : 700}>
              <SC.BlurredBackground3 style={{ backgroundImage: `url(${item.src})` }} />
              <SC.ImageItem src={item.src} alt={`Product ${index + 1}`} />
            </SC.ImageContainer>
          ))}
        </div>

        <SC.DotContainer>
          {TheImages?.map((_, index) => (
            <SC.Dot key={index} active={index === currentIndex} />
          ))}
        </SC.DotContainer>

        <SC.ArrowButton onClick={handleTabPress} activeTab={activeTab}>
         <>{!activeTab ? <FaArrowUp size="lg" color="#73224B" /> : <FaArrowDown size="lg" color="#73224B" />}</>
        </SC.ArrowButton>
      </SC.ViewSection>

      {activeTab && (
        <SC.Details>
          {isEditing ? (
            <>
              <SC.EditableInput
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <SC.EditableInput
                type="text"
                placeholder="Size Range"
                value={sizeRange}
                onChange={(e) => setSizeRange(e.target.value)}
              />
              <SC.EditableInput
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <SC.EditableInput
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <SC.miniView>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleDelete}>Delete</button>
              </SC.miniView>
            </>
          ) : (
            <>
              <SC.DetailText>{productName}</SC.DetailText>
              <SC.DetailText>Size range: {sizeRange}</SC.DetailText>
              <SC.PriceText>{price} ₪</SC.PriceText>
              <SC.DetailTextDiscrebtion>{description}</SC.DetailTextDiscrebtion>
            </>
          )}
        </SC.Details>
      )}
    </SC.PageContainer2>
  ) : (
    <SC.PageContainer2 />
  );
};

export default DetailsScreen;