import * as C from './styles';

const Error = ({ children }: { children: JSX.Element }) => {
  return (
    <C.Container>
      {children}
    </C.Container>
  );
}

export default Error;
