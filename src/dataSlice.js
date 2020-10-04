import { createSlice } from '@reduxjs/toolkit';
import entries from './Webdev_data2.json';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    entries: entries,
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectEntries = state => state.data.entries;

export default dataSlice.reducer;