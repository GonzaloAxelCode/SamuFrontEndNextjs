import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "../auth.models";

export const AuthState: AuthStateType = {
  errors: {
    detail: "",
  },
  isLoading: false,
  isUpdatedPassword: false,
  isUserIsActivatedWithAdmin: false,
};

const createReducer = (
  state: AuthStateType,
  action: { payload: AuthStateType }
) => ({
  ...state,
  ...action.payload,
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    resetPasswordReducer: createReducer,
    confirmResetPasswordReducer: createReducer,
    changePasswordReducer: createReducer,
  },
});

export const {
  resetPasswordReducer,
  changePasswordReducer,
  confirmResetPasswordReducer,
} = AuthSlice.actions;

export default AuthSlice.reducer;
