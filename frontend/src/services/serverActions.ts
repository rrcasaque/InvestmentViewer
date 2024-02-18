"use server";

import { API } from "@/models/Api";
import {
  LoginUserPayload,
  LoginUserResponse,
  RegisterUserPayload,
  RegisterUserResponse,
} from "@/models/Auth";
import axios from "axios";
import { cookies } from "next/headers";

export const loginUser = async (
  payload: LoginUserPayload
): Promise<LoginUserResponse> => {
  try {
    const res = await axios.post(API.AUTH.LOGIN, payload);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const registerUser = async (
  payload: RegisterUserPayload
): Promise<RegisterUserResponse> => {
  try {
    const res = await axios.post(API.AUTH.REGISTER, payload);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const validateToken = async () => {
  try {
    const token = cookies().get("token");
    const res = await axios.get(API.AUTH.VALIDATE_TOKEN, {
      params: {
        validate: true,
      },
      headers: {
        Authorization: token?.value,
      },
    });
    return res.data;
  } catch (error: any) {
    console.log(error);
  }
};
