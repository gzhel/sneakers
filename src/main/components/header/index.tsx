// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC } from 'react';
import s from './index.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.left}>
        <div className={s.logo}>
          <a href="#">sneakers</a>
        </div>
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

      <div className={s.right}>
        <div className={s.cart}>
          <Icons.UilShoppingCart size="2em" color="var(--neutral-color-2)" />
        </div>
        <div className={s.profile}>
          <Icons.UilUserCircle size="3em" color="var(--neutral-color-1)" />
        </div>
      </div>
    </header>
  );
};
