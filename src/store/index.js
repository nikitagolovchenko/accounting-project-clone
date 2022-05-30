import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'store/slices/authSlice';
import noticeReducer from 'store/slices/noticeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notice: noticeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
