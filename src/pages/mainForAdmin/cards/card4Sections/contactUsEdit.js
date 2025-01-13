import React, { useState } from 'react';
import * as S from '../styleEditingCard4';
import Header from './header';
import { SendEmail } from '../../../../helpers/api';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (!name || !email || !message) {
      alert('Empty fields!');
      return;
    }

    setLoading(true);
    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const result = await SendEmail(formData);
      if (result) {
        alert('Message sent!');
      } else {
        alert('Message failed!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.PageContainer>
      <Header />
      <S.ContactContainer>
        <S.Header>
          <S.HeaderTitle>Contact Us</S.HeaderTitle>
        </S.Header>

        <S.FormContainer onSubmit={sendEmail}>
          <S.Input1
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.Input1
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input1
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <S.Input1
            as="textarea"
            placeholder="Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <S.Button onClick={sendEmail} disabled={loading}> 
            <S.ButtonText>{loading ? 'Sending...' : 'Send Message'}</S.ButtonText>
          </S.Button>
        </S.FormContainer>

        <S.ContactDetails>
          <S.ContactText>Email: sewardesigns2024@gmail.com</S.ContactText>
        </S.ContactDetails>
      </S.ContactContainer>
    </S.PageContainer>
  );
};

export default ContactUs;