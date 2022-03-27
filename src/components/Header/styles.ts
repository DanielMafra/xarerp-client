import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${props => props.theme.colors.headerBg};
  display: flex;
  height: 70px;
  padding: 8px 16px;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.05);
  align-items: center;
  justify-content: flex-end;
  @media(max-width: 720px){
    justify-content: space-between;
  }
`;

export const MenuBtn = styled.div`
  justify-self: flex-end;
`;

export const HeaderMenuArea = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
