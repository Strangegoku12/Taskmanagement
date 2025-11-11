import React from 'react';
import Sidenavbar from './Sidenavbar';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Taskmanagement() {
    // sample data
  const rows = [
    { id: 1, title: 'Fix Login Bug', status: 'Pending', due: '2025-11-15' },
    { id: 2, title: 'Add Profile Page', status: 'In Progress', due: '2025-11-20' },
    { id: 3, title: 'Deploy Backend', status: 'Completed', due: '2025-11-05' },
  ];
  return (
    <>
      <div className='flex h-screen'>
        <Sidenavbar />
     <div className="flex-1 p-8 bg-gray-200">
      <div className='flex justify-between items-center mb-6'>
        <div>
        <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
        </div>
        <Button variant="contained" color="primary">
          Add New Task
        </Button>
        </div>
          <div className='bg-white w-full h-[700px] rounded-3xl p-6'>
            <TextField type='text' label="Search" variant='outlined' className='w-[200px]' />
     <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>ID</b></TableCell>
                    <TableCell><b>Task Title</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                    <TableCell><b>Due Date</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.due}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      </div>
      </div>
    </>
  );
}

export default Taskmanagement