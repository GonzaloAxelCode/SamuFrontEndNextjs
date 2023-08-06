import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signupReducer } from "../redux/RegisterSlice";
import signUp from "../redux/useCases/sign-up";
import { UserRegisterData } from "../register.models";

const useRegister = () => {
  const dispatch = useDispatch();
  const { isLoadingRegister, isLoadingActivate, errors, isSendEmail } =
    useSelector((state: RootState) => state.Register);
  const signNupWithEmail = async (user: UserRegisterData) => {
    await signUp(user, dispatch);
  };
  const clearErrors = () => {
    dispatch(
      signupReducer({
        errors: {},
      })
    );
  };
  return {
    signNupWithEmail,
    errors: errors,
    signupLoading: isLoadingRegister,
    clearErrors,
    isLoadingActivate,
    isSendEmail,
  };
};

export default useRegister;
