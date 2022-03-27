import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 32px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
  position: relative;
  background-color: ${props => props.theme.table_registers.background};
  @media(max-width: 480px){
    border-radius: 0;
  }
`;

export const TitleArea = styled.div`
  border: 1px solid rgba(0,0,21,0.125);
  padding: 8px 16px;
  border-radius: 8px 8px 0px 0px;
`;

export const Title = styled.strong`
  display: block;
  color: ${props => props.theme.table_registers.title_table};
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar:horizontal {
		height: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0,0,0,0.3);
	}
  &::-webkit-scrollbar-track {
		background-color: rgba(0,0,0,0.08);
    }
`;

export const Table = styled.table`
  width: 100%;
  background-color: ${props => props.theme.table_registers.item_background_one};
  padding: 8px 16px;
  border-collapse: collapse;
  border: 1px solid rgba(0,0,21,0.125);
  @media(max-width: 720px){
    min-width: 480px;
 tr td:first-child,
 th:first-child {
  position: -webkit-sticky;
  position: sticky;
  width:280px;
  left: 0;
  background-color: #24252f;
  border: 1px solid transparent;
}
  }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => `${props.width}px` ?? "auto"};
  padding: 10px 16px;
  text-align: left;
  color: ${props => props.theme.table_registers.item_font_color};
`;

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

export const LoadingPage = styled.div`
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
