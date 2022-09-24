import { ChangeEvent, useCallback, useState } from 'react';
import { sneakersActions, sneakersHooks } from '../../../store-sneakers';
import { useCallDispatch } from '../../../store';
import { ProductInfo } from '../../../store-sneakers/api';

export const useModel = () => {
  const { productInfo } = sneakersHooks.useProductInfo();
  const { info: i } = productInfo;
  const [count, setCount] = useState<number>(0);
  const decreaseCount = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const increaseCount = () => setCount((prev) => prev + 1);
  const nullCount = () => setCount(0);
  const handleCount = (event: ChangeEvent<HTMLInputElement>) => setCount(+event.target.value);
  const price = `$${!i.sale ? i.price.toFixed(2) : (i.price * (i.sale / 100)).toFixed(2)}`;
  const oldPrice = `$${i.price.toFixed(2)}`;

  const addCartItem = useCallDispatch(sneakersActions.onAddCartItem);
  const handleAddCartItem = useCallback((payload: { item: ProductInfo; amount: number }) => {
    addCartItem(payload);
    nullCount();
  }, []);

  return {
    i,
    count,
    decreaseCount,
    increaseCount,
    handleCount,
    price,
    oldPrice,
    handleAddCartItem,
    productInfo
  };
};
