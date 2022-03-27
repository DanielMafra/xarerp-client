import styled from 'styled-components';

export const PaginationArea = styled.div`
  background-color: ${props => props.theme.table_registers.background};
  border: 1px solid rgba(0,0,21,0.125);
  padding: 12px;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 4px 0px;
    padding: 4px 0px;
  }
  p {
    margin-right: 12px;
    color: ${props => props.theme.table_registers.title_table};
  }
`;
