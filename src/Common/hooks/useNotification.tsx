import { RootState } from "@/src/redux/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNoti } from "../redux/NotificationSlice";

const useNotification = () => {
  const dispatch = useDispatch();
  const toastRef = useRef<any>(null);
  const { type, message, visible } = useSelector(
    (state: RootState) => state.Notification
  );

  useEffect(() => {
    if (visible) {
      toastRef.current.show({
        severity: type,
        summary: type && type.charAt(0).toUpperCase() + type?.slice(1),
        detail: message,
      });
      setTimeout(() => {
        dispatch(hideNoti());
      }, 1300);
    }
  }, [visible]);
  return {
    typeNotification: type,
    toastRef,
  };
};

export default useNotification;
