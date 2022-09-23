import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { sneakersReducer } from './store-sneakers';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export const store = configureStore({
  reducer: {
    main: sneakersReducer
  }
});

export const useCallDispatch = <T = void>(action: (payload: T) => object) => {
  const dispatch = useDispatch();
  return useCallback((payload: T) => dispatch(action(payload) as AnyAction), [action, dispatch]);
};

export type RootState = ReturnType<typeof store.getState>;
