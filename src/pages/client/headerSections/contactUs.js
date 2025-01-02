import React, { useState } from 'react';
import * as S from './styleHeader';
import Header from '../header';
import { SendEmail } from '../../../helpers/api';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    if (!name || !email || !message) {
      alert('Please fill in all required fields!');
    } else {
      setLoading(true);
      const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      try {
        const result = await SendEmail(formData);
        if (result) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send the message.');
        }
      } catch (error) {
        alert('An error occurred while sending the message.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <S.PageContainer>
      <Header />
      <S.ContactContainer>
        <S.Header>
          <S.HeaderTitle>Contact Us</S.HeaderTitle>
        </S.Header>

        <S.FormContainer>
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
            rows={5} 
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