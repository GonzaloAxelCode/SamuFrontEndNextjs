import fetchRefreshToken from "../../services/refresh-token";

const refreshTokenLogin = async (dispatch: any) => {
  const { isSuccess } = await fetchRefreshToken();

  dispatch(
    refreshTokenLogin({
      isAuthenticated: isSuccess,
    })
  );
};

export default refreshTokenLogin;
