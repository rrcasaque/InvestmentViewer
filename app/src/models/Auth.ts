export interface LoginUserPayload {
  email: string;
  password: string;
  keepConnected?: boolean;
}

export interface LoginUserResponse {
  autorizedUser: {
    id: number;
    name: string;
    email: string;
    password: string;
    profileImage: string | null;
  };
  token: string;
}

export interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  autorizedUser: {
    id: number;
    name: string;
    email: string;
    password: string;
    profileImage: string | null;
  };
  token: string;
}

export interface ValidateTokenResponse {
  message: string;
}
