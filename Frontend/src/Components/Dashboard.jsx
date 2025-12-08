import React, { useEffect, useState } from "react";
import Sidenavbar from "./Sidenavbar";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

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
  const [pendingtask, setPendingtask] = useState(0);
const [completedtask, setCompletedtask] = useState(0);

const [chartData, setChartData] = useState({
  series: [0, 0, 0],   // initial empty chart
  options: {
    chart: { type: 'donut' },
    labels: ["Pending", "Completed", "In-Progress"],
    legend: { show: true, position: 'bottom', horizontalAlign: 'center' },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: w => w.globals.seriesTotals.reduce((a, b) => a + b, 0)
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => opts.w.config.series[opts.seriesIndex]
    }
  }
});

  const [empPerformance] = useState({
    series: [
      {
        name: "Pending Tasks",
        data: [2, 1, 1, 1], // Anany, Yash, Tushar, Krishna
      },
      {
        name: "Completed Tasks",
        data: [5, 6, 2, 3],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },

      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "45%",
        },
      },

      dataLabels: {
        enabled: true,
        formatter: (val) => val, // Only number, no %
      },

      xaxis: {
        categories: ["Anany", "Yash", "Tushar", "Krishna"],
      },

      yaxis: {
        title: {
          text: "Tasks",
        },
      },

      legend: {
        position: "bottom",
      },

      title: {
        text: "Employee Performance (Pending vs Completed)",
        align: "center",
        style: { fontSize: "18px", fontWeight: "bold" },
      },
    },
  });

  const [totaltask, setTotaltask] = useState([])
    const [getallemployees, setAllemployees] = useState([]);



  async function totaltaskapi() {
    try {
       const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:4000/gettask",{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      setTotaltask(response.data.task);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  }

   async function getallemployeesdata() {
    try {
      const response = await axios.get("http://localhost:4000/getemployees");
      setAllemployees(response.data.employees);
    } catch (error) {
      console.log(error);
    }
  }


async function getpendingtask() {
  try {
    const response = await axios.get("http://localhost:4000/taskchart");

    setPendingtask(response.data.tasklength);
    setCompletedtask(response.data.totalcompletetd);

  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    getallemployeesdata();
    totaltaskapi()
    getpendingtask()
      const inProgress = 60; // or calculate dynamically

  setChartData(prev => ({
    ...prev,
    series: [pendingtask, completedtask, inProgress]
  }));

  }, [pendingtask, completedtask]);

  return (
    <div className="flex h-screen">
      <Sidenavbar />

      <div className="flex-1 p-8 bg-[#e2e8f0] flex flex-col">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
          <div className="grid grid-cols-2 grid-rows-2 h-screen w-full gap-6 p-4">


            {/* Box 3 - Bottom Left */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col p-2 items-center pt-4 ">
              <ReactApexChart options={chartData.options} series={chartData.series} type="donut" width="350" />

            </div>

            {/* Box 4 - Bottom Right */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col items-center p-4">
              <Chart
                options={empPerformance.options}
                series={empPerformance.series}
                type="bar"
                width="450"
              />
            </div>


            {/* Box 1 - Top Left */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col p-3">
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
                <Table stickyHeader>
                  <TableHead>
                    <TableRow className="text-secondary bg-blue-400 px-6 py-4 text-md font-semibold shadow dark:bg-black dark:bg-opacity-5 md:px-8">
                      <TableCell><b>Name</b></TableCell>
                      <TableCell><b>Status</b></TableCell>
                      <TableCell><b>Priority</b></TableCell>
                      <TableCell className="whitespace-nowrap"><b>Assigned To</b></TableCell>
                      <TableCell className="whitespace-nowrap"><b>Created on</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {totaltask.map((row) => (
                      <TableRow key={row._id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.tasktitle}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.totaltime}</TableCell>
                        <TableCell>{row.createdby}</TableCell>
                        <TableCell>{row.createdAt.substring(0, 10)}</TableCell>
                        <TableCell align="center">

                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* Box 2 - Top Right */}
            <div className="bg-gray-50 rounded-2xl shadow flex flex-col p-3">
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
                <Table stickyHeader>
                  <TableHead className="text-secondary  bg-blue-400 px-6 py-4 text-md font-semibold shadow dark:bg-black dark:bg-opacity-5 md:px-8">
                    <TableRow>
                      <TableCell className="bg-blue-400 text-white"><b>Empid</b></TableCell>
                      <TableCell className="bg-blue-400 text-white"><b>Fullname</b></TableCell>
                      <TableCell className="bg-blue-400 text-white"><b>Department</b></TableCell>
                      <TableCell className="bg-blue-400 text-white whitespace-nowrap">
                        <b>Reportingmanager </b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                 <TableBody>
                  {getallemployees.map((emp, index) => (
                    <TableRow key={index}>
                      <TableCell>{emp.employeeid}</TableCell>
                      <TableCell>{emp.fullname}</TableCell>
                      <TableCell>{emp.department}</TableCell>
                      <TableCell>{emp.reportingmanager}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
