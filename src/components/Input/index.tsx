import React, { InputHTMLAttributes, FC } from 'react';

import { IoMdSearch } from 'react-icons/io';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: boolean;
}

const Input: FC<IInputProps> = ({ name, label, icon, ...rest }) => {
  return (
    <Container>
      <input id={name} name={name} {...rest} />
      {label && <label htmlFor={name}>{label}</label>}
      {icon && <IoMdSearch size={20} />}
    </Container>
  );
};

export default Input;
