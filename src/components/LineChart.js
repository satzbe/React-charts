import React from "react";
import Chart, { CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "August",
  "November",
  "December",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Sale one",
      backgroundColor: "#fcba03",
      borderColor: "#c2a804",
      data: [0, 10, 5, 2, 20, 30, 45, 20, 20, 22, 20, 18],
    },
    {
      label: "Sale two",
      backgroundColor: "#058dfc",
      borderColor: "#0763ad",
      data: [0, 5, 15, 20, 0, 10, 25, 5, 20, 30, 35, 35],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
