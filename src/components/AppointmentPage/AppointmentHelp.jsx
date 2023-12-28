import AppointmentPage from "./Appointment"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Appointments.css'
import ScheduleForm from "../Schedule/Schedule Form"

export default function appointmentHelp() {
    const Appointments = useSelector(store => store.newAppointment)
    return (
        <div>
            {
                Appointments.map((appointment) => (
                    <AppointmentPage key={appointment.id} appointment={appointment} />
                ))


            }
        </div>
    )
}