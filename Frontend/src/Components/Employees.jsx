import Sidenavbar from "./Sidenavbar";
import '../App.css';
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
import { useState, useEffect } from "react";
import axios from "axios";

function Employees() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [getallemployees, setAllemployees] = useState([]);
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
    reporting_manager: '',
    password: '',
    salary: ''
  });

  function handleformchange(e) {
    const { name, value } = e.target;
    setemployeeForm((prev) => ({ ...prev, [name]: value }));
  }

  // FETCH ALL EMPLOYEES
  async function getallemployeesdata() {
    try {
      const response = await axios.get("http://localhost:4000/getemployees");
      setAllemployees(response.data.employees);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getallemployeesdata();
  }, []);

  // SUBMIT EMPLOYEE FORM
  async function handlesubmitemployeeform(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileimage", employeeform.image);
    formData.append("employeeid", employeeform.empid);
    formData.append("fullname", employeeform.fullname);
    formData.append("date_of_birth", employeeform.date_of_birth);
    formData.append("gender", employeeform.gender);
    formData.append("phone_number", employeeform.phone_number);
    formData.append("emailid", employeeform.email_id);
    formData.append("department", employeeform.department);
    formData.append("designation", employeeform.designation);
    formData.append("date_of_joining", employeeform.date_of_joining);
    formData.append("reportingmanager", employeeform.reporting_manager);
    formData.append("salary", employeeform.salary);
    formData.append("password", employeeform.password);
    formData.append("role", "employee");

    try {
      const response = await axios.post("http://localhost:4000/addemployee", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        alert("Employee added successfully!");
        setOpen(false);
        getallemployeesdata(); // refresh table
      }
    } catch (error) {
      console.log(error);
      alert("Internal Server Error");
    }
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));   // preview image
    setemployeeForm((prev) => ({ ...prev, image: file }));  // actual file
  };
  async function deleteemployees(id) {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      const response = await axios.delete(`http://localhost:4000/deleteemployee/${id}`);

      if (response.status === 200) {
        getallemployeesdata();  // refresh table
      }
    } catch (error) {
      console.log(error);
      alert("Error deleting employee");
    }
  }


  return (
    <>
      <div className="flex h-screen">
        <Sidenavbar />
        <div className="flex-1 p-8 bg-[#e2e8f0] flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-xl">Employee Management System</h1>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add Employee</Button>
          </div>

          <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">
            <TableContainer component={Paper} className="mt-4">
              <Table>
                <TableHead>
                  <TableRow className="bg-blue-400 text-md font-semibold">
                    <TableCell>Image</TableCell>
                    <TableCell className="whitespace-nowrap">Emp ID</TableCell>
                    <TableCell className="whitespace-nowrap">Full Name</TableCell>
                    <TableCell className="whitespace-nowrap">Date Of Birth</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell className="whitespace-nowrap">Date Of Joining</TableCell>
                    <TableCell className="whitespace-nowrap">Reporting Manager</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {getallemployees.map((emp, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Avatar src={`http://localhost:4000/uploads/${emp.profileimage}`} />
                      </TableCell>
                      <TableCell>{emp.employeeid}</TableCell>
                      <TableCell>{emp.fullname}</TableCell>
                      <TableCell>{emp.date_of_birth}</TableCell>
                      <TableCell>{emp.gender}</TableCell>
                      <TableCell>{emp.department}</TableCell>
                      <TableCell>{emp.designation}</TableCell>
                      <TableCell>{emp.date_of_joining}</TableCell>
                      <TableCell>{emp.reportingmanager}</TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="error" onClick={() => deleteemployees(emp._id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Stack spacing={2} className="absolute bottom-10 right-[500px]">
              <Pagination variant="outlined" shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', width: 600,
          bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 3,
          maxHeight: '90vh', overflowY: 'auto'
        }}>
          <h2 className="text-xl font-bold mb-4 text-center">Add New Employee</h2>

          <form onSubmit={handlesubmitemployeeform} className="space-y-4">
            <div className="flex flex-col items-center space-y-3">
              <Avatar src={image} sx={{ width: 80, height: 80 }} />

              <Button variant="contained" component="label">
                Upload Image
                <input type="file" hidden accept="image/*" name="image" onChange={handleImage} />
              </Button>
            </div>

            <TextField fullWidth name="empid" label="Employee ID" size="small" onChange={handleformchange} />
            <TextField fullWidth name="fullname" label="Full Name" size="small" onChange={handleformchange} />
            <TextField fullWidth type="date" name="date_of_birth" size="small" onChange={handleformchange} />
            <TextField fullWidth name="gender" label="Gender" size="small" onChange={handleformchange} />
            <TextField fullWidth name="phone_number" label="Phone Number" size="small" onChange={handleformchange} />
            <TextField fullWidth name="email_id" label="Email ID" size="small" onChange={handleformchange} />
            <TextField fullWidth name="department" label="Department" size="small" onChange={handleformchange} />
            <TextField fullWidth name="designation" label="Designation" size="small" onChange={handleformchange} />
            <TextField fullWidth type="date" name="date_of_joining" size="small" onChange={handleformchange} />
            <TextField fullWidth name="reporting_manager" label="Reporting Manager" size="small" onChange={handleformchange} />
            <TextField fullWidth name="salary" label="Salary" size="small" onChange={handleformchange} />
            <TextField fullWidth name="password" label="Password" size="small" onChange={handleformchange} />

            <Button type="submit" variant="contained">Save</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Employees;
