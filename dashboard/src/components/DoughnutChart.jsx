import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 11, weight: "500" },
        boxWidth: 10,
        padding: 12,
      },
    },
  },
};

const DoughnutChart = ({ data }) => {
  if (!data || !data.datasets || data.datasets.length === 0 || data.datasets[0].data.length === 0) {
    return (
      <div className="w-[300px] h-[300px] mx-auto flex items-center justify-center text-xs font-medium text-gray-400 border border-dashed border-gray-100 rounded-xl bg-gray-50/50">
        Loading analytics engine...
      </div>
    );
  }

  return (
    <div className="w-[280px] h-[280px] mx-auto flex items-center justify-center p-2 animate-in fade-in duration-500">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;