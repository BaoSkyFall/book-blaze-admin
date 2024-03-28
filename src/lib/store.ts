import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './features/session-slice';
import sideBarReducer from './features/sidebar-slice';

export const store = configureStore({
  reducer: { sideBarReducer, sessionReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
