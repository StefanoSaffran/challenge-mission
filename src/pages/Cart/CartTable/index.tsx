import React, { useMemo } from 'react';

import { MdRemoveShoppingCart } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import {
  ProductTable,
  Total,
  EmptyCart,
  StartShopping,
  TableWrapper,
} from './styles';
import Tr from './Tr';

import { useCart } from '~/contexts/cart';
import Button from '~/components/Button';
import { formatCurrency } from '~/utils';

const Table = () => {
  const history = useHistory();
  const { cart, getTotal, removeAll } = useCart();

  const total = useMemo(() => getTotal(), [getTotal]);

  function handleRedirectToDashboard() {
    history.push('/');
  }

  function handleCheckout() {
    removeAll();
  }
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart>
          <MdRemoveShoppingCart size={200} />

          <div>
            <h2>Oops...</h2>
            <p>Seu carrinho esta vazio!</p>
            <StartShopping onClick={handleRedirectToDashboard}>
              Comece a comprar
            </StartShopping>
          </div>
        </EmptyCart>
      ) : (
        <>
          <TableWrapper>
            <ProductTable>
              <thead>
                <tr>
                  <th>PRODUTO</th>
                  <th>QUANTIDADE</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <Tr key={product.id} product={product} />
                ))}
              </tbody>
            </ProductTable>

            <footer>
              <Button onClick={handleCheckout}>Finalizar Compra</Button>
              <Total>
                <span>TOTAL:</span>
                <strong>{formatCurrency(total)}</strong>
              </Total>
            </footer>
          </TableWrapper>
        </>
      )}
    </>
  );
};

export default Table;

{
  /* <Container>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th />
        </tr>
      </thead>

      <tbody>
        {products &&
          products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>R${product.price}</td>
              <td>
                <button type="button" onClick={() => handleAddToCart(product)}>
                  <MdAddShoppingCart />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </Container> */
}
