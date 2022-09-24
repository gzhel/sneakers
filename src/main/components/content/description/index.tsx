// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC } from 'react';
import s from './index.module.scss';
import { useModel } from './model';

export const Description: FC = () => {
  const m = useModel();

  return (
    <div className={s.description}>
      <div className={s.company}>{m.i.company}</div>
      <h1 className={s.title}>{m.i.name}</h1>
      <div className={s.text}>{m.i.description}</div>
      <div className={s.priceLayout}>
        <div className={s.price}>
          {m.price}
          {!m.i.sale ? null : <span className={s.sale}>{m.i.sale}%</span>}
        </div>
        {!m.i.sale ? null : <span className={s.oldPrice}>{m.oldPrice}</span>}
      </div>
      <div className={s.cartLayout}>
        <div className={s.counter}>
          <button onClick={m.decreaseCount} className={s.calculate}>
            -
          </button>
          <input type="number" className={s.count} value={m.count} onChange={m.handleCount} />
          <button onClick={m.increaseCount} className={s.calculate}>
            +
          </button>
        </div>
        <button
          className={s.cartButton}
          disabled={m.count < 1}
          onClick={() => m.handleAddCartItem({ item: m.productInfo, amount: m.count })}
        >
          <Icons.UilShoppingCart size="1.5em" color="var(--neutral-color-4)" />
          <span className={s.addToCart}>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
