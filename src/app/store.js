import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Components/counter/counterSlice';
import entriesReducer from '../dataSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: entriesReducer,
  },
});
