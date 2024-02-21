import { BarLineChart } from "./components/BarLineChart";
import { Doughnut } from "./components/Doughnut";
import { LineChart } from "./components/LineChart";
import "@/styles/colors.css";

export const DashboardPage = () => {
  return (
    <div
      className="bg-black bg-opacity-85 backdrop-blur-sm rounded-2xl flex p-5 flex-col justify-between"
      style={{ width: "calc(100% - 52px)", height: "calc(100% - 52px)" }}
    >
      <div className=" flex w-full items-start justify-between flex-row">
        <div className="flex items-start justify-start flex-col">
          <h2 className="color-primary-white text-3xl font-bold">
            Total investido: R$1.234,56
          </h2>
          <h2 className="color-primary-white text-2xl font-bold mt-1">
            Posições mais relevantes
          </h2>
          <ul>
            <li className="text-white">HGLG11: R$1234,56 (5%)</li>
            <li className="text-white">BCFF11: R$1234,56 (5%)</li>
            <li className="text-white">PETR4: R$1234,56 (5%)</li>
            <li className="text-white">MGLU3: R$1234,56 (5%)</li>
            <li className="text-white">ALZR11: R$1234,56 (5%)</li>
          </ul>
        </div>
        <div className="flex items-start justify-center w-96">
          <Doughnut
            dataGraphic={[
              { color: "#0e3b65", label: "Renda Fixa", value: 60 },
              { color: "#6b7b8b", label: "Renda Variável", value: 40 },
            ]}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="h-60 w-full">
          <LineChart
            labels={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
            selicData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            walletData={[1, 3, 2, 1, 3, 4, 1, 2, 4, 6, 1, 2, 3, 2]}
          />
        </div>
        <div className="h-60 w-full">
          <BarLineChart />
        </div>
      </div>
    </div>
  );
};
