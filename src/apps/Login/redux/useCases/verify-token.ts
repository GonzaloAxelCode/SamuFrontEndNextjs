import { Dispatch } from "redux";
import fetchVerifyToken from "../../services/fetch-verify-token";
import { getTokensFromLocalStorage } from "../../services/token-service";
import { verifyTokenReducer } from "../LoginSlice";

export const verifyToken = async (dispatch: Dispatch<any>) => {
  dispatch(
    verifyTokenReducer({
      isLoadingVerifyToken: true,
    })
  );
  const { tokens } = getTokensFromLocalStorage();
  const { isSuccess, errors } = await fetchVerifyToken(
    tokens?.accessToken || ""
  );

  if (isSuccess) {
    dispatch(
      verifyTokenReducer({
        isAuthenticated: true,
        isLoadingVerifyToken: false,
      })
    );
  } else {
    dispatch(
      verifyTokenReducer({
        errors,
        isLoadingVerifyToken: false,
      })
    );
  }
};
