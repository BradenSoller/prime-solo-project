import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Appointments.css'
import ScheduleForm from "../Schedule/Schedule Form"

export default function AppointmentPage({ appointment }) {


    const dispatch = useDispatch()

    const Appointments = useSelector(store => store.newAppointment)
console.log('appointments',Appointments);
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
    const deleteAppointment = (appointment) => {
        dispatch({
            type: 'SAGA/DELETE_APPOINTMENTS',
            payload: appointment
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
                        <th>Edit/Remove</th>

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
                                <td><button>edit</button><button onClick={() => deleteAppointment(appointment)}>remove</button></td>
                            </tr>
                            
                        )
                        
                    })}
                </tbody>
            </table>

        </div>
    )


}