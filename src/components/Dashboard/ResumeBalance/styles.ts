import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.dashboard.background_balances};
  border-radius: 8px;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-top: 8px;
`;

export const Value = styled.strong`
  display: block;
  font-size: 22px;
`;
