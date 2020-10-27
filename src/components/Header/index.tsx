import React, { memo, useMemo } from 'react';

import { FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import { useHistory, useLocation, Link } from 'react-router-dom';

import { Container, Wrapper, LeftNav, RightNav, Badge } from './styles';
import Input from '../Input';
import Gradient from './Gradient';

import LinkWrapper from '~/utils/LinkWrapper';
import { Mission } from '~/assets';
import { useCart } from '~/contexts/cart';

const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { cart, getTotalQuantity, filter, handleFilter } = useCart();

  function handleOpenCart() {
    history.push('/cart');
  }

  const quantity = useMemo(() => getTotalQuantity(), [getTotalQuantity]);

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <Mission />
          {pathname === '/cart' && (
            <LinkWrapper to="/" activeStyle={{}}>
              <FiArrowLeft />
              Voltar
            </LinkWrapper>
          )}
        </LeftNav>

        <RightNav>
          {pathname !== '/cart' && (
            <Input
              autoComplete="off"
              name="search"
              icon
              value={filter}
              onChange={({ target }) => handleFilter(target.value)}
              placeholder="O que você procura?"
            />
          )}
          <Badge
            type="button"
            onClick={handleOpenCart}
            hasProducts={cart.length}
          >
            <FiShoppingBag size={26} style={{ marginLeft: 15 }} />
            <sup>{quantity}</sup>
          </Badge>
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default memo(Header);
