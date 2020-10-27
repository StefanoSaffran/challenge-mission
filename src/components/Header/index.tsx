import React, { memo } from 'react';

import { FiShoppingBag } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Wrapper, LeftNav, RightNav, Badge } from './styles';
import Input from '../Input';
import Gradient from './Gradient';

import LinkWrapper from '~/utils/LinkWrapper';
import { Mission } from '~/assets';

const Header = () => {
  const history = useHistory();
  function handleOpenCart() {
    history.push('/cart');
  }

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <LinkWrapper to="/">
            <Mission />
          </LinkWrapper>
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
};

export default memo(Header);
