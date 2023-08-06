import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { DataResendActivation } from "../register.models";

const fetchResendActivate = async (
  data: DataResendActivation
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  try {
    const response: AxiosResponse = await axios.post(
      `${siteURL}/auth/users/resend_activation/`,
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
        HTTPstatus: response.status,
        errors: response?.data,
        isSuccess: false,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      errors: e?.data?.response,
      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchResendActivate;
