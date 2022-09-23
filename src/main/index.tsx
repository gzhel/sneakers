import React, { FC } from 'react';
import './styles/theme.scss';
import './styles/reset.scss';
import s from './index.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ProductPage } from './components/content';
import { useModel } from './model';
import { Navigate, Route, Routes } from 'react-router-dom';

const NoData = () => <div style={{ height: '100vh' }}>No Data Route</div>;

const DefaultRedirect = () => <Navigate to="/p/12" />;

export const App: FC = () => {
  const m = useModel();

  return (
    <div className={s.app}>
      <Header isMobile={m.isMobile} />

      <Routes>
        <Route path="/" element={<DefaultRedirect />} />
        <Route path="/p" element={<NoData />} />
        <Route path="/p/:productId" element={<ProductPage isMobile={m.isMobile} />} />
        <Route path="*" element={<NoData />} />
      </Routes>

      <Footer />
    </div>
  );
};
