import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { DataActivation } from "../register.models";

const fetchActivation = async (
  data: DataActivation
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  try {
    const response: AxiosResponse = await axios.post(
      `${siteURL}/auth/users/activation/`,
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
        isSuccess: false,
        errors: response?.data,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      errors: e?.response?.data,
      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchActivation;
