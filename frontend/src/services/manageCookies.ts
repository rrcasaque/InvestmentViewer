"use server";

import { LoginUserResponse, RegisterUserResponse } from "@/models/Auth";
import { cookies } from "next/headers";

export const setAuthCookies = (
  authResponse: LoginUserResponse | RegisterUserResponse
) => {
  console.log(authResponse.autorizedUser);
  cookies().set("autorizedUser", JSON.stringify(authResponse.autorizedUser), {
    maxAge: 60 * 60 * 1000 * 24 * 30,
  });
  cookies().set("token", authResponse.token, {
    maxAge: 60 * 60 * 1000 * 24 * 30,
  });
};

export const removeAllCookies = () => {
  cookies().delete("autorizedUser");
  cookies().delete("token");
};
