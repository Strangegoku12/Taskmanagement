import React, { useState } from 'react';
import Sidenavbar from './Sidenavbar';
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
  const [rows, setRows] = useState([
    { id: 1, name: 'John', title: 'Fix Login Bug', status: 'Pending', totaltime: '2h', createdby: 'Admin', createdat: '2025-11-10' },
    { id: 2, name: 'Sara', title: 'Add Profile Page', status: 'In Progress', totaltime: '4h', createdby: 'Manager', createdat: '2025-11-08' },
    { id: 3, name: 'Mike', title: 'Deploy Backend', status: 'Completed', totaltime: '3h', createdby: 'Admin', createdat: '2025-11-05' },
    { id: 4, name: 'Emma', title: 'Design Landing Page', status: 'Pending', totaltime: '5h', createdby: 'Designer', createdat: '2025-11-06' },
    { id: 5, name: 'Alex', title: 'Fix Navbar Issue', status: 'Completed', totaltime: '2h', createdby: 'Admin', createdat: '2025-11-03' },
    { id: 6, name: 'Liam', title: 'Integrate API', status: 'In Progress', totaltime: '6h', createdby: 'Developer', createdat: '2025-11-04' },
  ]);

  const [searched, setSearch] = useState({ searchvalue: '' });
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    title: '',
    status: '',
    totaltime: '',
    createdby: '',
  });

  // Pagination
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
    setPage(1);
  };

  // Search filters
  const filteredRows = rows.filter(
    (row) =>
      row.title.toLowerCase().includes(searched.searchvalue.toLowerCase()) ||
      row.status.toLowerCase().includes(searched.searchvalue.toLowerCase()) ||
      row.name.toLowerCase().includes(searched.searchvalue.toLowerCase()) ||
      row.createdby.toLowerCase().includes(searched.searchvalue.toLowerCase()) ||
      row.id.toString().includes(searched.searchvalue)
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...formData,
      id: rows.length + 1,
      createdat: new Date().toISOString().split('T')[0],
    };
    setRows((prev) => [...prev, newTask]);
    setOpen(false);
    setFormData({
      id: '',
      name: '',
      title: '',
      status: '',
      totaltime: '',
      createdby: '',
    });
  };

  return (
    <div className="flex h-screen">
      <Sidenavbar />

      <div className="flex-1 p-8 bg-gray-200 flex flex-col">
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
                <TableRow className="text-secondary bg-blue-400 px-6 py-4 text-md font-semibold shadow dark:bg-black dark:bg-opacity-5 md:px-8">
                  <TableCell><b>ID</b></TableCell>
                  <TableCell><b>Name</b></TableCell>
                  <TableCell><b>Task Title</b></TableCell>
                  <TableCell><b>Status</b></TableCell>
                  <TableCell><b>Total Time</b></TableCell>
                  <TableCell><b>Created By</b></TableCell>
                  <TableCell><b>Created At</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.totaltime}</TableCell>
                    <TableCell>{row.createdby}</TableCell>
                    <TableCell>{row.createdat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination at bottom */}
          <Stack
            spacing={2}
            className="absolute bottom-10 right-[500px]"
          >
            <Pagination
            variant="outlined" shape="rounded"
              count={Math.ceil(filteredRows.length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
            />
          </Stack>
        </div>

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
              <TextField fullWidth label="Task Title" name="title" size="small" value={formData.title} onChange={handleFormChange} required />
              <TextField fullWidth label="Status" name="status" size="small" value={formData.status} onChange={handleFormChange} required />
              <TextField fullWidth label="Total Time" name="totaltime" size="small" value={formData.totaltime} onChange={handleFormChange} />
              <TextField fullWidth label="Created By" name="createdby" size="small" value={formData.createdby} onChange={handleFormChange} />

              <Button fullWidth type="submit" variant="contained" color="success">Save Task</Button>
            </form>
          </Box>
        </Modal>

      </div>
    </div>
  );
}

export default Taskmanagement;
