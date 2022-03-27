import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.contentBg};
  color: ${props => props.theme.colors.font_default};
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
