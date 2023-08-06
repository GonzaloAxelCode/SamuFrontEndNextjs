import { showNoti } from "@/src/Common/redux/NotificationSlice";
import { UserRegisterData } from "../../register.models";
import { registerFetch } from "../../services/register-fetch";
import { signupReducer } from "../RegisterSlice";

export default async function signUp(user: UserRegisterData, dispatch: any) {
  dispatch(
    signupReducer({
      isLoadingRegister: true,
    })
  );

  const { isSuccess, errors } = await registerFetch(user);

  if (isSuccess) {
    dispatch(
      signupReducer({
        isLoadingRegister: false,
        isSendEmail: true,
        isActivateEmail: true,
        errors: {},
      })
    );
    dispatch(
      showNoti({
        message:
          "Usuario Creado.Te hemos mandado un correo de verificacion para activar tu cuenta.",
        type: "Success",
      })
    );

    return true;
  } else {
    dispatch(
      signupReducer({
        isLoadingRegister: false,
        errors: errors,
      })
    );
  }
}
