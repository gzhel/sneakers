import React from 'react';
import s from './index.module.scss';
import { Preview } from './preview';
import { Description } from './description';
import { productInfo } from './mock-data';

export const Content = () => {
  return (
    <div className={s.content}>
      <Preview images={productInfo.images} />
      <Description productInfo={productInfo} />
    </div>
  );
};
