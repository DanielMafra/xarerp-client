import styled from 'styled-components';

export const Container = styled.aside<{ width: number }>`
  background-color: ${props => props.theme.menu.background};
  color: ${props => props.theme.menu.font};
  width: ${props => props.width}px;
  height: 100vh;
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 2px 0px 4px rgba(0,0,0,0.1);
  @media(max-width: 720px){
    position: absolute;
    z-index: 9999;
  }
`;

export const MenuButton = styled.button`
 background-color: transparent;
 padding: 8px 0;
 cursor: pointer;
 outline: none;
 border: none;
`;

export const MenuNavigation = styled.div`
 margin-top: 16px;
 padding-bottom: 16px;
 overflow-x: hidden;
 overflow-y: auto;
 height: 100%;
 &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
