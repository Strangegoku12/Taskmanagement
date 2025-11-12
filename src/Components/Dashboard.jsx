import React, { useState } from "react";
import Sidenavbar from "./Sidenavbar";
import Chart from "react-apexcharts";
import { Button } from "@mui/material";

function Dashboard() {
  const [chartData] = useState({
    series: [44, 55, 13, 43, 22], // values for pie chart
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Apple", "Mango", "Banana", "Grapes", "Orange"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 300 },
            legend: { position: "bottom" },
          },
        },
      ],
      title: {
        text: "Fruit Sales Distribution",
        align: "center",
        style: { fontSize: "18px", fontWeight: "bold" },
      },
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  });

  return (
    <div className="flex h-screen">
      <Sidenavbar />

      <div className="flex-1 p-8 bg-gray-200 flex flex-col">
        <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

          {/* ✅ Apex Pie Chart */}
          <div className="flex flex-wrap justify-around gap-6">
            {/* Chart 1 */}
            <div className="flex flex-col justify-center items-center bg-gray-50 rounded-2xl p-4 shadow w-[45%]">
              <Chart options={chartData.options} series={chartData.series} type="pie" width="250" />
              <Button className="mt-4" variant="contained">View Details</Button>
            </div>

            {/* Chart 2 */}
            <div className="flex flex-col justify-center items-center bg-gray-50 rounded-2xl p-4 shadow w-[45%]">
              <Chart options={chartData.options} series={chartData.series} type="pie" width="250" />
              <Button className="mt-4" variant="contained">View Details</Button>
            </div>

            {/* Chart 3 */}
            <div className="flex flex-col justify-center items-center bg-gray-50 rounded-2xl p-4 shadow w-[45%]">
              <Chart options={chartData.options} series={chartData.series} type="pie" width="250" />
              <Button className="mt-4" variant="contained">View Details</Button>
            </div>

            {/* Chart 4 */}
            <div className="flex flex-col justify-center items-center bg-gray-50 rounded-2xl p-4 shadow w-[45%]">
              <Chart options={chartData.options} series={chartData.series} type="pie" width="250" />
              <Button className="mt-4" variant="contained">View Details</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
