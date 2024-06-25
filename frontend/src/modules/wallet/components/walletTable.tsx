import { SortTable } from "@/components/ui/sort-table";
import { createColumnHelper } from "@tanstack/react-table";
import "@/styles/colors.css";

interface Wallet {
  refName: string;
  category: string;
  currentValue: number;
  amount: number;
}

const columnHelper = createColumnHelper<Wallet>();

const columns = [
  columnHelper.accessor("refName", {
    cell: (info) => info.getValue(),
    header: "Referência",
  }),
  columnHelper.accessor("category", {
    cell: (info) => info.getValue(),
    header: "Categoria",
  }),
  columnHelper.accessor("currentValue", {
    cell: (info) => info.getValue(),
    header: "Valor atual",
  }),
  columnHelper.accessor("amount", {
    cell: (info) => info.getValue().toLocaleString(),
    header: "Quantidade de cotas",
    meta: {
      isNumeric: true,
    },
  }),
];

const data = [
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
  {
    stockName: "HGLG11",
    stockCategory: "FII",
    totalPrice: 1234.56,
    managerName: "Itaú",
  },
];

interface WalletTableProps {
  data: Wallet[];
}

export const WalletTable = ({ data }: WalletTableProps) => {
  return (
    <div className="w-full max-h-wallet-table overflow-auto custom-scrool">
      <SortTable
        tClass="border border-primary-white overflow-auto"
        trClass="hover:bg-[#3f709d] hover:cursor-pointer table-row"
        theadClass="bg-primary-dark"
        thClass="text-white border border-primary-white hover:cursor-pointer"
        tdClass="text-center border border-primary-white font-bold"
        data={data}
        columns={columns}
      />
    </div>
  );
};
