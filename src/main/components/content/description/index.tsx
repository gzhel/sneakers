import React from 'react';
import s from './index.module.scss';

export const Description = () => {
  return (
    <div className={s.description}>
      <div className={s.company}>Sneaker company</div>
      <h1 className={s.title}>Fall Limited Edition Sneakers</h1>
      <div className={s.text}>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they’ll withstand everything the weather can offer.
      </div>
      <div>
        <span className={s.price}>$125.00</span>
        <span className={s.sale}>50%</span>
      </div>
      <span className={s.oldPrice}>$250.00</span>
      <div className={s.cartLayout}>
        <div className={s.counter}>
          <span>-</span>
          <span>0</span>
          <span>+</span>
        </div>
        <div className={s.cartButton}>
          <div>Uil Icon</div>
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
};
