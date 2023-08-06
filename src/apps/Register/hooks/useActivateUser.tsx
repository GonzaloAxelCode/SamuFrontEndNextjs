import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import activateUser from "../redux/useCases/activate-user";
import { DataActivation } from "../register.models";

const useActivateUser = () => {
  const dispatch = useDispatch();
  const { isLoadingActivate, errors, isActivateEmail } = useSelector(
    (state: RootState) => state.Register
  );

  const activateUserWithEmail = async (data: DataActivation) => {
    activateUser(data, dispatch);
  };

  return {
    activateUserWithEmail,
    isLoadingActivate,
    errors,
    isActivateEmail,
  };
};

export default useActivateUser;
