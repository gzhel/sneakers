// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC } from 'react';
import s from './index.module.scss';

type Props = {
  isMobile: boolean;
};
export const CartIcon: FC<Props> = (p) => {
  const alertCartValue = () => {
    alert('111 shoes');
  };

  return (
    <div className={s.cart} onClick={alertCartValue}>
      <Icons.UilShoppingCart size={p.isMobile ? '1.5em' : '2em'} color="var(--neutral-color-2)" />
    </div>
  );
};
