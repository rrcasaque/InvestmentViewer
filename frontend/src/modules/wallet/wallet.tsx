"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "@/styles/colors.css";
import { WalletTable } from "./components/walletTable";
import { AddStockModal } from "@/modules/wallet/components/AddStockModal";
import { EModals, openModal } from "@/contexts/ModalStore";
import { useStockStore } from "@/contexts/StockStore";
import { Stock } from "@/models/Stock";

interface WalletPageProps {
  initialStockList: Stock[];
}

export const WalletPage = ({ initialStockList }: WalletPageProps) => {
  const { stockList } = useStockStore();

  useEffect(() => {
    useStockStore.setState({ stockList: initialStockList });
  }, [initialStockList]);

  const sumStock = (stockList: Stock[]) => {
    return stockList.reduce((total, stock) => {
      return total + stock.currentValue * stock.amount;
    }, 0);
  };

  return (
    <div
      className="bg-black bg-opacity-85 backdrop-blur-sm rounded-2xl p-4"
      style={{ width: "calc(100% - 52px)", height: "calc(100% - 52px)" }}
    >
      <div className="flex items-center justify-between">
        <h1 className="color-primary-white text-5xl font-bold">
          R$
          {stockList.length === 0
            ? sumStock(initialStockList).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : sumStock(stockList).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
        </h1>
        <Select defaultValue="RFV">
          <SelectTrigger className="w-60 bg-primary text-white">
            <SelectValue placeholder="Renda fixa + variável" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="RFV">Renda fixa + variável</SelectItem>
              <SelectItem value="RF">Apenas renda fixa</SelectItem>
              <SelectItem value="RV">Apenas renda variável</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-start my-5">
        <div className="flex items-center justify-between w-[584px] mr-3">
          <Input className="w-60" placeholder="Buscar" />
          <Select>
            <SelectTrigger className="bg-white w-40">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-white w-40">
              <SelectValue placeholder="Emissor/Gestor" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-primary-white text-white">Limpar filtros</Button>
      </div>
      <WalletTable
        data={stockList.length === 0 ? initialStockList : stockList}
      />
      <div className="flex items-center justify-center mt-5">
        <Button onClick={() => openModal(EModals.AddStockModal)}>
          Adicionar Investimento
        </Button>
      </div>
      <AddStockModal />
    </div>
  );
};
