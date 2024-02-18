"use client";

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

export const WalletPage = () => {
  return (
    <div
      className="bg-black bg-opacity-85 backdrop-blur-sm rounded-2xl p-4"
      style={{ width: "calc(100% - 52px)", height: "calc(100% - 52px)" }}
    >
      <div className="flex items-center justify-between">
        <h1 className="color-primary-white text-5xl font-bold">R$1.234,56</h1>
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
      <WalletTable />
      <div className="flex items-center justify-center mt-5">
        <Button>Adicionar Investimento</Button>
      </div>
    </div>
  );
};
