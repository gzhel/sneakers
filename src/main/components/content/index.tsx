import React, { FC } from 'react';
import s from './index.module.scss';
import { Preview } from './preview';
import { Description } from './description';
import { useModel } from './model';
import { sneakersHooks } from '../../store-sneakers';

export const ProductPage: FC = () => {
  const m = useModel();

  const { productInfo } = sneakersHooks.useProductInfo();
  console.log(111, productInfo);

  return (
    <div className={s.content}>
      <Preview images={m.productInfo.images} />
      <Description productInfo={m.productInfo} />
    </div>
  );
};
