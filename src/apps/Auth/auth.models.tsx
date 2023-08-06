export interface ResetPasswordAuth {
  email?: string;
}

export interface ConfirmResetPasswordAuth {
  uid: string;
  token: string;
  new_password: string;
  re_new_password: string;
}

export interface ChangePasswordType {
  new_password: string;
  re_new_password: string;
  current_password: string;
}

export interface AuthStateType {
  isLoading?: boolean;
  isUpdatedPassword?: boolean;
  isUserIsActivatedWithAdmin?: false;
  isUserActivatedwithEmail?: false;
  errors?: AuthErrors;
}

export interface AuthErrors {
  detail?: string;
  new_password?: string[];
  non_field_errors?: string[];
  token?: string[];
  current_password?: string[];
}
export interface DataResponseFetch {
  state?: number;
  isSuccess?: boolean;
  errors?: AuthErrors;
}
