import React, { PropsWithChildren } from 'react';

import { Container, Wrapper } from './styles';

import Header from '~/components/Header';
import SideBar from '~/components/SideBar';

const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
          {children}
        </Wrapper>
      </Container>
    </>
  );
};

export default DefaultLayout;
