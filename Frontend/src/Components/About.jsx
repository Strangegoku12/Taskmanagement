import Sidenavbar from "./Sidenavbar"
import '../App.css'
import {  useEffect } from "react";
import axios from "axios";
import {
  IconButton,
  Button,
  TextField,
  Table,
  TableBody,
    Avatar,
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
import { useState } from "react";


function About() {
  const [employeedetails,setEmployeedetails]=useState({
    image: '',
    employeeid:"",
    fullname:"",
    date_of_birth:"",
    gender:"",
    phone_number:"",
    email:"",
    department:"",
    designation:"",
    date_of_joining:"",
    reportingmanager:""
  })


    // FETCH ALL EMPLOYEES
 async function getallemployeesdata() {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:4000/about", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setEmployeedetails(response.data.employeedata);
  } catch (error) {
    console.log("ERROR:", error);
  }
}

    useEffect(() => {
      getallemployeesdata();
    }, []);
  return (
    <>
      <div className="flex h-screen">
        <Sidenavbar />

        <div className="flex-1 p-8 bg-[#eef2ff] flex flex-col">
          <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
            <div className="p-6 bg-white rounded-xl shadow-md space-y-6">

              <div className="flex gap-6">

                <div className="flex-1 space-y-4">
                  <h1 className="text-xl font-semibold mb-2">User Profile</h1>

                  <div>
                    <label className="font-medium">Employee ID:</label>
                    <TextField fullWidth size="small" InputProps={{ readOnly: true }} value={employeedetails.employeeid} placeholder="Enter Employee ID" />
                  </div>

                  <div>
                    <label className="font-medium">Full Name:</label>
                    <TextField fullWidth size="small" InputProps={{ readOnly: true }} value={employeedetails.fullname} placeholder="Enter Full Name" />
                  </div>
                     <div>
                    <label className="font-medium">Date of Birth:</label>
                    <TextField fullWidth size="small" InputProps={{ readOnly: true }} value={employeedetails.date_of_birth} placeholder="DD/MM/YYYY" />
                  </div>
                </div>

                <div className="w-[200px] flex justify-end mt-16">
                  <div className="w-[200px] h-[200px] border-4 border-indigo-600 rounded-full  overflow-hidden bg-gray-100 shrink-0">
                  <Avatar src={`http://localhost:4000/uploads/${employeedetails.profileimage}`} sx={{ width: 200, height: 200 }} />

                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              

                  <div>
                    <label className="font-medium">Gender:</label>
                    <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.gender} placeholder="Gender" />
                  </div>

                <div>
                  <label className="font-medium">Phone Number:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.phone_number} placeholder="Phone Number" />
                </div>

                <div>
                  <label className="font-medium">Email ID:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.email} placeholder="Email ID" />
                </div>

                <div>
                  <label className="font-medium">Department:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.department} placeholder="Department" />
                </div>

                <div>
                  <label className="font-medium">Designation:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.designation} placeholder="Designation" />
                </div>

                <div>
                  <label className="font-medium">Date of Joining:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.date_of_joining} placeholder="DD/MM/YYYY" />
                </div>

                <div>
                  <label className="font-medium">Reporting Manager:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.reportingmanager} placeholder="Manager Name" />
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default About