import { useState, useEffect, } from "react"
import { useDispatch, useSelector, } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Appointments.css'
import ScheduleForm from "../Schedule/Schedule Form"
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function AppointmentPage({appointment}) {

const history = useHistory()
    const dispatch = useDispatch()

    const Appointments = useSelector(store => store.newAppointment)
    
    useEffect(() => {
     dispatch({ type: 'SAGA/GET_APPOINTMENTS' }) 
     
    }, [])

    const user = useSelector(store => store.user)
    console.log("user:", user);
    

    const deleteAppointment = (appointment) => {
        dispatch({
            type: 'SAGA/DELETE_APPOINTMENTS',
            payload: appointment
            
        })
        
    }

    const handleStatus = (appointment) => {

        dispatch({
            type: 'SAGA/CHANGE_STATUS',
            payload: appointment.id
        })

    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          
        },
    }));

      
    

    
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                        <TableRow>
                        <StyledTableCell>Time Completed</StyledTableCell>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell>Last Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Phone Number</StyledTableCell>
                            <StyledTableCell>Address</StyledTableCell>
                        <StyledTableCell>Zip</StyledTableCell>
                        <StyledTableCell>Service</StyledTableCell>
                        <StyledTableCell>Description</StyledTableCell>
                        <StyledTableCell>Budget</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell> Edit / Remove</StyledTableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                    
                    {Appointments.map((appointment) => {
                        return (
                            <StyledTableRow key={appointment.id}>
                                <StyledTableCell>{JSON.stringify(appointment.time_completed.slice(0,-14))}</StyledTableCell>
                                <StyledTableCell>{appointment.first_name}</StyledTableCell>
                            <StyledTableCell>{appointment.last_name}</StyledTableCell>
                                <StyledTableCell>{appointment.email}</StyledTableCell>
                                <StyledTableCell>{appointment.phone_number}</StyledTableCell>
                                <StyledTableCell>{appointment.address}</StyledTableCell>
                                <StyledTableCell>{appointment.zip}</StyledTableCell>
                                <StyledTableCell>{appointment.name }</StyledTableCell>
                                <StyledTableCell>{appointment.description}</StyledTableCell>
                                <StyledTableCell>{appointment.budget}</StyledTableCell>
                                {!user.isAdmin && <StyledTableCell>{appointment.status ? 'confirmed' : 'pending'}</StyledTableCell>}

                                <StyledTableCell>{user.isAdmin === false && <IconButton onClick={() => { history.push(`/edit_appointment/${appointment.id}`) }}><EditIcon/></IconButton>}
                                    <IconButton aria-label="delete" onClick={(e) => deleteAppointment(appointment)}>
                                      <DeleteForeverIcon/>
                                    </IconButton></StyledTableCell>
                                {user.isAdmin && <StyledTableCell><button onClick={(e) => handleStatus(appointment)}>{appointment.status ? 'confirmed' : 'pending'}  </button></StyledTableCell>}
                            </StyledTableRow>
                            
                        )
                    })} 
                  

                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )


}