import React from 'react';
import s from './index.module.scss';
import { Preview } from './preview';

export const Content = () => {
  return (
    <div className={s.content} style={{ border: '1px solid red' }}>
      <Preview />
      <div>Content</div>
    </div>
  );
};
