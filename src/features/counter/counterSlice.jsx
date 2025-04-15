// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ]
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const index = state.counters.findIndex(c => c.id === action.payload);
      if (index !== -1) state.counters[index].value++;
    },
    decrement: (state, action) => {
      const index = state.counters.findIndex(c => c.id === action.payload);
      if (index !== -1) state.counters[index].value--;
    },
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
