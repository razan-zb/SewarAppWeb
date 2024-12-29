import styled from 'styled-components';

// Updated for web, dynamic screen width and height
const cardWidth = window.innerWidth - 48;

export const SafeAreaView1 = styled.div`
  background-color: #ffe6f2;
`;

export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cccccc;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
flex: 1;
background-color: #ffe6f2;
padding-horizontal: 16px;
padding-top: 40px;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #333;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    display: flex;
    margin-top: 5px;
  
`;

export const Card = styled.div`
  background-color: #cccccc;
  cursor: pointer;

  @media (min-width: 600px) {
    display: flex;
    margin-top: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const CardForWeb2 = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  padding: 10px;
  margin-top:30px;
`;

export const Card1 = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    text-align:center;
    padding:20px;
  }
`;

export const Card2 = styled(Card)`
  width: ${cardWidth / 2}px;
  height: 330px;
  align-self: flex-end;
  @media (max-width: 600px) {
    text-align:center;
    align-self: center;
    height: 350px;
    margin-top:2px;

  }

  
`;

export const Card3 = styled(Card)`
  height: 150px;
  width: 95%; 
`;

export const Card4 = styled(Card)`
  height: 150px;
  width: 95%;
  margin-top: 30px;
`;

export const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${cardWidth / 2}px;
  height: 320px;
  justify-content: space-between;

  @media (min-width: 600px) {
    height: 300px;
    width: 400px;
    flex-direction: row;
    align-items: flex-end;

  }

  @media (max-width: 600px) {
    gap:5px;
    height: 350px;
    align-items: center;
    text-align:center;


  }
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const CardTitle = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #73224B;

  @media (min-width: 600px) {
    margin-top: 10px;
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #73224b;
  }
`;

// Bottom bar styling
export const TabText = styled.span`
  font-size: 16px;
  color: #333;
`;

export const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 80px;
  border-top: 1px solid #ddd;
`;

export const TabButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
  color: ${(props) => (props.active ? '#73224B' : '#ccc')};
`;

export const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  background-color: #cccccc;
`;

export const TopContainer = styled.div`
  display: flex;
  height:40px;
  align-items: center;
  font-size:24px;
  cursor:pointer;
  align-self: flex-start;


  
`;

export const Card2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cccccc;
  padding: 20px;
  min-height: 100vh; /* Ensure it takes the full viewport height */
  
  @media (min-width: 600px) {
    /* For larger screens */
    padding: 40px 80px;
    justify-content: flex-start;
  }
`;


export const BackArrow = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  color: #73224B;
  cursor: pointer;
  padding: 0;


  &:hover {
    color: #b30059;
  }
`;

// Profile
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edc4d9;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-top: 120px;
`;

export const ProfileName = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ProfileInfo = styled.p`
  font-size: 18px;
  color: gray;
`;

export const ProfileButton = styled.button`
  background-color: #73224b;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 160px;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const ProfileButtonText = styled.span`
  color: white;
  font-size: 18px;
`;

export const TextLabel = styled.span`
  font-size: 20px;
  margin-top: 100px;
  font-weight: bold;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Enable vertical scrolling */
  margin-bottom: 16px;
  margin-top: 30px;
  width: 400px;
  max-height: 500px; /* Set a maximum height if needed */
`;

export const ContentContainer = styled.button`
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 6px rgba(115, 34, 75, 0.4); /* Replacing shadow-color */
  margin: 10px;
  border: none; /* Remove button border */
  cursor: pointer; /* Add pointer cursor */
  &:hover {
    transform: scale(1.02); /* Slight scaling on hover */
  }
`;

export const CustomName = styled.span`
  font-size: 18px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Replacing Platform-specific logic */
`;

export const NoDataText = styled.span`
  font-size: 16px;
  color: #73224B;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`;
export const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #73224b;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  cursor: pointer;
  border: none;

  @media (min-width: 600px) {
    position: fixed;
    bottom: 40px;
    right: 40px;
  }
`;
