import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../user.mode";

export const UserState: UserProfile = {
  email: "",
  nickname: "",
  first_name: "",
  last_name: "",
  date_joined: "",
  is_active_from_admin: false,
  isLoading: false,
  errors: [],
  networkError: false,
  get_short_name: "",
};

const createReducer = (
  state: UserProfile,
  action: { payload: UserProfile }
) => ({
  ...state,
  ...action.payload,
});

const userSlice = createSlice({
  name: "user",
  initialState: UserState,
  reducers: {
    getUserReducer: createReducer,
  },
});

export const { getUserReducer } = userSlice.actions;

export default userSlice.reducer;
