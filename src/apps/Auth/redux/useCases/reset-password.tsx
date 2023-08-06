import { showNoti } from "@/src/Common/redux/NotificationSlice";
import resetPasswordFetch from "../../services/reset-password-fetch";
import { resetPasswordReducer } from "../AuthSlice";

const resetPassword = async (email: string, dispatch: any) => {
  dispatch(
    resetPasswordReducer({
      isLoading: true,
    })
  );
  const { isSuccess, errors } = await resetPasswordFetch(email);
  if (isSuccess) {
    dispatch(
      showNoti({
        type: "success",
        message: "Se ha enviado un correo para recuperar su contraseña.",
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
        message: "No se pudo enviar el correo.Hub un fallo.",
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

export default resetPassword;
