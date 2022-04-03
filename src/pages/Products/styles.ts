import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  width: 100%;

  @media(max-width: 480px){
    padding: 32px 0px;
  }
`;

export const NewCategoryArea = styled.div`
  background-color: ${props => props.theme.table_registers.item_background_one};
  color: ${props => props.theme.colors.font_default};
  padding: 16px;
  border-radius: 8px;

  p {
    font-size: 14px;
    margin-top: 8px;
    color: ${props => props.theme.colors.danger};
  }
`;

export const ButtonNewCategory = styled.button`
  width: 120px;
  padding: 4px;
  background-color: #2eb85c;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const ButtonAddNewCategory = styled.button`
  margin-left: 8px;
  height: 32px;
  padding: 0px 8px;
  font-size: 18px;
  background-color: #2eb85c;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
