import React, { memo } from 'react';

import { FiShoppingBag } from 'react-icons/fi';

import { Container, Wrapper, LeftNav, RightNav, Badge } from './styles';
import Input from '../Input';
import Gradient from './Gradient';

import { Mission } from '~/assets';

function handleOpenCart() {
  // TODO - Chamar a pagina do carrinho.
}

const Header = () => (
  <Container>
    <Wrapper>
      <LeftNav>
        <Mission />
      </LeftNav>

      <RightNav>
        <Input
          autoComplete="off"
          name="search"
          icon
          placeholder="O que você procura?"
        />
        <Badge type="button" onClick={handleOpenCart} hasProducts={2}>
          <FiShoppingBag size={26} style={{ marginLeft: 15 }} />
          <sup>{3}</sup>
        </Badge>
      </RightNav>
    </Wrapper>
    <Gradient />
  </Container>
);

export default memo(Header);
