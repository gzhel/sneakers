// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { ChangeEvent, FC, useState } from 'react';
import s from './index.module.scss';
import { ProductInfo } from '../mock-data';

type Props = {
  productInfo: ProductInfo;
};
export const Description: FC<Props> = (p) => {
  const { info: i } = p.productInfo;

  const [count, setCount] = useState<number>(0);
  const decreaseCount = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const increaseCount = () => setCount((prev) => prev + 1);
  const handleCount = (event: ChangeEvent<HTMLInputElement>) => setCount(+event.target.value);

  return (
    <div className={s.description}>
      <div className={s.company}>{i.company}</div>
      <h1 className={s.title}>{i.name}</h1>
      <div className={s.text}>{i.description}</div>
      <div className={s.priceLayout}>
        <div className={s.price}>
          ${!i.sale ? i.price.toFixed(2) : (i.price * (i.sale / 100)).toFixed(2)}
          {!i.sale ? null : <span className={s.sale}>{i.sale}%</span>}
        </div>
        {!i.sale ? null : <span className={s.oldPrice}>${i.price.toFixed(2)}</span>}
      </div>
      <div className={s.cartLayout}>
        <div className={s.counter}>
          <button onClick={decreaseCount} className={s.calculate}>
            -
          </button>
          <input type="number" className={s.count} value={count} onChange={handleCount} />
          <button onClick={increaseCount} className={s.calculate}>
            +
          </button>
        </div>
        <div className={s.cartButton}>
          <Icons.UilShoppingCart size="1.5em" color="var(--neutral-color-4)" />
          <span className={s.addToCart}>Add to cart</span>
        </div>
      </div>
    </div>
  );
};
