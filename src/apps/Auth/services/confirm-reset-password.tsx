import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { ConfirmResetPasswordAuth } from "../auth.models";

const confirmResetPassword = async (
  data: ConfirmResetPasswordAuth
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  try {
    const response: AxiosResponse = await axios.post(
      `${siteURL}/auth/users/reset_password_confirm/`,

      data,
      {
        cancelToken: source.token,
      }
    );
    if (response.status === 204) {
      return {
        ...responseServiceState,
        HTTPstatus: response.status,
      };
    } else {
      return {
        ...responseServiceState,
        HTTPstatus: response?.status,
        isSuccess: false,
        errors: response?.data,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      HTTPstatus: e?.response?.status,
      isSuccess: false,
      errors: e?.response?.data,
    };
  } finally {
    source.cancel();
  }
};

export default confirmResetPassword;
