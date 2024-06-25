import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IAuthState {
  isAuthenticated: boolean;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    investType: string;
    password: string;
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
}

const authState: IAuthState = {
  token: "",
  isAuthenticated: false,
  user: {
    email: "",
    id: "",
    name: "",
    investType: "",
    password: "",
    stockWallet: [],
  },
};

export const useAuthStore = create(devtools(() => authState));
