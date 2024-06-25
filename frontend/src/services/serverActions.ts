"use server";
import { API } from "@/models/Api";
import {
  LoginUserPayload,
  LoginUserResponse,
  RegisterUserPayload,
  RegisterUserResponse,
} from "@/models/Auth";
import { AddStockPayload } from "@/models/Stock";
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

export const updateInvestType = async (investType: number) => {
  try {
    const token = cookies().get("token");
    const user = JSON.parse(cookies().get("autorizedUser")?.value as string);
    if (!token) throw new Error("Token not found");
    const res = await axios.put(
      API.USER.EDIT_USER,
      { investType: String(investType), email: user.email },
      {
        headers: {
          Authorization: token?.value,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const validateToken = async () => {
  try {
    const token = cookies().get("token");
    if (!token) throw new Error("Token not found");
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
    console.log(error.message);
  }
};

export const addStock = async (payload: AddStockPayload) => {
  try {
    const token = cookies().get("token");
    const user = cookies().get("autorizedUser");
    if (!token) throw new Error("Token not found");
    const res = await axios.post(
      API.STOCK.CREATE_STOCKS,
      { ...payload, userId: JSON.parse(user?.value as string).id },
      {
        headers: {
          Authorization: token.value,
        },
      }
    );

    return res.data.newStock;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getStocks = async () => {
  const userId = JSON.parse(cookies().get("autorizedUser")?.value as string).id;
  try {
    const token = cookies().get("token");
    if (!token) throw new Error("Token not found");
    const res = await axios.get(`${API.STOCK.GET_STOCKS}/${userId}`, {
      headers: {
        Authorization: token.value,
      },
    });
    return res.data.stockList;
  } catch (error: any) {
    console.log(error.message);
  }
};
