import { useState } from 'react';
import { sneakersHooks } from '../../store-sneakers';

export const useModel = () => {
  const { isMobile } = sneakersHooks.useIsMobile();
  const [isMenuCollapsed, setMenuCollapsed] = useState(true);
  const handleMenuCollapsed = () => setMenuCollapsed((prev) => !prev);

  return { isMenuCollapsed, handleMenuCollapsed, isMobile };
};
