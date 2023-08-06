import { showNoti } from "@/src/Common/redux/NotificationSlice";
import { ConfirmResetPasswordAuth } from "../../auth.models";
import confirmResetPassword from "../../services/confirm-reset-password";
import { resetPasswordReducer } from "../AuthSlice";

const confimResetPassword = async (
  data: ConfirmResetPasswordAuth,
  dispatch: any
) => {
  dispatch(
    resetPasswordReducer({
      isLoading: true,
    })
  );
  const { isSuccess, errors } = await confirmResetPassword(data);
  if (isSuccess) {
    dispatch(
      showNoti({
        message: "Restablecimiento de contraseña exitosa.",
        type: "success",
      })
    );

    dispatch(
      resetPasswordReducer({
        isLoading: false,
        isUpdatedPassword: true,
      })
    );
  } else {
    dispatch(
      showNoti({
        message: "No se pudo resetear su contraseña.Hubo un fallo.",
        type: "error",
      })
    );

    dispatch(
      resetPasswordReducer({
        isLoading: false,
        errors: errors,
      })
    );
  }
};

export default confimResetPassword;
