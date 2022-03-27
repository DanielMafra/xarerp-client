import styled from 'styled-components';

export const Container = styled.div`
  input {
    width: 360px;
    padding: 8px 8px 8px 36px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.modal_registers.input_border};
    outline: none;
    background-image: ${props => props.theme.icons.search};
    background-size: 18px;
    background-position: 8px center;
    background-repeat: no-repeat;
    background-color: ${props => props.theme.modal_registers.input_background};
    color: ${props => props.theme.modal_registers.input_font};
    ::placeholder {
      font-style: italic;
    }
  }
  @media(max-width: 480px){
      width: 100%;
      input {
        width: 100%;
      }
    }
`;
