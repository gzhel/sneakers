import { useResizeDetector } from 'react-resize-detector';
import { useMemo, useState } from 'react';
import { ProductInfo } from './components/content/api';

type CartItem = {
  id: ProductInfo['id'];
  amount: number;
};
export type CartItems = Array<CartItem>;
export const useModel = () => {
  const [cartItems, setCartItems] = useState<CartItems>([]);

  const addCartItem = (item: ProductInfo, amount: number) => {
    // 1. Проверяет, что уже есть в корзине (cartItems);
    // 2. Если текущий айтем уже есть в корзине, он добавляет ему amount
    // 3. Если текущего айтема нет в корзине, он добавляет его в корзину
    const cartItem = { id: item.id, amount: amount };
    setCartItems((prev) =>
      prev.some((i) => i.id === cartItem.id)
        ? prev.map((i) => (i.id === cartItem.id ? { ...i, amount: i.amount + cartItem.amount } : i))
        : [...prev, cartItem]
    );
  };

  const { width = window.screen.width } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 150
  });

  const isMobile = useMemo<boolean>(() => (width || 0) < 400, [width]);

  return { isMobile, cartItems, addCartItem };
};
