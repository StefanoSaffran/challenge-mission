import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { Container } from './styles';

import { useCart, Product } from '~/contexts/cart';

const Table = () => {
  const { products, addToCart } = useCart();

  function handleAddToCart(product: Product) {
    addToCart(product);
  }

  if (!products.length) {
    return <div />;
  }

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
        {products &&
          products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>R${product.price}</td>
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
