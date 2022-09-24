import { useSelector } from 'react-redux';
import selectors from './selectors';
import { useResizeDetector } from 'react-resize-detector';
import { useMemo } from 'react';

const useCartItems = () => {
  const cartItems = useSelector(selectors.cartItems);
  const cartItemsLength = cartItems.length;
  return { cartItems, cartItemsLength };
};

const useProductInfo = () => {
  const productInfo = useSelector(selectors.productInfo);
  return { productInfo, images: productInfo.images };
};

const useIsMobile = () => {
  const { width = window.screen.width } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 150
  });

  const isMobile = useMemo<boolean>(() => (width || 0) < 400, [width]);

  return { isMobile };
};

const hooks = {
  useCartItems,
  useProductInfo,
  useIsMobile
};

export default hooks;
