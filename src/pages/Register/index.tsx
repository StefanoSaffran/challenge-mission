import React, { useState } from 'react';

import NumberFormat from 'react-number-format';

import DefaultLayout from '../_layouts/default';
import { Form } from './styles';

import { useCart, Product } from '~/contexts/cart';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { formatCurrency } from '~/utils';

const Register = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(Number(undefined));
  const { addProduct } = useCart();

  function handleChangePrice(e: any) {
    setPrice(e.floatValue);
  }

  const handleSubmit = () => {
    const product = {
      name,
      price,
    } as Product;

    addProduct(product);
  };

  return (
    <DefaultLayout>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Novo Produto</legend>

          <Input
            required
            autoComplete="off"
            name="name"
            label="Nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <NumberFormat
            customInput={Input}
            decimalScale={2}
            decimalSeparator=","
            fixedDecimalScale
            onValueChange={handleChangePrice}
            placeholder="R$ 0,00"
            prefix="$ "
            thousandSeparator="."
            value={price}
            format={value => formatCurrency(Number(value))}
          />
          {/* <Input
            required
            autoComplete="off"
            name="price"
            min="0"
            step="0.01"
            label="Preço"
            type="number"
            value={price}
            onChange={({ target }) => setPrice(Number(target.value))}
          /> */}
        </fieldset>

        <div>
          <Button type="submit">Cadastrar</Button>
        </div>
      </Form>
    </DefaultLayout>
  );
};

export default Register;
