import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const intialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    addAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incremented, decremented, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
