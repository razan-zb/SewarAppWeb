// styleClientPage.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const BlurredBackground = styled.div`
  position: absolute;
  height: 500px;
  width: 300px;
  z-index: 1;
  filter: blur(10px); /* Adjust the blur level */
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const CardImage = styled.img`
  height: 500px;
  width: 300px;
  border-radius: 15px;
  z-index: 2;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
`;

export const TextSection = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #73224B;
  margin-bottom: 10px;
  text-align: left;
  font-family: 'CustomFontName6';
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 24px;
  margin-bottom: 15px;
  text-align: left;
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #73224B; 
`;

export const ButtonText = styled.span`
  color: #fff; 
  font-size: 16px;
  font-weight: bold;
`;

export const HeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const FormContainer = styled.div`
  display:flex;
  background-color: #fff; 
  border-radius: 8px;
  padding: 20px;
  flex-direction:column;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 150px;
    gap:10px;

`;

export const Input1 = styled.input`
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 10px;
  width:90%;
  background-color: #fff; /* White background for inputs */
`;

export const Button = styled.button`
  background-color: #73224B; 
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width:96%;

`;

export const ContactDetails = styled.div`
  padding: 10px;
`;

export const ContactText = styled.p`
  font-size: 16px;
  color: #73224B; /* Dark grey text color for contact details */
  margin-bottom: 10px;
`;

export const ContactContainer = styled.div`
  background-color: #cccccc; 
  height: 90vh;
`;

export const EmptyView = styled.div``;

export const StyledFlatList1 = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

export const Card1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(115, 34, 75, 0.5);
  align-self: center;
`;

export const CardName = styled.p`
  font-size: 18px;
  color: #999999;
  font-weight: bold;
  font-family: Cursive;
`;

export const TitleForPage5 = styled.h1`
  font-size: 28px;
  color: #73224B;
  padding: 4px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  font-family: 'CustomFontName5';
`;

export const TitleForPage6 = styled.h1`
  font-size: 26px;
  color: #73224B;
  padding: 4px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'CustomFontName6';
`;

export const TitleForPage7 = styled.h1`
  font-size: 26px;
  color: #73224B;
  padding: 4px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'CustomFontName7';
`;

export const TitleForPage = styled.h1`
  font-size: 26px;
  color: #73224B;
  padding: 4px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'CustomFontName1';
`;

export const TitleForPage1 = styled.h1`
  font-size: 26px;
  color: #73224B;
  padding: 4px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'CustomFontName2';
`;

export const TitleForPage2 = styled.h1`
  font-size: 26px;
  color: #73224B;
  padding: 4px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'CustomFontName3';
`;

export const TitleForPage3 = styled.h1`
  font-size: 26px;
  color: #73224B;
  padding: 4px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'CustomFontName4';
`;