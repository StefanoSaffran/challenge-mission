import React, { PropsWithChildren } from 'react';

import { Container, Wrapper } from './styles';

import Header from '~/components/Header';

const CartLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
};

export default CartLayout;
