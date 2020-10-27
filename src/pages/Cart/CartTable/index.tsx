import React from 'react';

import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useTheme } from 'styled-components';

import {
  ProductTable,
  Total,
  EmptyCart,
  StartShopping,
  TableWrapper,
} from './styles';

import { formatCurrency } from '~/utils';
import { useCart, CartProduct } from '~/contexts/cart';

const Table = () => {
  const { cart } = useCart();
  const { colors } = useTheme();

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart>
          <MdRemoveShoppingCart size={200} />

          <div>
            <h2>Oops...</h2>
            <p>Seu carrinho esta vazio!</p>
            <StartShopping to="/">Comece a comprar</StartShopping>
          </div>
        </EmptyCart>
      ) : (
        <>
          <TableWrapper>
            <ProductTable>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>AMOUNT</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product.id}>
                    <td>
                      <strong>{product.name}</strong>
                    </td>
                    <td>
                      <div>
                        <button type="button" onClick={() => {}}>
                          <MdRemoveCircleOutline
                            size={20}
                            color={colors.primary}
                          />
                        </button>
                        <input type="text" readOnly value={product.quantity} />
                        <button type="button" onClick={() => {}}>
                          <MdAddCircleOutline
                            size={20}
                            color={colors.primary}
                          />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{formatCurrency(+product.price)}</strong>
                    </td>
                    <td>
                      <button type="button" onClick={() => {}}>
                        <MdDelete size={20} color={colors.primary} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>

            <footer>
              <button type="submit">Finalizar Compra</button>
              <Total>
                <span>TOTAL:</span>
                <strong>R$120,00</strong>
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
