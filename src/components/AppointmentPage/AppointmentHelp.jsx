import AppointmentPage from "./Appointment"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Appointments.css'
import ScheduleForm from "../Schedule/Schedule Form"

export default function AppointmentHelp() {
    const Appointments = useSelector(store => store.newAppointment)
    console.log("appointments", Appointments);
    return (
        <div>
            {Appointments.map((appointment) => { 
                console.log("appointment",appointment);
                <div>
                    <AppointmentPage key={appointment.id} appointment={appointment} />
                    
               <ScheduleForm key={appointment.id} appointment={appointment} />
                    </div>
    })}

        </div>

    )





}






