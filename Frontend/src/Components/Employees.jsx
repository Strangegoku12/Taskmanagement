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

function Employees(){
return(
    <>
      <div className="flex h-screen">
        <Sidenavbar />

        <div className="flex-1 p-8 bg-gray-200 flex flex-col">
          <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
            <div className="p-6 bg-white rounded-xl shadow-md space-y-6">

              <div className="flex gap-6">

                <div className="flex-1 space-y-4">
                  <h1 className="text-xl font-semibold mb-2">User Profile</h1>

                  <div>
                    <label className="font-medium">Employee ID:</label>
                    <TextField fullWidth size="small" InputProps={{ readOnly: true }} placeholder="Enter Employee ID" />
                  </div>

                  <div>
                    <label className="font-medium">Full Name:</label>
                    <TextField fullWidth size="small" InputProps={{ readOnly: true }} placeholder="Enter Full Name" />
                  </div>
                     <div>
                    <label className="font-medium">Date of Birth:</label>
                    <TextField fullWidth size="small" InputProps={{ readOnly: true }} placeholder="DD/MM/YYYY" />
                  </div>
                </div>

                <div className="w-[200px] flex justify-end mt-16">
                  <div className="w-[200px] h-[200px] border-4 border-indigo-600 rounded-full  overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src=""
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              

                  <div>
                    <label className="font-medium">Gender:</label>
                    <TextField fullWidth InputProps={{ readOnly: true }} size="small" placeholder="Gender" />
                  </div>

                <div>
                  <label className="font-medium">Phone Number:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" placeholder="Phone Number" />
                </div>

                <div>
                  <label className="font-medium">Email ID:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" placeholder="Email ID" />
                </div>

                <div>
                  <label className="font-medium">Department:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" placeholder="Department" />
                </div>

                <div>
                  <label className="font-medium">Designation:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" placeholder="Designation" />
                </div>

                <div>
                  <label className="font-medium">Date of Joining:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" placeholder="DD/MM/YYYY" />
                </div>

                <div>
                  <label className="font-medium">Reporting Manager:</label>
                  <TextField fullWidth InputProps={{ readOnly: true }} size="small" placeholder="Manager Name" />
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
    </>
)
}

export default Employees