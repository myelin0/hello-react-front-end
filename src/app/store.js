import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from '../features/greeting/greetingSlice';

const store = configureStore({
  reducer: {
    randomGreeting: greetingSlice,
  },
});

export default store;
