import { Doughnut } from "./components/Doughnut";
import { LineChart } from "./components/LineChart";
import "@/styles/colors.css";

export const DashboardPage = () => {
  return (
    <div
      className="bg-black bg-opacity-85 backdrop-blur-sm rounded-2xl flex p-5"
      style={{ width: "calc(100% - 52px)", height: "calc(100% - 52px)" }}
    >
      <div className="flex items-center justify-center w-96 h-48">
        <Doughnut
          dataGraphic={[
            { color: "#0e3b65", label: "Renda Fixa", value: 60 },
            { color: "#6b7b8b", label: "Renda Variável", value: 40 },
          ]}
        />
      </div>
      {/* <div className="h-60 w-60">
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
      </div> */}
    </div>
  );
};
