import React, { useState, useEffect } from 'react';
import Sidenavbar from './Sidenavbar';
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
import CloseIcon from '@mui/icons-material/Close';

function Taskmanagement() {
  const [rows, setRows] = useState([]);
  const [searched, setSearch] = useState({ searchvalue: '' });
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    tasktitle: "",
    status: "",
    totaltime: "",
    createdby: "",
  });

  // Pagination
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
          const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:4000/gettask", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      setRows(response.data.task);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
    setPage(1);
  };

  // Search filters
  const filteredRows = rows.filter(
    (row) =>
      row.tasktitle.toLowerCase().includes(searched.searchvalue.toLowerCase()) ||
      row.status.toLowerCase().includes(searched.searchvalue.toLowerCase()) ||
      row.name.toLowerCase().includes(searched.searchvalue.toLowerCase()) ||
      row.createdby.toLowerCase().includes(searched.searchvalue.toLowerCase())
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Form change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Add Task Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/addtask", formData);
      fetchTasks();  // Refresh table
      setOpen(false);
      setFormData({
        name: "",
        tasktitle: "",
        status: "",
        totaltime: "",
        createdby: "",
      });
    } catch (error) {
      console.error("Error adding a task", error);
    }
  };
  async function deletetask(id) {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      const response = await axios.delete(`http://localhost:4000/deletetask/${id}`);

      if (response.status === 200) {
        fetchTasks();  // refresh table
      }
    } catch (error) {
      console.log(error);
      alert("Error deleting employee");
    }
  }


  return (
    <div className="flex h-screen">
      <Sidenavbar />

      <div className="flex-1 p-8 bg-[#e2e8f0] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Add New Task
          </Button>
        </div>

        <div className="bg-white w-full flex-1 rounded-3xl p-6 overflow-auto relative">

          <TextField
            type="text"
            label="Search"
            name="searchvalue"
            size="small"
            onChange={handlechange}
            value={searched.searchvalue}
            variant="outlined"
            className="w-[200px] mb-4"
          />

          <TableContainer component={Paper} className="mt-4">
            <Table>
              <TableHead>
                <TableRow className="bg-blue-400 text-md font-semibold">
                  <TableCell><b>Name</b></TableCell>
                  <TableCell className="whitespace-nowrap"><b>Task Title</b></TableCell>
                  <TableCell><b>Status</b></TableCell>
                  <TableCell className="whitespace-nowrap"><b>Total Time</b></TableCell>
                  <TableCell className="whitespace-nowrap"><b>Created By</b></TableCell>
                  <TableCell className="whitespace-nowrap"><b>Created At</b></TableCell>
                  <TableCell><b>Action</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.tasktitle}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.totaltime}</TableCell>
                    <TableCell>{row.createdby}</TableCell>
                    <TableCell>{row.createdAt.substring(0, 10)}</TableCell>
                    <TableCell align="center">
                    <Button  variant="contained" color="error" onClick={() => deletetask(row._id)}>
                      Delete
                    </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack spacing={2} className="absolute bottom-10 right-[500px]">
            <Pagination
              variant="outlined"
              shape="rounded"
              count={Math.ceil(filteredRows.length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
            />
          </Stack>
        </div>

        {/* Add Task Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "51%",
              transform: "translate(-50%, -50%)",
              width: 450,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 3,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Add New Task</h2>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField fullWidth label="Name" name="name" size="small" value={formData.name} onChange={handleFormChange} required />
              <TextField fullWidth label="Task Title" name="tasktitle" size="small" value={formData.tasktitle} onChange={handleFormChange} required />
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                size="small"
                value={formData.status}
                onChange={handleFormChange}
                required
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="InProgress">InProgress</option>
              </TextField>
              <TextField fullWidth label="Total Time" name="totaltime" size="small" value={formData.totaltime} onChange={handleFormChange} required />
              <TextField fullWidth label="Created By" name="createdby" size="small" value={formData.createdby} onChange={handleFormChange} required />

              <Button fullWidth type="submit" variant="contained" color="success">
                Save Task
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Taskmanagement;
