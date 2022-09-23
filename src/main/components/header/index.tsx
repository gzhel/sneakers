// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC } from 'react';
import s from './index.module.scss';
import { useModel } from './model';
import { CartIcon } from './cart-icon';
import { MobileMenu } from './mobile-menu';
import { Menu } from './menu';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const m = useModel();

  return (
    <>
      <header className={s.header}>
        <div className={s.left}>
          {!m.isMobile ? null : (
            <div className={s.menu} onClick={m.handleMenuCollapsed}>
              <Icons.UilBars
                size="2em"
                color={m.isMenuCollapsed ? 'var(--neutral-color-2)' : 'var(--primary-color-1)'}
              />
            </div>
          )}

          <Link to="/" className={s.logo}>
            <div>sneakers</div>
          </Link>

          <Menu />
        </div>

        <div className={s.right}>
          <CartIcon />

          <a href="#" className={s.profile}>
            <Icons.UilUserCircle size={m.isMobile ? '2em' : '3em'} color="var(--neutral-color-1)" />
          </a>
        </div>
      </header>

      <MobileMenu isMenuCollapsed={m.isMenuCollapsed} />
    </>
  );
};
