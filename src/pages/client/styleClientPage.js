// styleClientPage.js
import styled from 'styled-components';

export const Mario = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('/path/to/your/image.jpg'); // Replace with the actual path
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailText = styled.text`
    font-size: 24px;
    color: #73224B;
    fontFamily: 'CustomFontName4';
    text-align: center;
    margin-bottom:5px;
    margin-top: 10px;

`;
export const TextMario = styled.h1`
  font-style: italic;
  font-weight: bold;
  font-size: 40px;
  font-family: monospace;
  color: #fff;
`;

// Container for the page
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

// Video components
export const StyledVideo = styled.video`
  width: 80%;
  height: 200px;
  background-color: black;
  margin: 0 auto;
`;

export const ViewForVideo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewForVideo2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const StyledVideo3 = styled.video`
  width: 100%;
  height: 400px;
  max-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: contain;
`;

export const StyledVideo2 = styled.video`
  background-color: #cccccc;
  margin: 10px auto;
  display: block;
  box-shadow: 0px 5px 10px rgba(115, 34, 75, 0.5);

  ${(props) =>
    props.isLarge
      ? `
    width: 300px;
    height: 500px;
    object-fit: fill;
  `
      : `
    width: 80%;
    height: 500px;
  `}
`;

// Scrollable container
export const ScrollCon = styled.div`
  display: flex;
  overflow-x: auto;
  height: 300px;

  @media (min-width: 600px) {
    height: 400px;
  }
`;

// General containers
export const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin-top: 15px;
`;

// Card and category styles
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
  position: relative; /* To position the blurred background inside the card */
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(115, 34, 75, 0.5);
  overflow: hidden; /* Ensures the blurred background doesn't overflow the card */
  width: 220px; /* Card width */
  height: 320px; /* Card height */
`;

export const CategoryBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 10px;
  height: 30px;
  overflow-x: auto;
`;

export const CategoryButton = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const CategoryText = styled.span`
  font-size: 16px;
  color: #73224b;
`;

// Header and menu styles
export const HeaderContainer = styled.div`
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
`;

export const HeaderWrapper = styled.div`
  z-index: 1000;
  
`;

export const Logo = styled.img`
  width: 55px;
  height: 55px;
`;

export const MenuContainer = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 800px;
  width: 100%;

  @media (min-width: 600px) {
    width: 600px;
    height: 600px;
  }
`;

export const MenuText = styled.h1`
  font-size: 30px;
  padding: 10px 0;
  font-weight: bold;
  color: #73224b;
  margin-top: 20px;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowIcon = styled.div`
  margin-left: 10px;
`;

// Other reusable styles
export const TitleForPage = styled.h2`
  font-size: 24px;
  color: #73224b;
  font-weight: bold;
  margin-left: 20px;
  font-family: 'Arial, sans-serif';
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #73224B;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f3f3f3;
    color: #5a1b3b;
    transform: scale(1.1); /* Slightly enlarges the button */
  }

  &:active {
    transform: scale(1); /* Resets scaling on click */
  }
`;

export const StyledButtonIcon = styled.span`
  margin-left: 5px;
  font-size: 20px; /* Adjust size for the arrow icon */
`;

export const PriceText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #73224b;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#000' : '#fff')};
  margin: 0 4px;
`;

// Images
export const CardImage = styled.img`
  height: 300px;
  width: 200px;
  object-fit: contain;
  z-index: 2;
`;

// Blurred Background with Web-Compatible Styles
export const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  z-index: 1; /* Place it below the CardImage */
`;


export const MaroiImage = styled.img`
    width: 400px;
    height: 230px;
`;

// Scroll Container for Web
export const ScrollContainer = styled.div`
  background-color: #cccccc;
  overflow-x: auto; 
  display: flex; 
  flex-wrap: nowrap; 
  width: 100%;

`;

// First View with Responsive Layout
export const FirstView = styled.div`
  width: 100%;
  height: ${props => (props.width > 600 ? '600px' : '230px')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const firstView = styled.div`
  width: 100%; 
  height: 230px; /* Default height */
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    width: 100%; /* Adjust width as needed */
    height: 600px;
  }
`;



// Styled List for Web
export const StyledFlatList = styled.div`
  display: flex;
  flex-direction: row; /* Align items horizontally */
  padding: 10px 0; /* Add padding */
  overflow-x: auto; /* Enable horizontal scrolling */
  gap: 10px; /* Space between items */
`;

export const PageContainer2 = styled.div`
  background-color: #cccccc;
  flex-direction: column;
  width: 100%;

`;
export const ViewSection=styled.div`
    flex-direction: column;
 
`
export const ImageItem = styled.image`
    width: 100%;
    height: 700px;
    z-index: 3;
    resize-mode:contain;

  
`;


export const Details=styled.div`
  background-color: #cccccc;
  opacity: 0.7;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-top: -10px;
    margin-top: -10px;
    opacity: 1;


`



export const DetailTextDiscrebtion = styled(DetailText)`
    width: 400px;
    margin-top:20px;
`;
export const ImageContainer = styled.div`
    background-color: #cccccc;
    height: 700px;
    justify-content: center;
    align-items: center;
    width: 430px;
`;
export const BlurredBackground2 = styled.div`
  width: 100%;
  z-index: 1;
  filter: blur(0px);
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const BlurredBackground3 = styled(BlurredBackground2)`
    width: 100%;
    height: 700px;
    z-index: 1;
    position: absolute;

`;

export const ArrowButton=styled.button`
   align-self:center;
   border-radius: 5px;
   width:40px;
   height: 30px;
   align-items: center;
   justify-content: center;
   background-color:  #b3b3b3;
   margin-bottom:10px;
   z-index:2000;
   margin-top:-200px;
   


`

