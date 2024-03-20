import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: SideBarState;
};

type SideBarState = {
  isMinimal: boolean;
};

const initialState = {
  value: {
    isMinimal: false,
  } as SideBarState,
} as InitialState;

export const sideBar = createSlice({
  name: 'sideBar',
  initialState: initialState,
  reducers: {
    changeMinimal: (state) => {
      state.value.isMinimal = !state.value.isMinimal;
      // localStorage.setItem('minimal', state.value.isMinimal.toString());
    },
    changeMinimalDemo: (state, action: PayloadAction<boolean>) => {
      state.value.isMinimal = action.payload;
    },
  },
});

export const { changeMinimal } = sideBar.actions;
export default sideBar.reducer;
