import Sidenavbar from "./Sidenavbar"
import '../App.css'

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
import { useState } from "react";


function About() {
  const [employeedetails,setEmployeedetails]=useState({
    employeeid:"T001",
    fullname:"Anany Tewari",
    date_of_birth:"24/04/2025",
    gender:"Male",
    phone_number:"8303952900",
    email_id:"ananytiwari415@gmail.com",
    department:"Information Technology",
    designation:"Software Developer",
    date_of_joining:"20/05/2025",
    resporting_manager:"Anany"
  })
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
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
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
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.email_id} placeholder="Email ID" />
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
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" value={employeedetails.resporting_manager} placeholder="Manager Name" />
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