import React, { useState, useEffect } from 'react';
import * as SC from '../styleEditingCard4';
import Header from './header';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import { UpdateFashionItem, DeleteFashionItem } from '../../../../helpers/api';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const DetailsScreen = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
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
  }, []);

  const fetchData = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');

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



  return item1 ? (
    <SC.PageContainer2>
      <Header />
      <SC.ViewSection>
        <SC.Button44 onClick={() => setIsEditing(!isEditing)}>
           <>{isEditing ? <FaTimes size="24" color="white" /> : <FaPencilAlt size="24" color="white" />}</>
          <SC.ButtonText>{isEditing ? 'Cancel' : 'Edit'}</SC.ButtonText>
        </SC.Button44>

        <SC.ScrollContainer2>
          {TheImages.map((item, index) => (
              <SC.ImageContainer key={index} height={activeTab ? 500 : 500}>
                <SC.ImageItem src={item.src} alt={`Product ${index + 1}`} />
              </SC.ImageContainer>
            ))}
        </SC.ScrollContainer2>

        

        <SC.DotContainer>
          {TheImages?.map((_, index) => (
            <SC.Dot key={index} active={index === currentIndex} />
          ))}
        </SC.DotContainer>

        <SC.ArrowButton onClick={handleTabPress} activeTab={activeTab}>
         <>{!activeTab ? <FaArrowUp size="24" color="#73224B" /> : <FaArrowDown size="24" color="#73224B" />}</>
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
                <SC.handlebutton onClick={handleSave}>Save</SC.handlebutton>
                <SC.handlebutton onClick={handleDelete}>Delete</SC.handlebutton>
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