import { showNoti } from "@/src/Common/redux/NotificationSlice";
import { ChangePasswordType } from "../../auth.models";
import changePasswordService from "../../services/change-password";
import { changePasswordReducer } from "../AuthSlice";

const changePassword = async (data: ChangePasswordType, dispatch: any) => {
  dispatch(
    changePasswordReducer({
      isLoading: true,
    })
  );
  const { isSuccess, errors } = await changePasswordService(data);
  if (isSuccess) {
    dispatch(
      showNoti({
        type: "success",
        message: "Contraseña Actualizada con exito.",
      })
    );

    dispatch(
      changePasswordReducer({
        isLoading: false,
        errors: {},
      })
    );
  } else {
    dispatch(
      showNoti({
        message: "No se pudo cambiar contraseña.Algo fallo.",
        type: "error",
      })
    );

    dispatch(
      changePasswordReducer({
        isLoading: false,
        errors,
      })
    );
  }
};

export default changePassword;
