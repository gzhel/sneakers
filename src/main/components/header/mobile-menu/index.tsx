import React, { FC } from 'react';
import s from '../index.module.scss';
import { sneakersHooks } from '../../../store-sneakers';

type Props = {
  isMenuCollapsed: boolean;
};
export const MobileMenu: FC<Props> = (p) => {
  const { isMobile } = sneakersHooks.useIsMobile();

  return !isMobile || p.isMenuCollapsed ? null : (
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
