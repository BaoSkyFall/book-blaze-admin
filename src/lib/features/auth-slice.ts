import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isLogged: boolean;
  id: number;
  userName: string;
  email: string;
  phone: string;
  fullName: string;
  role: string;
};

const initialState = {
  isLogged: false,
  id: -1,
  userName: '',
  email: '',
  phone: '',
  fullName: '',
  role: '',
} as InitialState;

export const Auth = createSlice({
  name: 'sideBar',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<InitialState>) => {
      Object.assign(state, action.payload);
    },
    logout: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { login } = Auth.actions;
export default Auth.reducer;
