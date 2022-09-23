import { useState } from 'react';

export const useModel = () => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(true);
  const handleMenuCollapsed = () => setMenuCollapsed((prev) => !prev);

  return { isMenuCollapsed, handleMenuCollapsed };
};
