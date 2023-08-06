export interface UserProfile {
  email?: string;
  nickname?: string;
  first_name?: string;
  last_name?: string;
  date_joined?: string;
  is_active_from_admin?: boolean;
  isLoading?: boolean;
  errors?: any;
  get_short_name?: string;
  networkError?: boolean;
  photo_url?: string;
}
