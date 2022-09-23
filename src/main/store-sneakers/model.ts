import { ProductInfo } from './api';

type CartItem = {
  id: ProductInfo['id'];
  amount: number;
};
type CartItems = Array<CartItem>;

interface State {
  cartItems: CartItems;
  productInfo: ProductInfo;
}

export const initialState: State = {
  cartItems: [],
  productInfo: {
    id: 0,
    images: [''],
    info: {
      company: '',
      name: '',
      description: '',
      price: 0
    }
  }
};
