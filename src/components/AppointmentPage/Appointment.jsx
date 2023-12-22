import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Appointments.css'

export default function AppointmentPage() {


    const dispatch = useDispatch()

    const Appointments = useSelector(store => store.newAppointment)

    const user = useSelector(store => store.user)
    console.log("user:", user);

    useEffect(() => {
        getAppointment()

    }, []);

    const getAppointment = () => {
        dispatch({
            type: 'SAGA/GET_APPOINTMENTS',
            payload: user.id


        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Time Completed</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>

                    </tr>
                </thead>
                <tbody>
                    {Appointments.map((appointment) => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.time_completed}</td>
                                <td>{appointment.first_name}</td>
                                <td>{appointment.last_name}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.phone_number}</td>
                           
                               
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )


}