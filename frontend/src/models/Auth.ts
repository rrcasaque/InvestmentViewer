export interface LoginUserPayload {
  email: string;
  password: string;
  keepConnected?: boolean;
}

export interface LoginUserResponse {
  autorizedUser: {
    id: string;
    name: string;
    email: string;
    password: string;
    investType: string;
    profileImage: string | null;
    stockWallet: {
      fullName: string;
      refName: string;
      currentValue: number;
      realValue: number;
      buyValue: number;
      amount: number;
      dividendYear: number;
      category: string;
      percentParticipation: number;
    }[];
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
    id: string;
    name: string;
    email: string;
    password: string;
    investType: string;
    profileImage: string | null;
    stockWallet: {
      fullName: string;
      refName: string;
      currentValue: number;
      realValue: number;
      buyValue: number;
      amount: number;
      dividendYear: number;
      category: string;
      percentParticipation: number;
    }[];
  };
  token: string;
  message: string;
}

export interface ValidateTokenResponse {
  message: string;
}
