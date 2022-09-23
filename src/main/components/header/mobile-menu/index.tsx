import React, { FC } from 'react';
import s from '../index.module.scss';

type Props = {
  isMobile: boolean;
  isMenuCollapsed: boolean;
};
export const MobileMenu: FC<Props> = (p) => {
  return !p.isMobile || p.isMenuCollapsed ? null : (
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
  );
};
