import React from 'react';
import './styles/theme.scss';
import './styles/reset.scss';
import s from './index.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';

export const App = () => {
  return (
    <div className={s.app}>
      <Header />

      <Content />

      <Footer />
    </div>
  );
};
