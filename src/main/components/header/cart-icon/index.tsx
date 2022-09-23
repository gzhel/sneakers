// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC } from 'react';
import s from './index.module.scss';
import { useModel } from './model';

export const CartIcon: FC = () => {
  const m = useModel();

  return (
    <div className={s.cart} onClick={m.alertCartValue}>
      <Icons.UilShoppingCart size={m.isMobile ? '1.5em' : '2em'} color="var(--neutral-color-2)" />
      {!m.cartItemsLength ? null : <div className={s.cartItems}>{m.cartItemsLength}</div>}
    </div>
  );
};
