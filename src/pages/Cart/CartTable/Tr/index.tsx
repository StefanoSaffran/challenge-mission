import React, { useMemo } from 'react';

import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useTheme } from 'styled-components';

import { Container } from './styles';

import { useCart, CartProduct } from '~/contexts/cart';
import { formatCurrency } from '~/utils';

interface IProps {
  product: CartProduct;
}

const Tr = ({ product }: IProps) => {
  const { decrement, increment, getSubTotal, removeProduct } = useCart();
  const { colors } = useTheme();

  const subTotal = useMemo(() => getSubTotal(product.id), [
    getSubTotal,
    product.id,
  ]);

  return (
    <Container>
      <td>
        <strong>{product.name}</strong>
      </td>
      <td>
        <div>
          <button
            type="button"
            onClick={() => {
              decrement(product.id);
            }}
          >
            <MdRemoveCircleOutline color={colors.primaryDark} />
          </button>
          <input type="text" readOnly value={product.quantity} />
          <button
            type="button"
            onClick={() => {
              increment(product.id);
            }}
          >
            <MdAddCircleOutline color={colors.primaryDark} />
          </button>
        </div>
      </td>
      <td>
        <strong>{formatCurrency(+subTotal)}</strong>
      </td>
      <td>
        <button
          type="button"
          onClick={() => {
            removeProduct(product.id);
          }}
        >
          <MdDelete color={colors.primaryDark} />
        </button>
      </td>
    </Container>
  );
};
export default Tr;
