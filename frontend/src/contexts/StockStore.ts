import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStockState {
  stockList: {
    id: string;
    fullName: string;
    refName: string;
    currentValue: number;
    realValue: number;
    buyValue: number;
    amount: number;
    dividendYear: number;
    image?: string;
    category: string;
    subcategory: any;
    percentParticipation: number;
    historicalPrice: any;
    authorId: string;
  }[];
}

const stockState: IStockState = {
  stockList: [],
};

export const useStockStore = create(devtools(() => stockState));
