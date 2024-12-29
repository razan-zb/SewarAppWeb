import styled from 'styled-components';
import back from '../assets/images/NewBack.png';
import back2 from '../assets/images/Frame1.png';

const isWideScreen = window.innerWidth > 600;

export const SafeAreaViewS = styled.div`
  display: flex;
  flex: 1;
`;

// Define a styled container
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
`;

export const WelcomeBackground = styled.div`
background-image: url(${(props) => (window.innerWidth > 600 ? back2 : back)});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
position: relative;
`;

export const ImageOnBox = styled.img`
width: 240px;
height: 320px;

`;

export const swiperDotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '5px',
  backgroundColor: 'gray',
  margin: '0 5px',
};

export const swiperActiveDotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '5px',
  backgroundColor: 'black',
  margin: '0 5px',
};

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background-color: pink;
  width: 300px;
  height: 250px;
  margin-top: 20px;
`;

// Define Buttons
export const ButtonContainer = styled.button`
  border-radius: 20px;
  border: 2px solid #ff3399;
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

export const ButtonContainer2 = styled.button`
  border-radius: 20px;
  width: 130px;
  height: 50px;
  background-color: #73224b;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover {
    background-color: #ff3399;
    color: #73224b;
  }
  cursor: pointer;
  @media (min-width: 600px) {
    margin-top: 20px;    
  }

`;

export const ButtonText = styled.span`
  color: black;
  font-size: 16px;
  text-align: center;
`;

export const LogInButtonText = styled.span`
    background: none;
    border: none;
    color: #73224b;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
    text-decoration: underline;
    }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 12px;
`;

export const Input1 = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
`;
export const CircleLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100px;
  background-color: #c86098;
  border-bottom-left-radius: 100px;
  transform: scaleX(2);
  z-index: -1;
`;

export const CircleRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: #eb94c3;
  border-bottom-right-radius: 100px;
  transform: scaleX(2);
  z-index: -1;
`;

export const WelcomeContent = styled.div``;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e8e8e8, #ffffff);
`;

export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  max-width: 400px;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const Label1 = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #73224b;
  font-weight: bold;
  display: block;
`;

export const LoginButton = styled.button`
  width: 100%;
  background-color: #73224b;
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5c1c3d;
  }
`;

export const ButtonText2 = styled.span`
  color: white;
  font-size: 17px;
`;

export const WelcomeText = styled.span`
  font-size: 17px;
  text-align: center;
`;

export const LogInTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #73224b;
  text-align: center;
`;