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

  
const changeData = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
    if (user) {
      // Map photos to include id and src
      const temps = user.miroPhotos.map((photoUrl, index) => ({
        id: index.toString(),
        src: photoUrl,
      }));
      setItem2(temps); // Update photos state

      // Map videos to include id and src
      const tempsForVideos = user.miroVideos.map((videoUrl, index) => ({
        id: index.toString(),
        src: videoUrl,
      }));
      setVideo1(tempsForVideos); // Update videos state
    } else {
      console.warn('No user data found in localStorage');
    }
  } catch (error) {
    console.error('Failed to fetch user data from localStorage:', error);
  }
};

  const pickImage = async (name, imageId) => {
    try {
      // Create an input element for selecting an image file
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*'; // Accept all image types
  
      input.onchange = async (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
          const formData = new FormData();
          formData.append('file', file, `${name}.png`);
  
          try {
            setLoading1(true);
  
            // Send image to the server
            const downloadURL = await sendImageFirebase(formData);
  
            if (downloadURL) {
              // Retrieve the user from localStorage
              const theUser = JSON.parse(localStorage.getItem('user'));
              theUser.miroPhotos[imageId] = downloadURL.url;
              localStorage.setItem('user', JSON.stringify(theUser)); // Save updated user to localStorage
  
              await changeData();
  
              const result = await fetchUpdateUser(theUser.email, theUser);
              if (result.message === 'User updated successfully') {
                alert('Success: Image uploaded successfully!');
              }
  
              // Update the items2 state with the new image URL
              const updatedItems2 = items2.map((photo) =>
                photo.id === imageId ? { ...photo, src: downloadURL.url } : photo
              );
              setItem2(updatedItems2);
            } else {
              alert('Upload Failed: There was a problem uploading the image.');
            }
          } catch (error) {
            console.error('Error uploading image:', error);
            alert('Upload Failed: There was a problem uploading the image.');
          } finally {
            setLoading1(false);
          }
        }
      };
  
      // Trigger the file input click
      input.click();
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };
  const pickVideo = async (name, videoId) => {
    try {
      // Create an input element for selecting a video file
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'video/mp4'; // Accept only mp4 videos
  
      input.onchange = async (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
          const formData = new FormData();
          formData.append('file', file, `${name}.mp4`);
  
          try {
            setLoading(true);
  
            // Upload the video to Firebase (or any server)
            const downloadURL = await sendVideoFirebase(formData);
  
            if (downloadURL) {
              // Retrieve the user from localStorage
              const theUser = JSON.parse(localStorage.getItem('user'));
              theUser.miroVideos[videoId] = downloadURL.url;
              localStorage.setItem('user', JSON.stringify(theUser)); // Save updated user to localStorage
  
              await changeData();
  
              const result = await fetchUpdateUser(theUser.email, theUser);
              if (result.message === 'User updated successfully') {
                alert('Success: Video uploaded successfully!');
              }
  
              const updatedVideo2 = video1.map((video) =>
                video.id === videoId ? { ...video, src: downloadURL.url } : video
              );
              setVideo1(updatedVideo2);
            }
          } catch (error) {
            console.error('Error uploading video:', error);
            alert('Upload Failed: There was a problem uploading the video.');
          } finally {
            setLoading(false);
          }
        }
      };
  
      // Trigger the file input click
      input.click();
    } catch (error) {
      console.error('Error picking video:', error);
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
                      onClick={() => pickImage("mario"+item.id,item.id)}
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
                      onClick={() => pickVideo(`marioVideo${item.id}`, item.id)}
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
                onClick={() => navigate(`/mainForAdmin/cards/card4Sections/listOfItesEdit?category=${type}`)}
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