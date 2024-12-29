import styled from 'styled-components';
import DropDownPicker from 'react-dropdown';

export const SearchContainer = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin-top: 10px;
`;

export const SearchInput = styled.input`
  font-size: 20px;
  color: #b30059;
  flex: 1;
  border: none;
  outline: none;
  &::placeholder {
    color: #b3b3b3;
  }
`;

export const SearchButton = styled.button`
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ContainerOneM = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cccccc;
  padding: 10px;
  justify-content: center;
  height: 100%;
`;




export const BackArrow = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  color: #73224B;
  cursor: pointer;
  padding: 0;
  display: flex;

  &:hover {
    color: #b30059;
  }
`;

export const Title = styled.span`
  font-size: 18px;
`;

export const PhoneInput = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const PhoneInput2 = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width:100px;
`;

export const InputsContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  margin-top: 10px;
  width: auto;
  

`;

export const DateLabel = styled.span`
  font-size: 18px;
  color: #73224B;
  margin-right: 10px;
  margin-left: 10px;
  font-weight: bold;
`;

export const Date = styled.span`
  font-size: 18px;
  color: #000;
`;

export const ScrollContainer = styled.div`
  margin-top: 20px;
  border-top: 2px solid #73224b;
  padding: 10px;
  overflow-y: auto;
`;

export const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #73224b;
  margin-right: 10px;
  margin-left: 10px;
`;

export const DetailsContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  align-self: flex-start;
`;

export const Value = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
`;

export const PickerContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SaveButton = styled.button`
  background-color: #73224b;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 40px;
  align-self: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NoteButton = styled(SaveButton)`
  margin-left: 5px;
`;

export const SaveButtonText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const NoteButtonText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid #73224b;
  width: 80%;
  align-self: center;
  padding: 10px;
  flex-direction:column;
`;

export const ModalSaveButton = styled.button`
  background-color: #73224b;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 5px;
  border: none; /* Remove the default button border */
  cursor: pointer; /* Add pointer cursor for better UX */
`;

export const ModalSaveButtonText = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: #73224B;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


export const ExitButtonText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;


export const ModalContainer2 = styled(ModalContainer)`
  width: 90%;
  height: 80%;
  margin: 100px;
`;

export const ModalContent = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`;

export const ModalTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const ModalInput = styled.textarea`
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  height: 100px;
`;

export const StyledDropDownPicker = styled(DropDownPicker)`
  height: 50px;
  background-color: #fff;
  border-color: #73224b;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 250px;
  align-self: center;
`;

export const StyledDropDownPickerLabel = styled.span`
  color: #73224b;
  font-size: 16px;
`;