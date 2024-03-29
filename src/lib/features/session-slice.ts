import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosAuth } from '../axios';

type InitialState = {
  isLogged: boolean;
  isLoading: boolean;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

const initialState = {
  isLogged: false,
  isLoading: false,
  id: 0,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  image: '',
} as InitialState;

interface ILogin{
  username: string;
  password: string;
}

export const login = createAsyncThunk('sessionSlice/login',
  async (payloadLogin: ILogin, thunkApi) => {
    try {
      const resp = await axiosAuth.post('/auth/login', payloadLogin);
      return resp?.data ?? {};
    } catch (error){
      let errorMessage = 'Unknown Message';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || 'Unknown Message'
      }
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
)

export const getInfo = createAsyncThunk('sessionSlice/getInfo',
  async (payloadLogin: any, thunkApi) => {
    try {
      const resp = await axiosAuth.get('/auth/me');
      return resp?.data ?? {};
    } catch (error){
      let errorMessage = 'Unknown Message';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || 'Unknown Message'
      }
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
)

export const sideBar = createSlice({
  name: 'sideBar',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (_state, action: PayloadAction<any>) => {
        localStorage.setItem('accessToken', action.payload?.token ?? '')
      })
      .addCase(getInfo.pending, (state, _action: PayloadAction<any>) => {
        state.isLoading = true;
      })
      .addCase(getInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        Object.assign(state, action.payload);
      })
      .addCase(getInfo.rejected, (state, _action: PayloadAction<any>) => {
        Object.assign(state, initialState);
      })
  },
});

export default sideBar.reducer;
