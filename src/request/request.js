import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ProductApi } from './apiProducts';

const reducers = combineReducers({
  [ProductApi.reducerPath]: ProductApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }).concat(ProductApi.middleware),
  devTools: true,
});
