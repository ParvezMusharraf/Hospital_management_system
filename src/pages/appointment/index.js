// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { Grid, TablePagination } from '@mui/material'

const demoAppointments = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    contactNo: "+12345678901",
    departmentId: "Cardiology",
    appointmentDate: "2025-02-15",
    status: "applied",
    notes: "Patient has mild fever and cough.",
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    email: "janesmith@example.com",
    contactNo: "+19876543210",
    departmentId: "Neurology",
    appointmentDate: "2025-02-18",
    status: "applied",
    notes: "Routine health checkup.",
  },
  {
    firstname: "Michael",
    lastname: "Brown",
    email: "michaelbrown@example.com",
    contactNo: "+11223344556",
    departmentId: "Orthopedics",
    appointmentDate: "2025-03-05",
    status: "applied",
    notes: "Follow-up appointment after surgery.",
  },
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const AppointmentPage = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
          Appointments
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoAppointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.firstname} {row.lastname}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.contactNo}</TableCell>
                    <TableCell>{row.departmentId}</TableCell>
                    <TableCell>{row.appointmentDate}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={statusObj[row.status]?.color || 'default'}
                        sx={{
                          height: 24,
                          fontSize: '0.75rem',
                          textTransform: 'capitalize',
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={demoAppointments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default AppointmentPage
