import styled from 'styled-components';

export const TableLine = styled.tr`
  &:nth-child(odd) {
  background: ${props => props.theme.table_registers.item_background_two};
}
`;

export const TableColumn = styled.td`
  padding: 10px 16px;
  color: ${props => props.theme.table_registers.item_font_color};
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  border-radius: 6px;
  &.editButton {
    background-color: ${props => props.theme.table_registers.edit_button_background};
  }
  &.editButton:hover {
    background-color: ${props => props.theme.table_registers.edit_button_background_hover}
  }
  &.deleteButton {
    margin-left: 8px;
    background-color: ${props => props.theme.table_registers.delete_button_background};
  }
  &.deleteButton:hover {
    background-color: ${props => props.theme.table_registers.delete_button_background_hover};
  }
`;
