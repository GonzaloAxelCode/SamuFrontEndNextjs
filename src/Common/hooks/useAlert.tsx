import { RootState } from "@/src/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "../redux/NotificationSlice";

const useAlert = () => {
  const [isShowing, setIsShowing] = useState(false);
  const dispatch = useDispatch();

  const { typeAlert, messageAlert, alertVisible } = useSelector(
    (state: RootState) => state.Notification
  );

  const dimisisAlert = () => {
    dispatch(hideAlert());
  };

  return {
    alertVisible,
    typeAlert,
    messageAlert,
    dimisisAlert,
  };
};

export default useAlert;
