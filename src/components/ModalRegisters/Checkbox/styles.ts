import styled from 'styled-components';

export const Container = styled.div`
  hr {
    border: 1px solid ${props => props.theme.modal_registers.input_border};
    margin-top: 8px;
  }
`;

export const TitleArea = styled.span`
  margin-bottom: 8px;
  font-weight: 500;
  display: block;
  color: ${props => props.theme.modal_registers.font};
`;

export const Role = styled.div`
  display: flex;
  align-items: center;
`;

export const Roles = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
 
`;

export const Title = styled.span`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 500;
  display: block;
  color: ${props => props.theme.modal_registers.font};
`;

export const Input = styled.input`
  background-color: ${props => props.theme.modal_registers.input_background};
  color: ${props => props.theme.modal_registers.input_font};
  outline: none;
  &[type='checkbox'] {
    border-radius: 2px;
    width: 14px !important;
    height: 14px !important;
    margin: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: 1px solid ${props => props.theme.modal_registers.input_border};
    box-shadow: none;
    text-align: center;
    line-height: 16px;
    background: ${props => props.theme.modal_registers.input_background};
  }
  &[type='checkbox']:checked:after {
    content: '✔';
    color: ${props => props.theme.modal_registers.font};
  }
`;
