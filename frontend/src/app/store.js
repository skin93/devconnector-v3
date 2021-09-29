import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import alertReducer from '../features/alert/alertSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    alert: alertReducer,
  },
});
