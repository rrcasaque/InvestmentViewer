import { SortTable } from "@/components/ui/sort-table";
import { createColumnHelper } from "@tanstack/react-table";
import "@/styles/colors.css";

interface ExtractRec {
  emissionDate: string;
  clientName: string;
  totalRetired: number;
}

const columnHelper = createColumnHelper<ExtractRec>();

const columns = [
  columnHelper.accessor("emissionDate", {
    cell: (info) => info.getValue(),
    header: "Data de Emissão",
  }),
  columnHelper.accessor("clientName", {
    cell: (info) => info.getValue(),
    header: "Cliente",
  }),
  columnHelper.accessor("totalRetired", {
    cell: (info) => info.getValue() + " MWh",
    header: "Total Aposentado",
    meta: {
      isNumeric: true,
    },
  }),
];

const data = [
  {
    clientName: "O boticário a",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1000,
  },
  {
    clientName: "O boticário b",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1001,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
  },
  {
    clientName: "O boticário c",
    emissionDate: new Date().toLocaleDateString(),
    totalRetired: 1002,
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
