import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Container } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: string;
  color?: string;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, type, ...rest } = props;

  return (
    <Container type={type || 'button'} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
