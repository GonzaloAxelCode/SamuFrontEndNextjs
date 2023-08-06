import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ChangePasswordType, ConfirmResetPasswordAuth } from "../auth.models";
import { changePasswordReducer } from "../redux/AuthSlice";
import changePassword from "../redux/useCases/change-password";
import confimResetPassword from "../redux/useCases/confirm-reset-password";
import resetPassword from "../redux/useCases/reset-password";

const useResetPassword = () => {
  const dispatch = useDispatch();

  const { isLoading, isUpdatedPassword, errors } = useSelector(
    (state: RootState) => state.Auth
  );

  const resetPaswordWithEmail = async (email: string) => {
    await resetPassword(email, dispatch);
  };

  const confirmResetPasswordFromEmail = async (
    data: ConfirmResetPasswordAuth
  ) => {
    await confimResetPassword(data, dispatch);
  };

  const sendChangePassword = async (data: ChangePasswordType) => {
    await changePassword(data, dispatch);
  };

  const clearErrors = () => {
    dispatch(
      changePasswordReducer({
        errors: {},
      })
    );
  };

  return {
    resetPaswordWithEmail,
    confirmResetPasswordFromEmail,
    isLoadingResetPassword: isLoading,
    isUpdatedPassword,
    isLoadingChangePassword: isLoading,
    sendChangePassword,
    errors,
    clearErrors,
  };
};

export default useResetPassword;
