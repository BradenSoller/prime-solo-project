import { useState, useEffect, Fragment, } from "react"
import { useDispatch, useSelector, } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Appointments.css'
import ScheduleForm from "../Schedule/Schedule Form"
import Button from '@mui/material/Button';
import { IconButton, MenuItem } from "@mui/material"
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";






export default function AppointmentPage({ appointment }) {


    console.log('appointment', appointment);

    let [appointmentID, setAppointmentID] = useState(0)

    const history = useHistory()
    const dispatch = useDispatch()

    const Appointments = useSelector(store => store.newAppointment.newAppointment)
    const pendingAppointments = useSelector(store => store.newAppointment.pending)
    const acceptedAppointments = useSelector(store => store.newAppointment.approved)
    const editAppointment = useSelector(store => store.editAppointment)
    const WIPAppointments = useSelector(store => store.newAppointment.workIP)
    const completedAppointments = useSelector(store => store.newAppointment.complete)

    console.log("new appoinment", Appointments);

    console.log("Pending appointments:", pendingAppointments);
    console.log("Accepted appointments:", acceptedAppointments);


    useEffect(() => {
        dispatch({ type: 'SAGA/GET_APPOINTMENTS' })

        window.scrollTo(0,0)
    }, [])

    const user = useSelector(store => store.user)
    console.log("user:", user);

    const [open, setOpen] = useState(false);



    const handleStatusChange = (status) => {
        dispatch({
            type: 'CHANGE_STATUS',
            payload: status
        })
    }

    const handleClickOpen = (id) => {
        setAppointmentID(id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const deleteAppointment = () => {
        console.log("appointments", Appointments);
        dispatch({
            type: 'SAGA/DELETE_APPOINTMENTS',
            payload: appointmentID

        })

        handleClose()

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
              {!user.isAdmin && 
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
                                <StyledTableCell>Qeustions/Comments</StyledTableCell>
                                <StyledTableCell>Budget</StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell> Edit / Remove</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {Appointments.map((appointment) => {
                                return (
                                
        
                                    <StyledTableRow key={appointment.id}>
                                        <StyledTableCell>{JSON.stringify(appointment.time_completed.slice(0, -14))}</StyledTableCell>
                                        <StyledTableCell>{appointment.first_name}</StyledTableCell>
                                        <StyledTableCell>{appointment.last_name}</StyledTableCell>
                                        <StyledTableCell>{appointment.email}</StyledTableCell>
                                        <StyledTableCell>{appointment.phone_number}</StyledTableCell>
                                        <StyledTableCell>{appointment.address}</StyledTableCell>
                                        <StyledTableCell>{appointment.zip}</StyledTableCell>
                                        <StyledTableCell>{appointment.name}</StyledTableCell>
                                        <StyledTableCell>{appointment.description}</StyledTableCell>
                                        <StyledTableCell>{appointment.budget}</StyledTableCell>
                                        <StyledTableCell>{appointment.status}</StyledTableCell>


              

                        
                                        <StyledTableCell>{user.isAdmin === false && <IconButton onClick={() => { history.push(`/edit_appointment/${appointment.id}`) }}><EditIcon /></IconButton>}

                                            <IconButton aria-label="delete" onClick={() => handleClickOpen(appointment.id)} >
                                                <DeleteForeverIcon />

                                            </IconButton></StyledTableCell>

                                    </StyledTableRow>

                                
                                )


                            })}




                        </TableBody>
                    </Table>
                </TableContainer>
            }



            <Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure you wanna delete this ?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className="DialogText" id="alert-dialog-description">

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={deleteAppointment} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
            { user.isAdmin && 
                <div className="pendingTable">
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
                                    <StyledTableCell>Qeustions/Comments</StyledTableCell>
                                    <StyledTableCell>Budget</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Remove</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                           

          
                        
                                {user.isAdmin && pendingAppointments.map((appointment) => {
                                    return (


                                        <StyledTableRow key={appointment.id}>
                                            <StyledTableCell>{JSON.stringify(appointment.time_completed.slice(0, -14))}</StyledTableCell>
                                            <StyledTableCell>{appointment.first_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.last_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.email}</StyledTableCell>
                                            <StyledTableCell>{appointment.phone_number}</StyledTableCell>
                                            <StyledTableCell>{appointment.address}</StyledTableCell>
                                            <StyledTableCell>{appointment.zip}</StyledTableCell>
                                            <StyledTableCell>{appointment.name}</StyledTableCell>
                                            <StyledTableCell>{appointment.description}</StyledTableCell>
                                            <StyledTableCell>{appointment.budget}</StyledTableCell>
                                            <StyledTableCell>{appointment.status}</StyledTableCell>
                                            {/* {!user.isAdmin && <StyledTableCell id={appointment.status === 'approved' ? "confirmed" : "pending"}>{appointment.status === 'WIP' ? 'WIP' : 'approved'} {appointment.status === 'complete' ? "complete"  : 'WIP' }</StyledTableCell>} */}
                                            <StyledTableCell><IconButton onClick={() => { history.push(`/edit_appointment/${appointment.id}`) }}><EditIcon /></IconButton>

                                                <IconButton aria-label="delete" onClick={() => handleClickOpen(appointment.id)} >
                                                    <DeleteForeverIcon />

                                                </IconButton></StyledTableCell>

                                        </StyledTableRow>


                                    )


                                })}




                            </TableBody>
                        </Table>
                    </TableContainer>

           
          
                </div>
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {user.isAdmin &&
                <div className="acceptedTable">
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
                                    <StyledTableCell>Qeustions/Comments</StyledTableCell>
                                    <StyledTableCell>Budget</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Remove</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>




                                {user.isAdmin && acceptedAppointments.map((appointment) => {
                                    return (


                                        <StyledTableRow key={appointment.id}>
                                            <StyledTableCell>{JSON.stringify(appointment.time_completed.slice(0, -14))}</StyledTableCell>
                                            <StyledTableCell>{appointment.first_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.last_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.email}</StyledTableCell>
                                            <StyledTableCell>{appointment.phone_number}</StyledTableCell>
                                            <StyledTableCell>{appointment.address}</StyledTableCell>
                                            <StyledTableCell>{appointment.zip}</StyledTableCell>
                                            <StyledTableCell>{appointment.name}</StyledTableCell>
                                            <StyledTableCell>{appointment.description}</StyledTableCell>
                                            <StyledTableCell>{appointment.budget}</StyledTableCell>
                                            <StyledTableCell>{appointment.status}</StyledTableCell>
                                            <StyledTableCell><IconButton onClick={() => { history.push(`/edit_appointment/${appointment.id}`) }}><EditIcon /></IconButton>

                                                <IconButton aria-label="delete" onClick={() => handleClickOpen(appointment.id)} >
                                                    <DeleteForeverIcon />

                                                </IconButton></StyledTableCell>

                                        </StyledTableRow>


                                    )


                                })}




                            </TableBody>
                        </Table>
                    </TableContainer>



                </div>
            }

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {user.isAdmin &&
                <div className="acceptedTable">
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
                                    <StyledTableCell>Qeustions/Comments</StyledTableCell>
                                    <StyledTableCell>Budget</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Remove</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>




                                {user.isAdmin && WIPAppointments.map((appointment) => {
                                    return (


                                        <StyledTableRow key={appointment.id}>
                                            <StyledTableCell>{JSON.stringify(appointment.time_completed.slice(0, -14))}</StyledTableCell>
                                            <StyledTableCell>{appointment.first_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.last_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.email}</StyledTableCell>
                                            <StyledTableCell>{appointment.phone_number}</StyledTableCell>
                                            <StyledTableCell>{appointment.address}</StyledTableCell>
                                            <StyledTableCell>{appointment.zip}</StyledTableCell>
                                            <StyledTableCell>{appointment.name}</StyledTableCell>
                                            <StyledTableCell>{appointment.description}</StyledTableCell>
                                            <StyledTableCell>{appointment.budget}</StyledTableCell>
                                            <StyledTableCell>{appointment.status}</StyledTableCell>
                                            <StyledTableCell><IconButton onClick={() => { history.push(`/edit_appointment/${appointment.id}`) }}><EditIcon /></IconButton>

                                                <IconButton aria-label="delete" onClick={() => handleClickOpen(appointment.id)} >
                                                    <DeleteForeverIcon />

                                                </IconButton></StyledTableCell>

                                        </StyledTableRow>


                                    )


                                })}




                            </TableBody>
                        </Table>
                    </TableContainer>



                </div>
            }

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {user.isAdmin &&
                <div className="acceptedTable">
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
                                    <StyledTableCell>Qeustions/Comments</StyledTableCell>
                                    <StyledTableCell>Budget</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Remove</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>




                                {user.isAdmin && completedAppointments.map((appointment) => {
                                    return (


                                        <StyledTableRow key={appointment.id}>
                                            <StyledTableCell>{JSON.stringify(appointment.time_completed.slice(0, -14))}</StyledTableCell>
                                            <StyledTableCell>{appointment.first_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.last_name}</StyledTableCell>
                                            <StyledTableCell>{appointment.email}</StyledTableCell>
                                            <StyledTableCell>{appointment.phone_number}</StyledTableCell>
                                            <StyledTableCell>{appointment.address}</StyledTableCell>
                                            <StyledTableCell>{appointment.zip}</StyledTableCell>
                                            <StyledTableCell>{appointment.name}</StyledTableCell>
                                            <StyledTableCell>{appointment.description}</StyledTableCell>
                                            <StyledTableCell>{appointment.budget}</StyledTableCell>
                                            <StyledTableCell>{appointment.status}</StyledTableCell>
                                            <StyledTableCell><IconButton onClick={() => { history.push(`/edit_appointment/${appointment.id}`) }}><EditIcon /></IconButton>

                                                <IconButton aria-label="delete" onClick={() => handleClickOpen(appointment.id)} >
                                                    <DeleteForeverIcon />

                                                </IconButton></StyledTableCell>

                                        </StyledTableRow>


                                    )


                                })}




                            </TableBody>
                        </Table>
                    </TableContainer>



                </div>
            }
</div>    

        
    )
    // onClick = {(e) => deleteAppointment(appointment)

}

