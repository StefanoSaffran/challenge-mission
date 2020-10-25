import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import Input from '../Input';

import { Mission } from '~/assets';

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
        <button type="button">C</button>
      </RightNav>
    </Wrapper>
  </Container>
);

export default memo(Header);
