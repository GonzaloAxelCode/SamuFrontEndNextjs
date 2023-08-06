import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { NameModels } from "../uploadcsv.model";

const fetchUploadCSV = async (
  file: File,
  nameModel: NameModels,
  encode: string,
  delimiter: string
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  try {
    const formData = new FormData();
    formData.append("csv_file", file);
    formData.append("delimiter", delimiter);
    formData.append("encode", encode);
    const response: AxiosResponse = await axios.post(
      `${siteURL}/api/upload-csv-${nameModel}`,
      formData,
      {
        cancelToken: source.token,
      }
    );

    return {
      ...responseServiceState,
      data: response?.data,
      HTTPstatus: response.status,
    };
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      errors: e.response?.data,
      HTTPstatus: e.response?.status,
      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchUploadCSV;
