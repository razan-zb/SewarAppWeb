import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center; 
  width: 100%;
  height: 100vh; 
  background-color: #f0f0f0; 
  overflow: hidden;

`;

export const Container4 = styled.div`
  display: flex;
  background-color: #cccccc;
  flex-direction: row;
  gap: 20px;
  margin-left: 5px;
  margin-top: -80px; /* Adjusted for web */

`;

export const ContainerScrollView = styled.div`
  display: flex;
  flex-direction: column; 
  flex: 1; 
  padding: 20px; 
  width: 90%;
  height: 100%; 
  background-color: #cccccc;
  overflow-y: auto; 


`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  gap: 10px;
  flex-wrap: wrap; 
`;

export const PageName = styled.span`
  font-size: 18px;
  color: #73224B;
  font-family: 'CustomFontName4';
`;

export const MiniCard = styled.div`
  background-color: #f0f0f0; 
  width: 100px; 
  height: 100px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #73224B; 
`;

export const DeleteButton = styled.button`
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const DeleteText = styled.span`
  color: white;
  font-size: 12px;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1;
  background-color: #fff;
`;

export const TopContainer = styled.div`
  display: flex;
  height:40px;
  align-items: center;
  margin-left:20px;
  font-size:24px;
  cursor:pointer;

  
`;

export const CalendarStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
export const CalendarDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? '#73224B' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  cursor: pointer;
  font-size: 14px;
  border: 1px solid ${(props) => (props.selected ? '#73224B' : '#e0e0e0')};

  &:hover {
    background-color: #e8b0cc;
    color: #fff;
  }
`;
export const CloseButton = styled.button`
  padding: 10px;
  background-color: #0073e6;
  border-radius: 5px;
  width: 80px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const NamingModal = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NamingModalContent = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100px;
`;

export const TextInputs = styled.input`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const SaveButton = styled.button`
  background-color: #3498db;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

export const SaveButtonText = styled.span`
  color: white;
  font-weight: bold;
`;

export const CancelButtonText = styled.span`
  color: white;
`;
export const CancelButton = styled.button`
  background-color: gray;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;

export const TaskContainer = styled.div`
flex: 1;
padding: 20px;
`;

export const TaskTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #73224B;
  font-family: 'CustomFontName6';
  text-align: left;
`;

export const ScrollContainer = styled.div`
  overflow-y: auto;
  max-height: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  margin-top:10px;
`;

export const TaskItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TaskText = styled.span`
  font-size: 16px;
  margin-left: 20px;
`;

export const HourText = styled.span`
  font-size: 16px;
  color: #999;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
`;

export const AddButton2 = styled.button`
  background-color: #73224B;
  border-radius: 30px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  align-self: center;
  margin-top: 20px;
  color: white;
  font-weight: bold;
`;

export const AddButton = styled.button`
  background-color: #73224B;
  padding: 10px;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Ensures the button stays at the bottom-right of the viewport */
  bottom: 20px; /* Distance from the bottom */
  right: 20px; /* Distance from the right */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000; /* Ensures the button appears above other content */
`;

export const ModalContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

export const ModalTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  align-self: center;
`;

export const ModalInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
`;

export const ModalButton = styled.button`
  background-color: #73224B;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  margin-top: 5px;
`;

export const CardStyle = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CalendarContainer = styled.div`
  border-radius: 10px;
  border: 3px solid #73224B;
  padding:10px;

`;

export const DrawablePageContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  position: relative;
`;

export const ButtonsInDraw = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 5px;
`;

export const TextInputInDraw = styled.input`
  margin-left: 30px;
  font-size: 18px;
`;

export const TextInDraw = styled.span`
  font-size: 18px;
`;

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 350px;
  margin-top: -175px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  background-color: #f1f1f1;
`;