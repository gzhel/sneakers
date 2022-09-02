import React from 'react';
import s from './index.module.scss';
import { Preview } from './preview';
import { Description } from './description';

export const Content = () => {
  return (
    <div className={s.content} style={{ border: '1px solid red' }}>
      <Preview />
      <Description />
    </div>
  );
};
