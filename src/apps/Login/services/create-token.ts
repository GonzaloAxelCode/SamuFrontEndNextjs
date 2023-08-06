import { siteURL } from "@/src/lib/envs";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "@/src/lib/error-https-services";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { LoginErrors, Tokens, UserAuth } from "../login.model";
import { TokenPair } from "./token-service";
interface Response {
  errors?: LoginErrors;
  status?: number;
  isAuthenticated?: boolean;
  data?: TokenPair;
  networkerror?: boolean;
}

interface PostResponse extends Tokens {}

const fetchCreateToken = async (
  userAuth: UserAuth
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();

  try {
    const response: AxiosResponse<PostResponse> = await axios.post(
      `${siteURL}/auth/jwt/create/`,
      userAuth
    );
    if (response.status === 200) {
      return {
        ...responseServiceState,
        HTTPstatus: response.status,
        data: response?.data,
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
      errors: e.response?.data,
      HTTPstatus: e?.response?.status,
      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchCreateToken;
