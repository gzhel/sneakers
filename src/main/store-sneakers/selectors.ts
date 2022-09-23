import { RootState } from '../store';

const s = (r: RootState) => r.main;

const cartItems = (r: RootState) => s(r).cartItems;

const productInfo = (r: RootState) => s(r).productInfo;

export default {
  cartItems,
  productInfo
};
