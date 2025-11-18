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


function Employees() {
  const[open,setOpen]=useState(false)
  return (
    <>
      <div className="flex h-screen">
        <Sidenavbar />

        <div className="flex-1 p-8 bg-gray-200 flex flex-col">
          <div className="flex justify-between">
            <h1>Employee Managemenet System</h1>
            <Button variant="contained" color="primary" onClick={()=>setOpen(true)}>Add Employee</Button>
          </div>
          <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
            <div>

              <TableContainer component={Paper} className="mt-4">
                <Table>
                  <TableHead>
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


          </div>
        </div>
      </div>


       <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 600,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 3,
                    zIndex: 10,
                  }}
                >
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4 text-center">Add New Task</h2>

                  </div>

                  <form  className="grid grid-cols-2 gap-4">
                    <TextField
                      label="Name"
                      name="name"

                      required
                    />
                    <TextField
                      label="Task Title"
                      name="title"

                      required
                    />
                    <TextField
                      label="Status"
                      name="status"

                      required
                    />
                    <TextField
                      label="Total Time"
                      name="totaltime"

                    />
                    <TextField
                      label="Created By"
                      name="createdby"

                    />

                  </form>
                </Box>
              </Modal>
    </>
  )
}

export default Employees