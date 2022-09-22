// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC, useMemo, useState } from 'react';
import s from './index.module.scss';
import { useResizeDetector } from 'react-resize-detector';

export const Header: FC = () => {
  const alertCartValue = () => {
    alert('111 shoes');
  };

  const { width = window.screen.width } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 150
  });

  const isMobile = useMemo<boolean>(() => (width || 0) < 400, [width]);

  const [isMenuCollapsed, setMenuCollapsed] = useState(true);
  const handleMenuCollapsed = () => setMenuCollapsed((prev) => !prev);

  return (
    <>
      <header className={s.header}>
        <div className={s.left}>
          {!isMobile ? null : (
            <div className={s.menu} onClick={handleMenuCollapsed}>
              <Icons.UilBars
                size="2em"
                color={isMenuCollapsed ? 'var(--neutral-color-2)' : 'var(--primary-color-1)'}
              />
            </div>
          )}
          <div className={s.logo}>
            <a href="#">sneakers</a>
          </div>
          {isMobile ? null : (
            <nav>
              <ul className={s.nav}>
                <li className={s.navItem}>
                  <a href="#">Collections</a>
                </li>
                <li className={s.navItem}>
                  <a href="#">Men</a>
                </li>
                <li className={s.navItem}>
                  <a href="#">Women</a>
                </li>
                <li className={s.navItem}>
                  <a href="#">About</a>
                </li>
                <li className={s.navItem}>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          )}
        </div>

        <div className={s.right}>
          <div className={s.cart} onClick={alertCartValue}>
            <Icons.UilShoppingCart
              size={isMobile ? '1.5em' : '2em'}
              color="var(--neutral-color-2)"
            />
          </div>
          <a href="#" className={s.profile}>
            <Icons.UilUserCircle size={isMobile ? '2em' : '3em'} color="var(--neutral-color-1)" />
          </a>
        </div>
      </header>
      {!isMobile || isMenuCollapsed ? null : (
        <div className={s.mobileMenu}>
          <nav>
            <ul className={s.nav}>
              <li className={s.navItem}>
                <a href="#">Collections</a>
              </li>
              <li className={s.navItem}>
                <a href="#">Men</a>
              </li>
              <li className={s.navItem}>
                <a href="#">Women</a>
              </li>
              <li className={s.navItem}>
                <a href="#">About</a>
              </li>
              <li className={s.navItem}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
