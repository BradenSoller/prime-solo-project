import AppointmentPage from "./Appointment"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Appointments.css'
import ScheduleForm from "../Schedule/Schedule Form"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function AppointmentHelp({appointment}) {
    const Appointments = useSelector(store => store.newAppointment)


    console.log('Appointments', Appointments);
   
    return (
        
        <div>
            {Appointments.map((appointment) => { 
                console.log("appointment", appointment);
                return (
                    <div>
                        <AppointmentPage key={appointment.id} appointment={appointment} />
                    
                    </div>
                )
            })}

        </div>

    )





}






