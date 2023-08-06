import { siteURL } from "@/src/lib/envs";
import {
  responseServiceState,
  returnNetworkError,
  ServiceFetchResponse,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";

const fetchGetModels = async (): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();

  try {
    const response: AxiosResponse = await axios.get(`${siteURL}/api/verify-data-models`, {
      cancelToken: source.token,
    });
    return {
      ...responseServiceState,
      data: response?.data,
      HTTPstatus:response.status
    };
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      isSuccess: false,
      HTTPstatus:e.response?.status,
      errors: e.response?.data,
    };
  }
};

export default fetchGetModels;
