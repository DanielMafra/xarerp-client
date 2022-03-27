import * as C from './styles';

type InputProps = {
  label: string;
  placeholder: string;
  [key: string]: any;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <C.InputContainer>
      <C.InputTitle>{label}</C.InputTitle>
      <C.Input
        placeholder={placeholder}
        {...rest}
      />
    </C.InputContainer>
  );
}

export default Input;
