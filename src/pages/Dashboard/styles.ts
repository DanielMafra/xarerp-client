import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 232px;
  gap: 24px;
`;

export const ContainerSections = styled.div`
  background-color: #22222f;
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
    background-color: #191925;
    color: rgba(255,255,255,0.8);
    cursor: pointer;

    &.active {
    background-color: #8884d8;
  }
  }
`;

export const Graphics = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const LastSalesArea = styled.div`
  background-color: #22222f;
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
`;

export const SalesDaily = styled.div`
  width: 100%;
  height: 280px;
`;

export const AverageTicket = styled.div`
  background-color: #191925;
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
`;

export const TableLine = styled.thead`
`;

export const TableLineItem = styled.th`
  text-align: start;
  padding-bottom: 16px;
`;

export const TableContent = styled.tbody`
&:nth-child(odd) {
    background-color: #191925;
  }
`;

export const TableContentItem = styled.td`
  padding: 8px;
`;
