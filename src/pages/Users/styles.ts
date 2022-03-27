import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  width: 100%;

  @media(max-width: 480px){
    padding: 32px 0px;
  }
`;

export const Title = styled.strong`
  color: ${props => props.theme.modal_registers.font};
  font-size: 18px;
`;
