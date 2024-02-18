import { create } from "zustand";
import { devtools } from "zustand/middleware";

const authState = {
  isAuthenticated: false,
  user: {},
};

export const useAuthStore = create(devtools(() => authState));
