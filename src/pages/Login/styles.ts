import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  background-color: ${props => props.theme.login.background};
  padding: 32px;
  width: 90vw;
  max-width: 390px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  color: ${props => props.theme.login.title};
`;

export const Description = styled.p`
  color: ${props => props.theme.login.description};
  margin-top: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const Input = styled.input`
  background-color: ${props => props.theme.inputs.background};
  color: ${props => props.theme.inputs.text};
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${props => props.theme.inputs.border};

  &::placeholder {
    color: ${props => props.theme.inputs.text}
  }

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.login.button};
  color: #fff;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 24px;
  transition: all .3s ease;

  &:hover {
    background-color: ${props => props.theme.login.button_hover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }

  &:hover:disabled {
    background-color: ${props => props.theme.login.button};
  }
`;

export const Error = styled.p`
  color: ${props => props.theme.colors.danger};
  margin: 8px 0px;
`;
