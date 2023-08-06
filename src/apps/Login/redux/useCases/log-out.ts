import { Dispatch } from "redux";
import { clearTokensLocalstorage } from "../../services/token-service";
import { destroyTokenReducer } from "../LoginSlice";

export const logOut = async (dispatch: Dispatch<any>) => {
  dispatch(
    destroyTokenReducer({
      refreshToken: "",
      accessToken: "",
      isAuthenticated: false,
    })
  );
  await clearTokensLocalstorage();
};
