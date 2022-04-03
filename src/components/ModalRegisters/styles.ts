import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.modal_registers.background};
  padding: 16px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  overflow-y: auto;
  max-height: 90%;

  @media(min-width: 720px){
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.5);
  }
 }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${props => props.theme.modal_registers.separator};
`;

export const ModalTitle = styled.h4`
  color: ${props => props.theme.modal_registers.font};
  font-size: 18px;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputContainer = styled.div`
  flex: 1;
`;

export const InputTitle = styled.span`
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
  color: ${props => props.theme.modal_registers.font};
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.modal_registers.input_border};
  background-color: ${props => props.theme.modal_registers.input_background};
  color: ${props => props.theme.modal_registers.input_font};
  outline: none;
  ::placeholder {
    font-style: italic;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 7px 16px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.3);
  outline: none;
`;

export const Option = styled.option``;

export const ButtonArea = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
  margin-top: 32px;
  border-top: 1px solid ${props => props.theme.modal_registers.separator};
`;

export const Button = styled.button`
  width: 142px;
  min-height: 32px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s ease;
  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
  &.buttonSave {
    background-color: #2eb85c;
  }
  &.buttonSave:hover {
    background-color:rgb(46,164,92);
  }
  &.buttonCancel {
    background-color: rgba(0,0,0,0.3);
  }
  &.buttonCancel:hover {
    background-color: rgba(0,0,0,0.45);
  }
  &.buttonDelete {
    background-color: ${props => props.theme.table_registers.delete_button_background};
  }
  &.buttonDelete:hover {
    background-color: ${props => props.theme.table_registers.delete_button_background_hover};
  }
`;
