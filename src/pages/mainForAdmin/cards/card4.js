import React, { useRef, useEffect, useState } from 'react';
import * as SC from './styleEditingCard4'; 
import { useNavigate } from 'react-router-dom'; 
import Header from './card4Sections/header';
import GoBack from '../goBack';
import { FaArrowRight, FaEdit } from 'react-icons/fa'; 
import { fetchUpdateUser, sendVideoFirebase, sendImageFirebase } from "../../../helpers/api";

const MainForClient = () => {
  const navigate = useNavigate();
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items2, setItem2] = useState([]);
  const [video1, setVideo1] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [types, setTypes] = useState([]);

  const showAlert = (title, message) => {
    alert(`${title}: ${message}`);
  };

  const handleFileChange = async (e, name, mediaId, isVideo = false) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file, `${name}.${isVideo ? 'mp4' : 'png'}`);

    try {
      isVideo ? setLoading(true) : setLoading1(true);
      const uploadFunction = isVideo ? sendVideoFirebase : sendImageFirebase;
      const downloadURL = await uploadFunction(formData);

      if (downloadURL) {
        const storedUser = localStorage.getItem('user');
        const theUser = JSON.parse(storedUser);
        if (isVideo) {
          theUser.miroVideos[mediaId] = downloadURL.url;
          setVideo1(prev =>
            prev.map(video => (video.id === mediaId ? { ...video, src: downloadURL.url } : video))
          );
        } else {
          theUser.miroPhotos[mediaId] = downloadURL.url;
          setItem2(prev =>
            prev.map(photo => (photo.id === mediaId ? { ...photo, src: downloadURL.url } : photo))
          );
        }

        localStorage.setItem('user', JSON.stringify(theUser));
        const result = await fetchUpdateUser(theUser.email, theUser);
        if (result.message === "User updated successfully") {
          showAlert('Success', `${isVideo ? 'Video' : 'Image'} uploaded successfully!`);
        }
      } else {
        showAlert('Upload Failed', 'There was a problem uploading the media.');
      }
    } catch (error) {
      console.error("Error uploading media:", error);
      showAlert('Upload Failed', 'There was a problem uploading the media.');
    } finally {
      isVideo ? setLoading(false) : setLoading1(false);
    }
  };

  const fetchData = async () => {
    try {
      const results = localStorage.getItem('fashionItems');
      const theUser = JSON.parse(localStorage.getItem('user'));
      const parsedResults = JSON.parse(results);
      const allTypes = parsedResults.map(item => item.type);
      setTypes([...new Set(allTypes)]);
      setItems(parsedResults);
      setItem2(theUser.miroPhotos.map((src, id) => ({ id, src })));
      setVideo1(theUser.miroVideos.map((src, id) => ({ id, src })));
    } catch (error) {
      console.error('Failed to fetch user from storage:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SC.PageContainer>
      <SC.FixedHeaderContainer>
        <GoBack />
        <Header />
      </SC.FixedHeaderContainer>
      <SC.ScrollContainer>
      <SC.ScrollCon ref={scrollViewRef}>
          {items2.map((item, index) => (
            <div key={index} style={{ height: '200px', minWidth: '100%' }}>
              <img
                src={item.src}
                alt={`Media ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 2 }}
              />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {loading1 ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <FaEdit size={30} color="#73224B" style={{ marginLeft: '10px' }} />
                    <input
                      type="file"
                      accept="image/*"
                      style={{ marginLeft: '10px' }}
                      onChange={e => handleFileChange(e, `mario${item.id}`, item.id)}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </SC.ScrollCon>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          {video1.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
              <video
                src={item.src}
                controls
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <FaEdit size={30} color="#73224B" style={{ marginRight: '10px' }} />
                    <input
                      type="file"
                      accept="video/*"
                      onChange={e => handleFileChange(e, `marioVideo${item.id}`, item.id, true)}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {types.map((type, index) => (
          <div key={index}>
            <SC.Smallcontainer>
              <SC.TitleForPage>{type}</SC.TitleForPage>
              <FaArrowRight
                size={25}
                color="#73224B"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/mainForAdmin/cards/card4Sections/listOfItemsEdit?category=${type}`)}
              />
            </SC.Smallcontainer>

            <SC.StyledFlatList>
              {items
                .filter(item => item.type === type)
                .map(item => (
                  <SC.Card key={item._id} onClick={() => navigate(`/mainForAdmin/cards/card4Sections/detailsScreenEdit?id=${item._id}`)}>
                    <SC.BlurredBackground style={{ backgroundImage: `url(${item.photos[0]})` }} />
                    <SC.CardImage src={item.photos[0]} alt="Card" />
                  </SC.Card>
                ))}
            </SC.StyledFlatList>
          </div>
        ))}
      </SC.ScrollContainer>
    </SC.PageContainer>
  );
};

export default MainForClient;