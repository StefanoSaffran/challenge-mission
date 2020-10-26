import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { Container } from './styles';

const Table: React.FC = () => {
  return (
    <Container>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th />
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Bicicleta</td>
          <td>R$120,00</td>
          <td>
            <button type="button">
              <MdAddShoppingCart />
            </button>
          </td>
        </tr>
        <tr>
          <td>Bicicleta</td>
          <td>R$120,00</td>
          <td>
            <button type="button">
              <MdAddShoppingCart />
            </button>
          </td>
        </tr>
        <tr>
          <td>Patinete</td>
          <td>R$120,00</td>
          <td>
            <button type="button">
              <MdAddShoppingCart />
            </button>
          </td>
        </tr>
        <tr>
          <td>Produto com o nome muuuuito grande!!!!</td>
          <td>R$120,00</td>
          <td>
            <button type="button">
              <MdAddShoppingCart />
            </button>
          </td>
        </tr>
        <tr>
          <td>Bicicleta</td>
          <td>R$120,00</td>
          <td>
            <button type="button">
              <MdAddShoppingCart />
            </button>
          </td>
        </tr>
      </tbody>
    </Container>
  );
};

export default Table;
