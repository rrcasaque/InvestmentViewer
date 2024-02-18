import { SortTable } from "@/components/ui/sort-table";
import { createColumnHelper } from "@tanstack/react-table";
import "@/styles/colors.css";

interface Wallet {
  stockName: string;
  stockCategory: string;
  totalPrice: number;
  managerName: string;
}

const columnHelper = createColumnHelper<Wallet>();

const columns = [
  columnHelper.accessor("stockName", {
    cell: (info) => info.getValue(),
    header: "Referência",
  }),
  columnHelper.accessor("stockCategory", {
    cell: (info) => info.getValue(),
    header: "Categoria",
  }),
  columnHelper.accessor("managerName", {
    cell: (info) => info.getValue(),
    header: "Emissor/Gestor",
  }),
  columnHelper.accessor("totalPrice", {
    cell: (info) => "R$ " + info.getValue().toLocaleString(),
    header: "Total investido",
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

export const WalletTable = () => {
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
