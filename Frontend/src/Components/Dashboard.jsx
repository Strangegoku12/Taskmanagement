import React, { useState } from "react";
import Sidenavbar from "./Sidenavbar";
import Chart from "react-apexcharts";

import {
  IconButton,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  Pagination,
  Stack
} from '@mui/material';

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
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
          <div className="grid grid-cols-2 grid-rows-2 h-screen w-full gap-4 p-4">

            {/* Box 1 - Top Left */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col p-2">
              <h1>Task Status</h1>
              <TextField
                type="text"
                label="Search"
                name="searchvalue"
                size="small"


                variant="outlined"
                className="w-[200px] mb-4"
              />
              <TableContainer component={Paper} className="mt-4">
                <Table>
                  <TableHead>
                    <TableRow className="text-secondary bg-blue-400 px-6 py-4 text-md font-semibold shadow dark:bg-black dark:bg-opacity-5 md:px-8">
                      <TableCell><b>ID</b></TableCell>
                      <TableCell><b>Name</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    <TableRow>
                      <TableCell>Anany</TableCell>
                      <TableCell>Anany12</TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* Box 2 - Top Right */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col p-2">
              <h1>Employee Table</h1>
              <TextField
                type="text"
                label="Search"
                name="searchvalue"
                size="small"


                variant="outlined"
                className="w-[200px] mb-4"
              />
              <TableContainer component={Paper} className="mt-4">
                <Table>
                  <TableHead className="text-secondary  bg-blue-400 px-6 py-4 text-md font-semibold shadow dark:bg-black dark:bg-opacity-5 md:px-8">
                    <TableRow>
                      <TableCell><b>ID</b></TableCell>
                      <TableCell><b>Name</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    <TableRow>
                      <TableCell>Anany</TableCell>
                      <TableCell>Anany12</TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* Box 3 - Bottom Left */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col p-2">
              <h1>Project Performance</h1>
              <Chart options={chartData.options} series={chartData.series} type="pie" width="230" />
              <Button variant="contained" className="mt-4">View Details</Button>
            </div>

            {/* Box 4 - Bottom Right */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col p-2">
              <h1>Employee Performance</h1>
              <Chart options={chartData.options} series={chartData.series} type="pie" width="230" />
              <Button variant="contained" className="mt-4">View Details</Button>            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
