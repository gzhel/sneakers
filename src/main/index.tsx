import React from 'react';
import './styles/theme.scss';
import './styles/reset.scss';
import s from './index.module.scss';
import { Header } from './components/header';

export const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <div>Content</div>
      <div>Footer</div>
    </div>
  );
};
