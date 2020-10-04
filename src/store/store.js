import { configureStore } from '@reduxjs/toolkit';
import entriesReducer from '../dataSlice';

export default configureStore({
  reducer: {
    data: entriesReducer,
  },
});
