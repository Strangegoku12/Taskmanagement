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


function About() {
  return (
    <>
      <div className="flex h-screen">
        <Sidenavbar />

        <div className="flex-1 p-8 bg-gray-200 flex flex-col">
          <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
            <div className="flex justify-between">
              <div>
                <h1>User Profile</h1>
                <h1>Employee ID:</h1><TextField type="text" placeholder="Show the first name" />
                <h1>Full Name:</h1><TextField type="text" placeholder="Show the first name" />
                <h1>Date of Birth:</h1><TextField type="text" placeholder="Show the first name" />
                <h1>Gender:</h1><TextField type="text" placeholder="Show the first name" />
              </div>
              <div>
                <div className=" border-4 border-indigo-600 ">
                  <img src="" alt="photo" ></img>
                </div>
              </div>
            </div>
            <div>
              <h1>Phone Number:</h1><TextField className="w-full" type="text" placeholder="Show the first name" />
                <h1>Email ID:</h1><TextField className="w-full" type="text" placeholder="Show the first name" />
                <h1>Department:</h1><TextField className="w-full" type="text" placeholder="Show the first name" />
                <h1>Designation:</h1><TextField className="w-full" type="text" placeholder="Show the first name" />
                <h1>Date of Joining:</h1><TextField className="w-full" type="text" placeholder="Show the first name" />
                <h1>Reporting Manager:</h1><TextField className="w-full" type="text" placeholder="Show the first name" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About