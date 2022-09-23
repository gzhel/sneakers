import { ChangeEvent, useState } from 'react';
import { ProductInfo } from '../api';

export const useModel = (p: ProductInfo) => {
  const { info: i } = p;
  const [count, setCount] = useState<number>(0);
  const decreaseCount = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const increaseCount = () => setCount((prev) => prev + 1);
  const handleCount = (event: ChangeEvent<HTMLInputElement>) => setCount(+event.target.value);
  const price = `$${!i.sale ? i.price.toFixed(2) : (i.price * (i.sale / 100)).toFixed(2)}`;
  const oldPrice = `$${i.price.toFixed(2)}`;

  return { i, count, decreaseCount, increaseCount, handleCount, price, oldPrice };
};