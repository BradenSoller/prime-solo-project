import { useState, useEffect, } from "react"
import { useDispatch, useSelector, } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Appointments.css'
import ScheduleForm from "../Schedule/Schedule Form"

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

    const handleStatus = () => {

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
                        <th>Address</th>
                        <th>Zip</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Budget</th>
                        <th>Edit / Remove</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    
                    {Appointments.map((appointment) => {
                        return (
                            <tr key={appointment.id}>
                                <td>{JSON.stringify(appointment.time_completed.slice(0,-14))}</td>
                                <td>{appointment.first_name}</td>
                            <td>{appointment.last_name}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.phone_number}</td>
                                <td>{appointment.address}</td>
                                <td>{appointment.zip}</td>
                                <td>{appointment.name }</td>
                                <td>{appointment.description}</td>
                                <td>{appointment.budget}</td>
                                {!user.isAdmin && <td>{appointment.status ? 'confirmed' : 'confirmed '}</td>  }
                                {user.isAdmin && <button>{appointment.status  ? 'confirmded' : 'waiting'}</button>}

                                <td>{user.isAdmin === false && <button onClick={() => { history.push(`/edit_appointment/${appointment.id}`) }}>edit</button>}
                                    <button onClick={(e) => deleteAppointment(appointment)}>remove</button></td>
                            </tr>
                            
                        )
                    })} 
                  

                </tbody>
            </table>

        </div>
    )


}