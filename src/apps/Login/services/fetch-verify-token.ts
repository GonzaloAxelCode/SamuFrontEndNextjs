import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";

const fetchVerifyToken = async (
  accessToken: string
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();

  try {
    const response: AxiosResponse = await axios.post(
      `${siteURL}/auth/jwt/verify/`,
      {
        token: accessToken,
      },
      {
        cancelToken: source.token,
      }
    );
    if (response.status == 200) {
      return {
        ...responseServiceState,
        HTTPstatus: response.status,
      };
    } else {
      return {
        ...responseServiceState,
        errors: response?.data,
        isSuccess: false,
        HTTPstatus: response.status,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      HTTPstatus: e?.response?.status,
      errors: e?.response?.data,
      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchVerifyToken;
