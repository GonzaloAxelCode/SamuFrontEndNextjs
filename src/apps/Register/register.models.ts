export interface UserAuthRegister {
  email?: string;
  nickname?: string;
  password?: string;
  re_password?: string;
  last_name?: string;
  first_name?: string;
}

export interface RegisterStateType {
  isSendEmail?: boolean;
  isLoadingRegister?: boolean;
  isLoadingActivate?: boolean;
  errors?: RegisterErrors;
  isActivateEmail?: boolean;
}

export interface RegisterErrors {
  detail?: string;
  email?: string[];
  password?: string[];
  re_password?: string[];
  nickname?: string[];
  non_field_errors?: string[];
  token?: string[];
}

export interface UserRegisterData {
  email?: string;
  nickname?: string;
  password?: string;
  re_password?: string;
}

export interface DataActivation {
  uid?: string;
  token?: string;
}

export interface DataResendActivation {
  email?: string;
}

export interface DataResponseFetch {
  state?: number;
  isSuccess?: boolean;
  errors?: RegisterErrors;
}
