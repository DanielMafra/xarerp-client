import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  width: 100%;
  @media(max-width: 480px){
    padding: 32px 0px;
  }
`;

export const NewAndSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 720px){
    width: 90%;
    margin: 0 auto;
    flex-direction: column-reverse;
  }
`;

export const NewButton = styled.button`
  display: flex;
  background-color: #2eb85c;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s ease;
  @media(max-width: 720px){
    margin-bottom: 16px;
    align-self: flex-end;
  }
`;
