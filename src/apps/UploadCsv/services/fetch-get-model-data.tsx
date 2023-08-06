import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { NameModels } from "../uploadcsv.model";
const fetchGetModelData = async (
  nameModel: NameModels
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();

  try {
    const response: AxiosResponse = await axios.get(
      `${siteURL}/api/get-all-${nameModel}`,
      { cancelToken: source.token }
    );

    return {
      ...responseServiceState,
      HTTPstatus: response.status,
      data: response?.data,
    };
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      isSuccess: false,
      HTTPstatus: e?.response?.status,
      errors: e?.response?.data,
    };
  }
};

export default fetchGetModelData;
