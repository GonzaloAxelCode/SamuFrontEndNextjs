export interface LoginStateType {
  isAuthenticated?: boolean;
  accessToken?: string;
  refreshToken?: string;
  isLoading?: boolean;
  errors?: LoginErrors;
  isLoadingRefreshToken?: boolean;
  isLoadingLogin?: boolean;
  isLoadingVerifyToken?: boolean;
}
export interface LoginErrors {
  detail?: string;
  email?: string[];
  password?: string[];
}

export interface Tokens {
  access: string;
  refresh: string;
}

export interface UserAuth {
  email: string;
  password: string;
}
