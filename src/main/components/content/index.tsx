import React, { FC } from 'react';
import s from './index.module.scss';
import { Preview } from './preview';
import { Description } from './description';
import { useModel } from './model';

export const ProductPage: FC = () => {
  useModel();

  return (
    <div className={s.content}>
      <Preview />
      <Description />
    </div>
  );
};
