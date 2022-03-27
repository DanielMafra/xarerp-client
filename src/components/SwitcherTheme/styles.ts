import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  &.noAuth {
    align-self: flex-end;
    margin-top: 8px;
    margin-right: 8px;
  }
`;

export const SwitchButton = styled.button`
  background-color: ${props => props.theme.switcher.background};
  padding: 9px 13px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .3s ease;
  &.left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &.right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:hover {
    background-color: ${props => props.theme.switcher.hover};
  }
  &.active {
    background-color: ${props => props.theme.switcher.active};
    box-shadow: 0px 0px 2px rgba(0,0,0,0.05);
  }
`;
