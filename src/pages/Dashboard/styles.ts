import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 232px;
  gap: 24px;

  @media(max-width: 720px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContainerSections = styled.div`
  background-color: ${props => props.theme.dashboard.background_graphics_container};
  padding: 16px 24px 42px 24px;
  border-radius: 8px;
`;

export const TitleSections = styled.strong`
  display: block;
  font-size: 14px;
  margin-bottom: 24px;
  text-align: end;

  button {
    margin-left: 8px;
    padding: 8px;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${props => props.theme.dashboard.filter_button_background};
    color: rgba(255,255,255,0.8);
    cursor: pointer;

    &.active {
    background-color: ${props => props.theme.dashboard.filter_button_background_active};
  }
  }

  @media (max-width: 720px) {
    text-align: start;
    margin-bottom: 48px;
  }
`;

export const BtnArea = styled.div`
  margin-top: 8px;
`;

export const Graphics = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const LastSalesArea = styled.div`
  background-color: ${props => props.theme.dashboard.background_graphics_container};
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 12px;
  position: fixed;
  right: 0;
  width: 232px;
  min-height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
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

 @media(max-width: 720px) {
   position: initial;
   overflow: hidden;
   min-height: auto;
   max-height: auto;
   width: 100%;
   padding: 24px 0px;
 }
`;

export const LastSalesAreaCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media(max-width: 720px) {
    flex-direction: row;
    overflow: auto;
  }
`;

export const TitleLastSales = styled.strong`
  display: block;
  text-align: center;
`;

export const ResumeBalanceArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SalesArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    gap: 32px;
    flex-direction: column;
    align-items: initial;
    justify-content: initial;
  }
`;

export const SalesDaily = styled.div`
  width: 100%;
  height: 280px;

  @media (max-width: 720px) {
    margin-left: -18px;
  }
`;

export const AverageTicket = styled.div`
  background-color: ${props => props.theme.dashboard.filter_button_background};
  margin-top: 24px;
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;

  span {
    font-size: 16px;
  }

  strong {
    font-size: 18px;
  }
`;

export const TableRanking = styled.table`
  border-collapse: collapse;
  width: 660px;
  margin-left: 64px;

  @media (max-width: 720px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const TableLine = styled.thead`
`;

export const TableLineItem = styled.th`
  text-align: start;
  padding-bottom: 16px;
`;

export const TableContent = styled.tbody`
&:nth-child(odd) {
    background-color: ${props => props.theme.dashboard.filter_button_background};
  }
`;

export const TableContentItem = styled.td`
  padding: 8px;
`;
