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
  filter: string;
  handleFilter(name: string): void;
  addProduct(item: Product): void;
  addToCart(item: Omit<CartProduct, 'quantity'>): void;
  getTotalQuantity(): number;
  increment(id: string): void;
  decrement(id: string): void;
  getSubTotal(id: string): number;
  removeProduct(id: string): void;
  getTotal(): number;
  removeAll(): void;
};

const CartContext = createContext<CartContext | null>(null);

const CartProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [filter, setfilter] = useState('');
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

  const handleFilter = useCallback((name: string) => {
    setfilter(name);
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

  const getTotalQuantity = useCallback(() => {
    const totalQuantity = cart.reduce(
      (total, { quantity }) => total + quantity,
      0,
    );

    return totalQuantity;
  }, [cart]);

  const increment = useCallback(
    async (id: string) => {
      const updatedProducts = cart.map(product => {
        if (product.id !== id) return product;

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

  const decrement = useCallback(
    async (id: string) => {
      const updatedProducts = cart
        .map(product => {
          if (product.id !== id) return product;

          const updatedProduct = {
            ...product,
            quantity: product.quantity - 1,
          };

          return updatedProduct;
        })
        .filter(product => product.quantity > 0);

      setCart(updatedProducts);
    },
    [cart],
  );

  const getSubTotal = useCallback(
    (id: string) => {
      const foundProduct = cart.find(product => product.id === id);

      if (!foundProduct) return 0;

      const subtotal = foundProduct.quantity * Number(foundProduct.price);
      return subtotal;
    },
    [cart],
  );

  const getTotal = useCallback(() => {
    return cart.reduce((total, nextProduct) => {
      const subtotal = nextProduct.quantity * Number(nextProduct.price);
      return total + subtotal;
    }, 0);
  }, [cart]);

  const removeProduct = useCallback((id: string) => {
    setCart(oldProducts => oldProducts.filter(product => product.id !== id));
  }, []);

  const removeAll = useCallback(() => {
    setCart([]);
  }, []);

  const value = React.useMemo(
    () => ({
      products,
      cart,
      filter,
      handleFilter,
      addProduct,
      addToCart,
      getTotalQuantity,
      increment,
      decrement,
      getSubTotal,
      getTotal,
      removeProduct,
      removeAll,
    }),
    [
      products,
      cart,
      filter,
      handleFilter,
      addProduct,
      addToCart,
      getTotalQuantity,
      increment,
      decrement,
      getSubTotal,
      getTotal,
      removeProduct,
      removeAll,
    ],
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
