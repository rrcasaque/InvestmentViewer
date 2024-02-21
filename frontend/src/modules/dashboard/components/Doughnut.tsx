"use client";

import { Chart as ChartJS, ArcElement } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut as Pie } from "react-chartjs-2";

interface DoughnutProps {
  dataGraphic: {
    label: string;
    value: number;
    color: string;
  }[];
}

export const Doughnut = ({ dataGraphic }: DoughnutProps) => {
  ChartJS.register(ArcElement);

  const values = dataGraphic.map((data) => {
    return data.value;
  });

  const colors = dataGraphic.map((data) => {
    return data.color;
  });

  const data = {
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: "white",
        borderWidth: 0.5,
      },
    ],
  };

  const [showLegend, setShowLegend] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLegend(true);
    }, 750);
  }, []);

  return (
    <div className="w-full flex items-end justify-center flex-col">
      <div className="flex items-center justify-center w-2/5">
        <Pie
          data={data}
          options={{
            layout: {
              padding: -10,
            },
          }}
        />
      </div>
      {showLegend && (
        <div className="flex items-end justify-around w-full ml-2 mt-2 flex-col">
          {dataGraphic.map((data) => {
            return (
              <div
                className="text-white flex items-center justify-center flex-wrap m-1"
                key={data.label}
              >
                {data.label}
                <div
                  style={{
                    backgroundColor: data.color,
                  }}
                  className={`ml-2 w-10 h-5 flex items-center justify-center text-sm`}
                >
                  {data.value + "%"}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
