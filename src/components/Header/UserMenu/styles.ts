import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const AreaMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const ImgProfile = styled.img`
  width: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Menu = styled.div`
  position: absolute;
  z-index: 9999;
  right: 16px;
  min-width: 180px;
  background-color: ${props => props.theme.user_menu.menu_background};
  margin-top: 12px;
  border-radius: 4px;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.3);
  &::after {
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${props => props.theme.user_menu.menu_background};
    position: absolute;
    z-index: 9998;
    top: -8px;
    right: 12px;
    transform: rotate(45deg);
  }
`;

export const Title = styled.span`
  display: block;
  font-weight: bold;
  font-size: 12px;
  color: ${props => props.theme.user_menu.font_title};
  margin-top: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
`;

export const ContainerLinks = styled.div`
  background-color: ${props => props.theme.user_menu.links_background};
  margin-top: 4px;
  padding: 12px 8px 12px 8px;
  &.theme {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const LinkBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  text-align: start;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 0px;
  color: ${props => props.theme.user_menu.font_item};
  cursor: pointer;
  &:nth-child(odd){
    margin-bottom: 8px;
  }
`;
