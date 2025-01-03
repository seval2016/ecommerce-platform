import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../../productList/slices/productSlice';
import cartReducer from '../../shoppingCart/slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    // Diğer modül slice'larını buraya ekleyin
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
