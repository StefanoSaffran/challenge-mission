import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  PropsWithChildren,
  useEffect,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

import { storageKey } from '~/utils';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export type CartProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartContext = {
  products: Product[];
  cart: CartProduct[];
  addProduct(item: Product): void;
  addToCart(item: Omit<CartProduct, 'quantity'>): void;
  /* addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
  removeProduct(id: string): void;
  removeAll(): void;
  getQuantity(id: string): number;
  getTotalQuantity(): number;
  getSubTotal(id: string): number;
  getTotal(): number; */
};

const CartContext = createContext<CartContext | null>(null);

const CartProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = localStorage.getItem(storageKey('products'));

    if (storedProducts) return JSON.parse(storedProducts);

    return [];
  });

  const [cart, setCart] = useState<CartProduct[]>(() => {
    const storedProducts = localStorage.getItem(storageKey('cart'));

    if (storedProducts) return JSON.parse(storedProducts);

    return [];
  });

  useEffect(() => {
    async function updateStoredProducts(): Promise<void> {
      localStorage.setItem(storageKey('products'), JSON.stringify(products));
    }

    updateStoredProducts();
  }, [products]);

  useEffect(() => {
    async function updateStoredCart(): Promise<void> {
      localStorage.setItem(storageKey('cart'), JSON.stringify(cart));
    }

    updateStoredCart();
  }, [cart]);

  const addProduct = useCallback((product: Product) => {
    setProducts(oldProducts => [...oldProducts, { ...product, id: uuidv4() }]);
  }, []);

  const addToCart = useCallback(
    (newProduct: Product) => {
      const checkIfNewProduct = cart.find(
        product => product.id === newProduct.id,
      );

      if (!checkIfNewProduct) {
        setCart(oldProducts => [
          ...oldProducts,
          { ...newProduct, quantity: 1 },
        ]);

        return;
      }

      const updatedProducts = cart.map(product => {
        if (product.id !== newProduct.id) return product;

        const updatedProduct = {
          ...product,
          quantity: product.quantity + 1,
        };

        return updatedProduct;
      });

      setCart(updatedProducts);
    },
    [cart],
  );

  const value = React.useMemo(
    () => ({
      products,
      cart,
      addProduct,
      addToCart,
    }),
    [products, cart, addProduct, addToCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = (): CartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within an CartProvider`);
  }

  return context;
};

export { CartProvider, useCart };
