import React from 'react';

import { Wrapper, Container } from './styles';

import LinkWrapper from '~/utils/LinkWrapper';

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Menu</h2>

        <LinkWrapper exact to="/">
          Catalogo
        </LinkWrapper>

        <LinkWrapper to="/register">Novo Produto</LinkWrapper>
      </Container>
    </Wrapper>
  );
};

export default SideBar;
