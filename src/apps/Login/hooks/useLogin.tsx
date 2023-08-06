import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UserAuth } from "../login.model";
import { verifyTokenReducer } from "../redux/LoginSlice";
import { logOut } from "../redux/useCases/log-out";
import { signIn } from "../redux/useCases/sign-in";
import { verifyToken } from "../redux/useCases/verify-token";
const useLogin = () => {
  const dispatch = useDispatch();
  const { isLoadingLogin, errors, isAuthenticated, isLoadingVerifyToken } =
    useSelector((state: RootState) => state.Login);

  const loginWithEmail = async (userAuth: UserAuth) => {
    await signIn(userAuth, dispatch);
  };
  const logOutApp = async () => {
    await logOut(dispatch);
  };
  const clearErrors = () => {
    dispatch(
      verifyTokenReducer({
        errors: {},
      })
    );
  };

  const checkAuthenticated = async () => {
    await verifyToken(dispatch);
  };

  return {
    loginWithEmail,
    isLoadingLogin,
    clearErrors,
    loginErrors: errors,
    isAuthenticated,
    logOutApp,
    checkAuthenticated,
    isLoadingVerifyToken,
  };
};

export default useLogin;
