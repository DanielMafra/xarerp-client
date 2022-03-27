import * as C from './styles';

type Options = {
  name: string;
  value: string;
}

type SelectProps = {
  label: string;
  dataOptions: Options[];
  [key: string]: any;
}

const Select = ({ label, dataOptions, ...rest }: SelectProps) => {
  return (
    <C.SelectContainer>
      <C.SelectTitle>{label}</C.SelectTitle>
      <C.Select {...rest}>
        <C.Option>Selecione</C.Option>
        {dataOptions.map((item, index) => (
          <C.Option value={item.value} key={index}>{item.name}</C.Option>
        ))}
      </C.Select>
    </C.SelectContainer>
  );
}

export default Select;
