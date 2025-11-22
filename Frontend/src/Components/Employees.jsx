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
  Avatar,
  Modal,
  Box,
  Pagination,
  Stack
} from '@mui/material';
import { useState } from "react";


function Employees() {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null);
  const [employeeform, setemployeeForm] = useState({
    image: '',
    empid: '',
    fullname: '',
    date_of_birth: '',
    gender: '',
    phone_number: '',
    email_id: '',
    department: '',
    designation: '',
    date_of_joining: '',
    reporting_manager: ''
  })

  function handleformchange(e) {
    const { name, value } = e.target
    setemployeeForm((prev) => ({ ...prev, [name]: value }))

  }

  function handlesubmitemployeeform(e) {
    e.preventDefault();

    console.log("show the employeeform", employeeform)
  }

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <div className="flex h-screen">
        <Sidenavbar />

        <div className="flex-1 p-8 bg-[#e2e8f0] flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-xl">Employee Managemenet System</h1>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add Employee</Button>
          </div>
          <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
            <div>

              <TableContainer component={Paper} className="mt-4">
                <Table>
                  <TableHead>
                    <TableRow className="text-secondary  bg-blue-400 px-6 py-4 text-md font-semibold shadow dark:bg-black dark:bg-opacity-5 md:px-8">
                      <TableCell><b>Emp ID</b></TableCell>
                      <TableCell><b>Full Name</b></TableCell>
                      <TableCell><b>Date Of Birth</b></TableCell>
                      <TableCell><b>Gender</b></TableCell>
                      <TableCell><b>Department</b></TableCell>
                      <TableCell><b>Designation</b></TableCell>
                      <TableCell><b>Date Of Joining</b></TableCell>
                      <TableCell><b>Reporting Manager</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>EMP001</TableCell>
                      <TableCell>Anany Tewari</TableCell>
                      <TableCell>12-02-2000</TableCell>
                      <TableCell>Male</TableCell>
                      <TableCell>Engineering</TableCell>
                      <TableCell>Software Developer</TableCell>
                      <TableCell>20-01-2024</TableCell>
                      <TableCell>Rohan Verma</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>EMP002</TableCell>
                      <TableCell>Yash Gupta</TableCell>
                      <TableCell>18-07-1999</TableCell>
                      <TableCell>Male</TableCell>
                      <TableCell>Engineering</TableCell>
                      <TableCell>Backend Developer</TableCell>
                      <TableCell>14-03-2023</TableCell>
                      <TableCell>Rohan Verma</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>EMP003</TableCell>
                      <TableCell>Tushar Singh</TableCell>
                      <TableCell>05-11-1998</TableCell>
                      <TableCell>Male</TableCell>
                      <TableCell>Design</TableCell>
                      <TableCell>UI/UX Designer</TableCell>
                      <TableCell>10-09-2022</TableCell>
                      <TableCell>Anjali Sharma</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>EMP004</TableCell>
                      <TableCell>Krishna Patel</TableCell>
                      <TableCell>22-03-1997</TableCell>
                      <TableCell>Male</TableCell>
                      <TableCell>Engineering</TableCell>
                      <TableCell>DevOps Engineer</TableCell>
                      <TableCell>05-01-2021</TableCell>
                      <TableCell>Rohan Verma</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>EMP005</TableCell>
                      <TableCell>Anjali Sharma</TableCell>
                      <TableCell>14-09-1995</TableCell>
                      <TableCell>Female</TableCell>
                      <TableCell>HR</TableCell>
                      <TableCell>HR Manager</TableCell>
                      <TableCell>12-06-2019</TableCell>
                      <TableCell>Deepak Ahuja</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>EMP006</TableCell>
                      <TableCell>Riya Mehta</TableCell>
                      <TableCell>03-08-1996</TableCell>
                      <TableCell>Female</TableCell>
                      <TableCell>Finance</TableCell>
                      <TableCell>Accountant</TableCell>
                      <TableCell>01-04-2020</TableCell>
                      <TableCell>Neha Kapoor</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
                <Stack
                        spacing={2}
                        className="absolute bottom-10 right-[500px]"
                      >
                        <Pagination
                        variant="outlined" shape="rounded"
                     
                        />
                      </Stack>


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
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4 text-center">Add New Employee</h2>

          </div>

          {/* <div className="h-[500px] overflow-auto p-4 bg-white rounded-xl shadow-md"> */}

          <form onSubmit={handlesubmitemployeeform} className="space-y-4">
            <div className="flex  flex-col items-center space-y-3">
              <Avatar src={image} sx={{ width: 80, height: 80 }} />

              <Button variant="contained" component="label">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  name="image"
                  value={employeeform.image}
                  onChange={handleImage}
                />
              </Button>
            </div>
            <div>
              <label className="font-medium">Employee ID:</label>
              <TextField fullWidth name="empid" value={employeeform.empid} size="small" onChange={handleformchange} placeholder="Enter Employee ID" />
            </div>

            <div>
              <label className="font-medium">Full Name:</label>
              <TextField fullWidth name="fullname" value={employeeform.fullname} size="small" onChange={handleformchange} placeholder="Enter Full Name" />
            </div>

            <div>
              <label className="font-medium">Date of Birth:</label>
              <TextField fullWidth value={employeeform.date_of_birth} name="date_of_birth" size="small" onChange={handleformchange} placeholder="DD/MM/YYYY" />
            </div>

            <div>
              <label className="font-medium">Gender:</label>
              <TextField fullWidth name="gender" value={employeeform.gender} size="small" onChange={handleformchange} placeholder="Gender" />
            </div>

            <div>
              <label className="font-medium">Phone Number:</label>
              <TextField fullWidth size="small" onChange={handleformchange} value={employeeform.phone_number} name="phone_number" placeholder="Phone Number" />
            </div>

            <div>
              <label className="font-medium">Email ID:</label>
              <TextField fullWidth size="small" onChange={handleformchange} name="email_id" value={employeeform.email_id} placeholder="Email ID" />
            </div>

            <div>
              <label className="font-medium">Department:</label>
              <TextField fullWidth size="small" onChange={handleformchange} value={employeeform.department} name="department" placeholder="Department" />
            </div>

            <div>
              <label className="font-medium">Designation:</label>
              <TextField fullWidth size="small" onChange={handleformchange} value={employeeform.designation} name="designation" placeholder="Designation" />
            </div>

            <div>
              <label className="font-medium">Date of Joining:</label>
              <TextField fullWidth size="small" onChange={handleformchange} value={employeeform.date_of_joining} name="date_of_joining" placeholder="DD/MM/YYYY" />
            </div>

            <div>
              <label className="font-medium">Reporting Manager:</label>
              <TextField fullWidth size="small" onChange={handleformchange} name="reporting_manager" value={employeeform.reporting_manager} placeholder="Manager Name" />
            </div>



            <Button type="submit" variant="contained" size="medium" color="primary">Save</Button>

          </form>
          {/* </div> */}

        </Box>
      </Modal>
    </>
  )
}

export default Employees