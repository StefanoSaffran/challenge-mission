import React from 'react';

import CartLayout from '../_layouts/cart';
import CartTable from './CartTable';
import { Container } from './styles';

const Cart = () => {
  return (
    <CartLayout>
      <Container>
        <CartTable />
      </Container>
    </CartLayout>
  );
};

export default Cart;
