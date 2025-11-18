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
 <div>
  <div className="flex justify-between">
      <h1>Employee Managemenet System</h1>
            <Button variant="contained" color="primary">Add Employee</Button>
      </div>
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
    </>
)
}

export default Employees