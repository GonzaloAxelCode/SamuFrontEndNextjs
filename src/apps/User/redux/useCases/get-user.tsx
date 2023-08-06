import { Dispatch } from "redux";
import getUserFetch from "../../services/get-user-fetch";
import { getUserReducer } from "../userSlice";

export const getUser = async (dispatch: Dispatch<any>) => {
  dispatch(
    getUserReducer({
      isLoading: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await getUserFetch();
  if (isSuccess) {
    dispatch(getUserReducer(data));

    return true;
  } else {
    dispatch(
      getUserReducer({
        isLoading: false,
        errors,
        networkError,
      })
    );
    return false;
  }
};
