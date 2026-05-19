import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: { size: 11, weight: "500" },
        boxWidth: 12,
      }
    },
    title: {
      display: false, 
    },
  },
  scales: {
    x: { grid: { display: false } }, 
    y: { grid: { color: "#f3f4f6" } }
  }
};

const VerticalGraph = ({ data }) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-50 rounded-xl flex items-center justify-center text-xs font-medium text-gray-400">
        Loading analytics visualizations...
      </div>
    );
  }

  return (
    <div className="w-full h-72 animate-in fade-in duration-500">
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalGraph;