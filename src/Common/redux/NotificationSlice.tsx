import { createSlice } from "@reduxjs/toolkit";

export type TypeNotification = "info" | "success" | "warn" | "error";
interface NotificationState {
  type?: TypeNotification;
  message?: string;
  visible?: boolean;
  alertVisible?: boolean;
  messageAlert?: string[] | string;
  typeAlert?: string;
}

const initialState: NotificationState = {
  type: "success",
  message: "",
  visible: false,
  typeAlert: "Success",
  messageAlert: "",
  alertVisible: false,
};
export const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNoti: (state: NotificationState, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.visible = true;
    },
    hideNoti: (state: NotificationState) => {
      state.visible = false;
    },
    hideAlert: (state: NotificationState) => {
      state.alertVisible = false;
    },
    showAlert: (state: NotificationState, action) => {
      state.typeAlert = action.payload.typeAlert;
      state.messageAlert = action.payload.messageAlert;
      state.alertVisible = true;
    },
  },
});

export const { hideNoti, showNoti, showAlert, hideAlert } =
  NotificationSlice.actions;

export default NotificationSlice.reducer;
