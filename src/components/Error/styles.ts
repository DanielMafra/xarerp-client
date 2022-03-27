import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  span {
    display: block;
    font-size: 16px;
    color: ${props => props.theme.colors.danger};
  }
`;
