import { createDispatchHook } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useAppDispatch = createDispatchHook<RootState>()<AppDispatch>;
