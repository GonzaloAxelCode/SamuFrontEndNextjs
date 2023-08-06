import { siteURL } from "@/src/lib/envs";
import {
    ServiceFetchResponse,
    responseServiceState,
    returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { NameModels } from "../uploadcsv.model";
interface PostResponse {
  errors: any;
  isDeleting: boolean;
  status: number;
}
const fetchDeleteCsvdb = async (
  nameModel: NameModels
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  try {
    const response: AxiosResponse = await axios.delete(
      `${siteURL}/api/delete-all-${nameModel}`,
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
    };
  }
};

export default fetchDeleteCsvdb;
