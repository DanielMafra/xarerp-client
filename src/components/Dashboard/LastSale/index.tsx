import * as C from './styles';

type LastSaleProps = {
  price: number;
  name: string;
  unity: string;
  quantity: number;
}

const LastSale = ({ price, name, unity, quantity }: LastSaleProps) => {
  const formattedPrice = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <C.Container>
      <C.Price>{formattedPrice}</C.Price>
      <C.Name>{quantity}x {name}</C.Name>
      <C.Unity>Loja: {unity}</C.Unity>
    </C.Container>
  );
}

export default LastSale;
