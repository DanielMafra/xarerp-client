import styled from 'styled-components';

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
