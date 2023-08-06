import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { getTokensFromLocalStorage } from "./token-service";

const fetchRefreshToken = async (): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  const { tokens } = getTokensFromLocalStorage();
  try {
    const response: AxiosResponse = await axios.post(
      `${siteURL}/jwt/refresh/`,
      {
        refresh: tokens?.refreshToken,
      },
      {
        cancelToken: source.token,
      }
    );

    return {
      ...responseServiceState,
      HTTPstatus: response.status,
    };
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

export default fetchRefreshToken;
