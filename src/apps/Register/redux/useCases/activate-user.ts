import { showNoti } from "@/src/Common/redux/NotificationSlice";
import { Dispatch } from "react";
import { DataActivation } from "../../register.models";
import fetchActivation from "../../services/fetch-activation";
import { activateUserReducer } from "../RegisterSlice";

const activateUser = async (data: DataActivation, dispatch: Dispatch<any>) => {
  dispatch(
    activateUserReducer({
      isLoadingActivate: true,
    })
  );

  const { isSuccess, errors } = await fetchActivation(data);

  if (isSuccess) {
    dispatch(
      activateUserReducer({
        isActivateEmail: true,
        isLoadingActivate: false,
      })
    );
    dispatch(
      showNoti({
        type: "success",
        message: "Usuario activado con exito.",
      })
    );
    return true;
  } else {
    dispatch(
      showNoti({
        type: "error",
        message: "No se puedo activar el usuario.Token invalido",
      })
    );
    dispatch(
      activateUserReducer({
        isActivateEmail: false,
        isLoadingActivate: false,
        errors: errors,
      })
    );
    return false;
  }
};

export default activateUser;
