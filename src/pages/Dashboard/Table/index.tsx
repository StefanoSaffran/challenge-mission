import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { Container } from './styles';

import { formatCurrency } from '~/utils';
import { useCart, Product } from '~/contexts/cart';

const Table = () => {
  const { products, addToCart, filter } = useCart();

  function handleAddToCart(product: Product) {
    addToCart(product);
  }

  if (!products.length) {
    return <div />;
  }

  const filteredProducts = filter
    ? products
        .filter(product => {
          const regex = new RegExp(filter, 'i');
          return regex.test(product.name);
        })
        .sort((a, b) => {
          return `${a.name}`.localeCompare(b.name);
        })
    : products.sort((a, b) => {
        return `${a.name}`.localeCompare(b.name);
      });

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
        {filteredProducts &&
          filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{formatCurrency(product.price)}</td>
              <td>
                <button type="button" onClick={() => handleAddToCart(product)}>
                  <MdAddShoppingCart />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </Container>
  );
};

export default Table;
