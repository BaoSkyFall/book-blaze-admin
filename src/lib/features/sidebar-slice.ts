import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isMinimal: boolean;
};

const initialState = {
  isMinimal: false,
} as InitialState;

export const sideBar = createSlice({
  name: 'sideBar',
  initialState: initialState,
  reducers: {
    changeMinimal: (state) => {
      state.isMinimal = !state.isMinimal;
    },
    changeMinimalDemo: (state, action: PayloadAction<boolean>) => {
      state.isMinimal = action.payload;
    },
  },
});

export const { changeMinimal } = sideBar.actions;
export default sideBar.reducer;
