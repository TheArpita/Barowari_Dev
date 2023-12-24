import { configureStore } from '@reduxjs/toolkit';

import chequeReducer from './chequeSlice';
// import restaurantReducer from './restaurantSlice';

export const store = configureStore({
  reducer: { 
    cheque: chequeReducer
  }
});