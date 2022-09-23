import React, { FC } from 'react';
import './styles/theme.scss';
import './styles/reset.scss';
import s from './index.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ProductPage } from './components/content';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const NoData = () => <div style={{ height: '100vh' }}>No Data Route</div>;

const DefaultRedirect = () => <Navigate to="/p/12" />;

export const App: FC = () => {
  return (
    <Provider store={store}>
      <div className={s.app}>
        <Header />

        <Routes>
          <Route path="/" element={<DefaultRedirect />} />
          <Route path="/p" element={<NoData />} />
          <Route path="/p/:productId" element={<ProductPage />} />
          <Route path="*" element={<NoData />} />
        </Routes>

        <Footer />
      </div>
    </Provider>
  );
};
