import { sneakersHooks } from '../../../store-sneakers';

export const useModel = () => {
  const { isMobile } = sneakersHooks.useIsMobile();
  const { cartItems, cartItemsLength } = sneakersHooks.useCartItems();

  const alertCartValue = () => {
    alert(cartItems.map((i) => `Item ID: ${i.id}, amount: ${i.amount}\n`));
  };

  return { cartItemsLength, alertCartValue, isMobile };
};
