

export const returnNetworkError = {
  networkError: true,
  errors: {},
  data: {},
  HTTPstatus: 0,
  isSuccess: false,
};

export const responseServiceState = {
  networkError: false,
  errors: {},
  data: {},
  HTTPstatus: 200,
  isSuccess: true,
};
type HttpStatusCode =
  | 200 // OK
  | 201 // Created
  | 204 // No Content
  | 400 // Bad Request
  | 401 // Unauthorized
  | 403 // Forbidden
  | 404 // Not Found
  | 500 // Internal Server Error
  | 502 // Bad Gateway
  | 503; // Service Unavailable

export interface ServiceFetchResponse {
  networkError: boolean;
  errors: any;
  data: any;
  isSuccess: boolean;
  HTTPstatus: number;
}
