import styled from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  border-left: 6px solid ${props => props.active ? props.theme.menu.active_border : "transparent"};
  background-color: ${props => props.active ? props.theme.menu.active_background : "transparent"};
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.menu.active_background};
  }
`;

export const ItemIcon = styled.div`
  min-width: 56px;
  padding: 12px 0;
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemTitle = styled.p`
`;
