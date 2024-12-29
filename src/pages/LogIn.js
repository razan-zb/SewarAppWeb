import React, { useState } from 'react';
import * as SC from './styleMain';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircle, IoEye, IoEyeOff } from 'react-icons/io5';
import { logIn } from '../helpers/api';
import { useTranslation } from 'react-i18next';

const LogIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameCorrect, setIsUsernameCorrect] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const correctUsername = 'Sewar';
  const correctPassword = 'sewar123';

  const showAlert = (message) => {
    alert(message);
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
    setIsUsernameCorrect(text === correctUsername);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordCorrect(text === correctPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const fetchData = async () => {
    if (username === '' || password === '') {
      showAlert('Login Failed: Empty inputs. Please try again.');
    } else {
      const respond = await logIn(username, password);
      if (respond.status) {
        try {
          navigate(`/mainForAdmin/mainAdminPage?name=${respond.user.name}`);
        } catch (error) {
          console.error('Error saving user details', error);
        }
      } else {
        showAlert('Login Failed: Incorrect username or password. Please try again.');
      }
    }
  };

  const handleLogin2 = () => {
    fetchData();
  };

  return (
    <SC.Container2>
      <SC.Container3>
        <SC.InputContainer>
          <SC.LogInTitle>{t('logIn')}</SC.LogInTitle>
          <SC.Label1>{t('UserName')}</SC.Label1>
          <SC.InputWrapper>
            <SC.Input1
              placeholder={t('EnterUserName')}
              onChange={(e) => handleUsernameChange(e.target.value)}
              value={username}
            />
         {isUsernameCorrect && <IoCheckmarkCircle size={24} color="green" />}          </SC.InputWrapper>
        </SC.InputContainer>
        <SC.InputContainer>
          <SC.Label1>{t('Password')}</SC.Label1>
          <SC.InputWrapper>
            <SC.Input1
              placeholder={t('EnterPassword')}
              onChange={(e) => handlePasswordChange(e.target.value)}
              value={password}
              type={isPasswordVisible ? 'text' : 'password'}
            />
            <button onClick={togglePasswordVisibility} style={{ background: 'none', border: 'none' }}>
               {isPasswordVisible ? <IoEyeOff size={24} color="#73224B" /> : <IoEye size={24} color="#73224B" />}            </button>
          </SC.InputWrapper>
        </SC.InputContainer>
        <SC.LoginButton onClick={handleLogin2}>
          <SC.ButtonText2>{t('LogInButton')}</SC.ButtonText2>
        </SC.LoginButton>
      </SC.Container3>
    </SC.Container2>
  );
};

export default LogIn;