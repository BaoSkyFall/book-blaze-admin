import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosAuth } from '../axios';
import { NAVIGATION_LINK } from '@/enums/navigation.enum';

type InitialState = {
  isLoadData: boolean;
  isLogged: boolean;
  isLoading: {
    logIn: boolean;
    logOut: boolean;
    getInfo: boolean;
  };
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

const initialState = {
  isLoadData: false,
  isLogged: false,
  isLoading: {
    logIn: false,
    logOut: false,
    getInfo: false,
  },
  id: 0,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  image: '',
} as InitialState;

interface ILogin {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  'sessionSlice/login',
  async (payloadLogin: ILogin, thunkApi) => {
    try {
      const resp = await axiosAuth.post('/auth/login', {
        ...payloadLogin,
        expiresInMins: 30,
      });
      return resp?.data ?? {};
    } catch (error) {
      let errorMessage = 'Unknown Message';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || 'Unknown Message';
      }
      return thunkApi.rejectWithValue(errorMessage);
    }
  },
);

export const getInfo = createAsyncThunk(
  'sessionSlice/getInfo',
  async (_payload: any, thunkApi) => {
    try {
      const resp = await axiosAuth.get('/auth/me');
      return resp?.data ?? {};
    } catch (error) {
      let errorMessage = 'Unknown Message';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || 'Unknown Message';
      }
      return thunkApi.rejectWithValue(errorMessage);
    }
  },
);

export const session = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem(
        process.env.NEXT_PUBLIC_NAME_TOKEN ?? 'access_token',
      );
      Object.assign(state, initialState);
      state.isLoadData = false;
      window.location.href = NAVIGATION_LINK.LOGIN;
    },
  },
  extraReducers(builder) {
    builder
      //Login
      .addCase(login.pending, (state, _action: PayloadAction<any>) => {
        state.isLoading.logIn = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        localStorage.setItem(
          process.env.NEXT_PUBLIC_NAME_TOKEN ?? 'access_token',
          action.payload.token,
        );
        state.isLoading.logIn = false;
      })
      .addCase(login.rejected, (state, _action: PayloadAction<any>) => {
        state.isLoading.logIn = false;
      })
      // Get Info
      .addCase(getInfo.pending, (state, _action: PayloadAction<any>) => {
        state.isLoading.getInfo = true;
      })
      .addCase(getInfo.fulfilled, (state, action: PayloadAction<any>) => {
        Object.assign(state, action.payload);
        state.isLoading.getInfo = false;
        state.isLogged = true;
        state.isLoadData = true;
      })
      .addCase(getInfo.rejected, (state, _action: PayloadAction<any>) => {
        Object.assign(state, initialState);
        state.isLoadData = true;
      });
  },
});

export const { logOut } = session.actions;
export default session.reducer;
