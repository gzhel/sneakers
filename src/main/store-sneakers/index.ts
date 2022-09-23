import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './model';
import { ProductInfo } from './api';
import effects from './effects';

export { default as sneakersHooks } from './hooks';

const s = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    onAddCartItem: (st, a: PayloadAction<{ item: ProductInfo; amount: number }>) => {
      const cartItem = { id: a.payload.item.id, amount: a.payload.amount };
      // 1. Проверяет, что уже есть в корзине (cartItems);
      // 2. Если текущий айтем уже есть в корзине, он добавляет ему amount
      // 3. Если текущего айтема нет в корзине, он добавляет его в корзину
      st.cartItems = st.cartItems.some((i) => i.id === cartItem.id)
        ? st.cartItems.map((i) =>
            i.id === cartItem.id ? { ...i, amount: i.amount + cartItem.amount } : i
          )
        : [...st.cartItems, cartItem];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(effects.getProductInfo.fulfilled, (state, action) => {
      state.productInfo = action.payload || initialState.productInfo;
    });
  }
});

export const { reducer: sneakersReducer } = s;

export const sneakersActions = {
  onAddCartItem: s.actions.onAddCartItem,
  getProductInfo: effects.getProductInfo
};
