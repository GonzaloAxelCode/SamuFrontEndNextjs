import { showNoti } from "@/src/Common/redux/NotificationSlice";
import { Dispatch } from "redux";
import { UserAuth } from "../../login.model";
import fetchCreateToken from "../../services/create-token";
import { saveTokensToLocalStorage } from "../../services/token-service";
import { verifyTokenReducer } from "../LoginSlice";

export const signIn = async (userAuth: UserAuth, dispatch: Dispatch<any>) => {
  dispatch(
    verifyTokenReducer({
      isLoadingLogin: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchCreateToken(
    userAuth
  );

  if (isSuccess) {
    saveTokensToLocalStorage({
      accessToken: data?.access,
      refreshToken: data?.refresh,
    });
    dispatch(
      showNoti({
        type: "success",
        message: "Inicio de sesion con exito",
        visible: true,
      })
    );
    dispatch(
      verifyTokenReducer({
        accessToken: data?.access,
        refreshToken: data?.refresh,
        isAuthenticated: true,
        isLoadingLogin: false,
      })
    );
  } else {
    if (networkError) {
      dispatch(
        showNoti({
          type: "error",
          message: "Error de red.El servidor no esta disponible.",
        })
      );
    }
    dispatch(
      verifyTokenReducer({
        isLoadingLogin: false,
        errors: errors,
      })
    );
  }
};
