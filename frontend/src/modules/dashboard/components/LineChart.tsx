"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface LineChartProps {
  labels: string[];
  selicData: number[];
  walletData: number[];
}

export const LineChart = ({
  selicData,
  walletData,
  labels,
}: LineChartProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "First dataset",
        data: selicData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: walletData,
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        scales: {
          x: {
            position: "bottom",
          },
        },
      }}
    />
  );
};
