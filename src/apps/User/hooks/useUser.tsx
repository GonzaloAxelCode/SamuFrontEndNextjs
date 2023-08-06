import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/useCases/get-user";

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.User);

  const loadUser = async () => {
    await getUser(dispatch);
  };

  return {
    loadUser,
    user,
    isLoadingUser: user.isLoading,
  };
};

export default useUser;
