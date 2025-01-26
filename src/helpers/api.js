import axios from 'axios';
import moment from 'moment';
import { getDownloadURL, ref } from 'firebase/storage'; 
import { storage } from '../firebaseConfig'; 

const BASE_URL = 'https://sewarappserverside.onrender.com/api';
// const BASE_URL = "http://localhost:3000/api"; 
// Sending a video to the server
export const sendVideoFirebase = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/uploudVideo`, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error('Error uploading video:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching video URL:', error);
    return null;
  }
};

// Sending an image to the server
export const sendImageFirebase = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/uploudImage`, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error('Error uploading image:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error fetching image URL:', error);
    return null;
  }
};

// Fetching video URL from Firebase
export const fetchVideoUrl = async (nameOfVideo) => {
  try {
    const videoRef = ref(storage, `videos/${nameOfVideo}`); 
    const url = await getDownloadURL(videoRef);
    return { url, error: "no" };
  } catch (error) {
    console.error('Error fetching video URL:', error);
    return { url: null, error };
  } 
};
// Fetching image URL from Firebase
export const fetchImage = async (nameOfImage) => {
  try {
    const storageRef = ref(storage, `images/${nameOfImage}`);
    const url = await getDownloadURL(storageRef);
    return { url, error: "no" };
  } catch (err) {
    console.error('Error fetching image URL:', err);
    return { url: null, error: err };
  }
};

// Fetching user data
export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Fetching tasks data
export const fetchTasksData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/task/user/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks data:', error);
    throw error;
  }
};

// Fetching fashion items data
export const fetchFashionItemsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/fashionItem/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching fashion items data:', error);
    throw error;
  }
};

// Fetching client data
export const fetchClientsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/client/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching client data:', error);
    return null;
  }
};

// Login
export const logIn = async (name, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, { name, password });
    if (response.data.message === "Login failed") {
      return { status: false, user: null };
    } else {
      const user = response.data.user;
      const token = user?.token;

      if (!token) {
        console.error('Token is undefined or null');
        return { status: false, user: null };
      }

      // Store the token in localStorage
      localStorage.setItem('authToken', token);
      return { status: true, user };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { status: false, user: null };
  }
};

// Logout
export const logout = async () => {
  try {
    localStorage.removeItem('authToken');
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    return false;
  }
};

// Save client data
export const featchsaveClient = async (firstName, lastName, phone, eventDate, values, notes) => {
  const clientData = {
    firstName: firstName,
    lastName: lastName,
    email: `${firstName}.doe@gmail.com`,
    phoneNumber: phone,
    dateOfBirth: '1990-01-01T00:00:00.000+00:00',
    lastModifingDate: new Date().toISOString(),
    eventDate: eventDate,
    chestHeight: values.chestHeight,
    frontWaistHeight: values.frontWaistHeight,
    hipHeight: values.hipHeight,
    backWaistHeight: values.backWaistHeight, 
    waistHeight: values.waistHeight, 
    kneeHeight: values.kneeHeight, 
    fullLength: values.fullLength, 
    shoulderWidth: values.shoulderWidth, 
    shoulderSlope: values.shoulderSlope, 
    bustDistance: values.bustDistance, 
    bustCircumference: values.bustCircumference, 
    waistCircumference: values.waistCircumference, 
    hipCircumference: values.hipCircumference, 
    sleeveCircumference: values.sleeveCircumference,
    wristCircumference: values.wristCircumference, 
    handCircumference: values.handCircumference, 
    sleeveLength: values.sleeveLength, 
    underBustHeight: values.underBustHeight, 
    skirtLength: values.skirtLength, 
    underBustCircumference: values.underBustCircumference, 
    bustCoverage: values.bustCoverage, 
    notes: notes,
  };

  try {
    const response = await fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error('Error saving client data:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error saving client data:', error);
    return null;
  }
};
// Create task
export const featchCreateTask = async (description, date, startTime, endTime, createdBy, notificationTriggerTime, notificationTriggerShow, notificationScheduled) => {
  const taskData = {
    description,
    date: moment(date).toDate(),
    startTime: moment.utc(`${date} ${startTime}`, 'YYYY-MM-DD HH:mm').toDate(),
    endTime: moment.utc(`${date} ${endTime}`, 'YYYY-MM-DD HH:mm').toDate(),
    createdBy,
    notificationTriggerTime,
    notificationTriggerShow,
    notificationScheduled,
  };

  try {
    const response = await axios.post(`${BASE_URL}/task/create`, taskData);
    return response.status === 201;
  } catch (error) {
    console.error('Error creating task:', error);
    return false;
  }
};



export const featchCreateFashionItem = async (item) => {


  try {
    const response = await axios.post(`${BASE_URL}/fashionItem/`,item)

    if(response.status===201)
      return true
    return false;

  } catch (error) {
    console.error('Error saving item data:', error);
    return false;
  }
};


export const fetchDeleteTask = async (taskId) => {
  try {
    const response = await fetch(`${BASE_URL}/task/${taskId}`, {
      method: 'DELETE', // Use DELETE method to remove the task
      headers: {
        'Content-Type': 'application/json', // Set appropriate headers if needed
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.ok;
  } catch (error) {
    console.error('Error fetching fashion items data:', error);
    throw error; 
  }
};



export const fetchUpdateTask = async (taskId, updatedTaskData) => {
  try {
    const response = await fetch(`${BASE_URL}/task/${taskId}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(updatedTaskData), 
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error; 
  }
};

export const fetchUpdateUser = async (userEmail, updatedUserData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userEmail}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(updatedUserData), 
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error; 
  }
};

export const UpdateFashionItem = async (item) => {
  try {
    const response = await fetch(`${BASE_URL}/fashionItem/${item._id}`, {
      method: 'put', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(item), 
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Error updating Fashion Item:', error);
    throw error; 
  }
};


export const SendEmail= async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/client/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      console.log('Email sent successfully');
      return true;
    } else {
      console.error('Error sending email', result);
      return false;
    }
    } catch (error) {
      console.error('Error:', error);
      return false;
    }

}
export const DeleteFashionItem= async (itemID) => {
  try {
    const response = await fetch(`${BASE_URL}/fashionItem/${itemID}`, {
      method: 'DELETE', // Use DELETE method to remove the task
      headers: {
        'Content-Type': 'application/json', // Set appropriate headers if needed
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.ok;
  } catch (error) {
    console.error('Error', error);
    throw error; 
  }
};
