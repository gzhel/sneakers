// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC } from 'react';
import s from './index.module.scss';
import { CartItems } from '../../../model';

type Props = {
  isMobile: boolean;
  cartItems: CartItems;
};
export const CartIcon: FC<Props> = (p) => {
  const alertCartValue = () => {
    alert(p.cartItems.map((i) => `Item ID: ${i.id}, amount: ${i.amount}\n`));
  };

  return (
    <div className={s.cart} onClick={alertCartValue}>
      <Icons.UilShoppingCart size={p.isMobile ? '1.5em' : '2em'} color="var(--neutral-color-2)" />
      {!p.cartItems.length ? null : <div className={s.cartItems}>{p.cartItems.length}</div>}
    </div>
  );
};
