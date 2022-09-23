// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { FC } from 'react';
import s from './index.module.scss';
import { useModel } from './model';
import { CartIcon } from './cart-icon';
import { MobileMenu } from './mobile-menu';
import { Menu } from './menu';
import { Link } from 'react-router-dom';

type Props = {
  isMobile: boolean;
};
export const Header: FC<Props> = (p) => {
  const m = useModel();

  return (
    <>
      <header className={s.header}>
        <div className={s.left}>
          {!p.isMobile ? null : (
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

          <Menu isMobile={p.isMobile} />
        </div>

        <div className={s.right}>
          <CartIcon isMobile={p.isMobile} />

          <a href="#" className={s.profile}>
            <Icons.UilUserCircle size={p.isMobile ? '2em' : '3em'} color="var(--neutral-color-1)" />
          </a>
        </div>
      </header>

      <MobileMenu isMobile={p.isMobile} isMenuCollapsed={m.isMenuCollapsed} />
    </>
  );
};
