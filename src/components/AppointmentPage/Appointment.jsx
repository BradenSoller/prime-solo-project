import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function AppointmentPage() {
    
    const dispatch = useDispatch()

    const Appointment = useSelector(store => store.newAppointment)

    return
}