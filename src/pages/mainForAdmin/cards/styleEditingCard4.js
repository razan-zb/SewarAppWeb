import styled from 'styled-components';

// Responsive width
const width = window.innerWidth;
export const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: #73224b;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5e1b3e;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;
// Styled Video for web
export const StyledVideo2 = styled.video`
  width: 80%;
  height: 500px;
  background-color: black;
  display: block;
  margin: 0 auto;
`;
export const ContactContainer = styled.div`
  background-color: #f3d8e6; 
  height: 95%;
  background-color: #cccccc; 
  height: 95%;
  justify-content: center;

`;
export const ContactText = styled.text`
  font-size: 16px;
  color: #73224B; 
  margin-bottom: 10px;
`;

export const ContactDetails = styled.div`
  padding:10px;

`;
export const HeaderTitle = styled.text`
  font-size: 20px;
  font-weight: bold;
  color: white; 

`;
export const Header = styled.div`
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #73224B; 
`;
// Scroll Container for horizontal scrolling
export const ScrollCon = styled.div`
  display: flex;
  overflow-x: auto;
  height: 300px;
  scroll-behavior: smooth;
  width: 100%;
  scroll-snap-type: x mandatory;
  gap: 0; /* Remove any spacing between images */
  
  & > div {
    scroll-snap-align: start;
  }
`;

// Background Image with Blur
export const BlurredBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: blur(8px);
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const Card = styled.div`
  width: 200px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(115, 34, 75, 0.5);
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;
export const StyledFlatList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 10px 0 10px;
  justify-content: center;
  `
;
// Card Image
export const CardImage = styled.img`
  height: 320px;
  width: 150px;
  object-fit: contain;
  z-index: 2;
`;

// Container for the page
export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
`;
export const FixedHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: #fff; /* Same as page background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for separation */
`;
export const EditableInput = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  padding: 10px;
  resize: none;
`;
export const DescriptionText = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 24px;
  margin-bottom: 15px;
  text-align: left;
`;


export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
  object-fit: cover;
`;
export const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #73224B;
  margin-bottom: 10px;
  text-align: left;
  font-family: 'CustomFontName6';
`;
export const TextSection = styled.div`
  width: 100%;
  padding: 0 10px;
`;
export const Button33 = styled(Button)`
  margin-top: 20px;
  background-color: #66004d;
`;

// Small container for row layout
export const Smallcontainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  height: 50px;
`;

// Title for Page
export const TitleForPage = styled.h2`
  font-size: 24px;
  color: #73224b;
  font-weight: bold;
  margin-left: 20px;
  font-family: 'CustomFontName4', Arial, sans-serif;
`;

// Scroll container for vertical scrolling
export const ScrollContainer = styled.div`
  background-color: #cccccc;
  padding: 20px;
`;

// Button with circular style
export const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #73224b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;

// Header container
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
`;

// Logo
export const Logo = styled.img`
   width: 55px;
  height: 55px;
`;
export const StyledFlatList1 = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

// Menu Container for dropdown
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  height: 600px;
  z-index: 1000;
`;


// Menu Text
export const MenuText = styled.span`
  font-size: 30px;
  padding: 10px;
  font-weight: bold;
  color: #73224b;
  cursor: pointer;
  font-family: 'CustomFontName6', Arial, sans-serif;
`;


export const Input1 = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 0 10px;
  font-size: 16px;
`;

export const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;



export const ButtonText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

// Details Section
export const Details = styled.div`
  background-color: #cccccc;
  opacity: 0.7;
  padding: 20px;
  width: 100%;
  text-align: center;
`;

// Price Text
export const PriceText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #73224b;
`;


export const miniView = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ArrowButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  align-self: center;
  margin-top: ${({ activeTab }) => (activeTab ? '-250px' : '-70px')};
`;

export const DotContainer = styled.div`
  flex-direction: row;
  bottom: 10px;
  align-self: center;
  color:white;
  margin-top:15px;
`;
export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#000' : '#fff')};
  margin: 0 4px;
`;
export const HeaderWrapper = styled.div`
  z-index: 1000;
  position: relative;
`;




export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const TitleForPage6=styled.text`
  font: 30px Arial;
  color:#73224B;
  padding:4px;
  font-style:italic;
  align-self:center;
  margin-top:10px;
  font-weight: bold;
  fontFamily: 'CustomFontName6'

`

export const Card1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(115, 34, 75, 0.5); /* Replaces shadow-color, shadow-opacity, and shadow-radius */
  cursor: pointer; /* Adds a pointer cursor for clickable effect */
  transition: transform 0.2s ease; /* Smooth scaling effect on hover */

  &:hover {
    transform: scale(1.05); /* Slightly enlarges the card on hover */
  }
`;

export const PageContainer2 = styled.div`
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ViewSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Button44 = styled.button`
  margin-top: 10px;
  background-color: #66004d;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #7a0060;
  }
`;

export const ImageContainer = styled.div`
  background-color: #cccccc;
  height: 700px;
  justify-content: center;
  align-items: center;
  width: 430px;
`;

export const ImageItem = styled.img`
    width: 100%;
    height: 700px;
    z-index: 3;
    resize-mode:contain;
`;

export const BlurredBackground3 = styled.div`
  width: 100%;
  height: 700px;
  z-index: 1;
  position: absolute;
  filter: blur(10px);
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DetailText = styled.text`
    font-size: 24px;
    color: #73224B;
    fontFamily: 'CustomFontName4';
    text-align: center;
    margin-bottom:5px;


`;

export const DetailTextDiscrebtion = styled(DetailText)`
    width: 400px;
    margin-top:20px;
`;
