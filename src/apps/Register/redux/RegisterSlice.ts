import { createSlice } from "@reduxjs/toolkit";

import { RegisterStateType } from "../register.models";

export const RegisterState: RegisterStateType = {
  errors: {
    detail: "",
  },
  isSendEmail: false,
  isLoadingRegister: false,
  isLoadingActivate: false,
  isActivateEmail: false,
};

const createReducer = (
  state: RegisterStateType,
  action: { payload: RegisterStateType }
) => ({
  ...state,
  ...action.payload,
});

const RegisterSlice = createSlice({
  name: "register",
  initialState: RegisterState,
  reducers: {
    signupReducer: createReducer,
    activateUserReducer: createReducer,
  },
});

export const { signupReducer, activateUserReducer } = RegisterSlice.actions;

export default RegisterSlice.reducer;
