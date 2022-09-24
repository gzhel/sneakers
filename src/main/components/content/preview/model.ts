import { sneakersHooks } from '../../../store-sneakers';
import hooks from '../../../store-sneakers/hooks';

export const useModel = () => {
  const { images } = sneakersHooks.useProductInfo();

  const { isMobile } = hooks.useIsMobile();

  const bulletStyle = (idx: number) => `background-image: url(${images[idx]})`;

  return { images, isMobile, bulletStyle };
};
