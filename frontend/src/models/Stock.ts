export enum ECategory {
  CDB = "CDB",
  LCI = "LCI",
  LCA = "LCA",
  FII = "FII",
  DEBENTURE = "DEBENTURE",
  FUND = "FUND",
}

export interface AddStockPayload {
  refName: string;
  buyValue: number;
  amount: number;
  category: ECategory;
  userId?: string;
}

export interface addStockResponse {
  newStock: {
    id: string;
    fullName: string;
    refName: string;
    currentValue: number;
    realValue: number;
    buyValue: number;
    amount: number;
    dividendYear: number;
    image: string | null;
    category: string;
    subcategory: any;
    percentParticipation: number;
    historicalPrice: any;
    authorId: string;
  };
}

export interface Stock {
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
}
