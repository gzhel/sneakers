import React, { FC } from 'react';
import s from './index.module.scss';
import { Preview } from './preview';
import { Description } from './description';
import { useModel } from './model';
import { ProductInfo } from './api';

type Props = {
  isMobile: boolean;
  addCartItem: (item: ProductInfo, amount: number) => void;
};
export const ProductPage: FC<Props> = (p) => {
  const m = useModel();

  return (
    <div className={s.content}>
      <Preview images={m.productInfo.images} isMobile={p.isMobile} />
      <Description productInfo={m.productInfo} addCartItem={p.addCartItem} />
    </div>
  );
};
