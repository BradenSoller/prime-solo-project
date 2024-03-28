import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import AppointmentPage from '../AppointmentPage/Appointment';
import "./editStudent.css"
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { IconButton, MenuItem } from "@mui/material"



export default function EditAppointmentPage() {
    // Yell 'FETCH_STUDENT_DETAILS' and send a student id
    // as the payload.
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const editAppointment = useSelector(store => store.editAppointment)


    
console.log("editAppointment", editAppointment);
    useEffect(() => {
        dispatch({
            type: 'FETCH_APPOINTMENT_DETAILS',
            payload: params.id
        })
    }, [])

    const handleFirstNameChange = (first_name) => {
        dispatch({
            type: 'CHANGE_FIRST_NAME',
            payload: first_name
        })
    }
    const handleLastNameChange = (last_name) => {
        dispatch({
            type: 'CHANGE_LAST_NAME',
            payload: last_name
        })
    }
    const handleEmail = (email) => {
        dispatch({
            type: 'CHANGE_EMAIL',
            payload: email
        })
    }
    const handlePhoneNumber = (phone_number) => {
        dispatch({
            type: 'CHANGE_PHONE_NUMBER',
            payload: phone_number
        })
    }
    const handleAddress = (Address) => {
        dispatch({
            type: 'CHANGE_ADDRESS',
            payload: Address
        })
    }
    const handleZip = (zip) => {
        dispatch({
            type: 'CHANGE_ZIP',
            payload: zip
        })
    }
    const handleService = (service_id) => {
        dispatch({
            type: 'CHANGE_SERVICE',
            payload: service_id
        })
    }
    const handleDescription = (description) => {
        dispatch({
            type: 'CHANGE_DESCRIPTION',
            payload: description
        })
    }
    const handleBudget = (budget) => {
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: budget
        })
    }

    const handleStatusChange = (status) => {
        dispatch({
            type: 'CHANGE_STATUS',
            payload: status
        })
    }
   

    const applyEdits = (e) => {
        e.preventDefault()

        dispatch({
            type: 'SUBMIT_APPOINTMENT_DETAILS',
            payload: editAppointment
            
        })

        history.push('/appointments')
    }


    return (
        <div>
          

            <form>
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="First Name"
                    type="text"
                    value={editAppointment.first_name || ''}
                    onChange={(e) => handleFirstNameChange(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Last Name"
                    type="text"
                    value={editAppointment.last_name || ''}
                    onChange={(e) => handleLastNameChange(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Email"
                    type="text"
                    value={editAppointment.email || ''}
                    onChange={(e) => handleEmail(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Phone Number"
                    type="text"
                    value={editAppointment.phone_number || ''}
                    onChange={(e) => handlePhoneNumber(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Address"
                    type="text"
                    value={editAppointment.address || ''}
                    onChange={(e) => handleAddress(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Zip"
                    type="text"
                    value={editAppointment.zip || ''}
                    onChange={(e) => handleZip(e.target.value)}
                />
                <br />
                <br />
                <select className = "servicesForm" value={editAppointment.service_id || ''} onChange={(e) => handleService(e.target.value)}>
                    <option value={0}>select</option>
                    <option value={1}>Rock Removal</option>
                    <option value={2}>Deck Staining</option>
                    <option value={3}>Weeding</option>
                    <option value={4}>Tree Triming </option>
                    <option value={5}>Bursh/Junk Removal</option>
                    <option value={6}>Deck Staining</option>
                </select>
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Description"
                    type="text"
                    value={editAppointment.description || ''}
                    onChange={(e) => handleDescription(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Budget"
                    type="text"
                    value={editAppointment.budget || ''}
                    onChange={(e) => handleBudget(e.target.value)}
                />
                <br />
                <br />
                <InputLabel id="event-approval-label"></InputLabel>
                <Select
                    label="Status"
                    id="event-approval"
                    onChange={(e) => handleStatusChange(e.target.value)}
                    value={editAppointment.status || ""}
                    sx={{ width: 155 }}
                >
                    <MenuItem value={"approved"}>Approve</MenuItem>
                    <MenuItem value={"WIP"}>WIP</MenuItem>
                    <MenuItem value={"pending"}>Pending</MenuItem>
                    <MenuItem value={"complete"}>Completed</MenuItem>

                </Select>
                
            
                <Button variant='contained' color='warning' type='onSubmit' onClick={applyEdits}>Submit</Button>
            </form>
           
        </div>
    )
}
