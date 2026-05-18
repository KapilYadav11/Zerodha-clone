import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    return (
      <div className="w-[300px] h-[300px] mx-auto flex items-center justify-center text-xs font-medium text-gray-400">
        Loading analytics engine...
      </div>
    );
  }

  return (
    <div className="w-[300px] h-[300px] mx-auto flex items-center justify-center animate-in fade-in duration-500">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;