import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { UserRegisterData } from "../register.models";

export const registerFetch = async (
  user: UserRegisterData
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();

  try {
    const response: AxiosResponse = await axios.post(
      `${siteURL}/auth/users/`,
      user,
      {
        cancelToken: source.token,
      }
    );
    if (response.status == 201) {
      return {
        ...responseServiceState,
        HTTPstatus: response.status,
      };
    } else {
      return {
        ...responseServiceState,
        isSuccess: false,
        HTTPstatus: response.status,
        errors: response?.data,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      isSuccess: false,
      HTTPstatus: e?.response?.status,
      errors: e?.response?.data,
    };
  } finally {
    source.cancel();
  }
};
