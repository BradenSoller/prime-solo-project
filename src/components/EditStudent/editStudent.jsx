import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
                <input
                    type="text"
                    value={editAppointment.first_name || ''}
                    onChange={(e) => handleFirstNameChange(e.target.value)}
                />
                <input
                    type="text"
                    value={editAppointment.last_name || ''}
                    onChange={(e) => handleLastNameChange(e.target.value)}
                />
                <input
                    type="text"
                    value={editAppointment.email || ''}
                    onChange={(e) => handleEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={editAppointment.phone_number || ''}
                    onChange={(e) => handlePhoneNumber(e.target.value)}
                />
                <input
                    type="text"
                    value={editAppointment.address || ''}
                    onChange={(e) => handleAddress(e.target.value)}
                />
                <input
                    type="text"
                    value={editAppointment.zip || ''}
                    onChange={(e) => handleZip(e.target.value)}
                />
                <select value={editAppointment.service_id || ''} onChange={(e) => handleService(e.target.value)}>
                    <option value={0}>select</option>
                    <option value={1}>Rock Removal</option>
                    <option value={2}>Deck Staining</option>
                    <option value={3}>Weeding</option>
                    <option value={4}>Tree Triming </option>
                    <option value={5}>Bursh/Junk Removal</option>
                    <option value={6}>Deck Staining</option>
                </select>
                <input
                    type="text"
                    value={editAppointment.description || ''}
                    onChange={(e) => handleDescription(e.target.value)}
                />
                <input
                    type="text"
                    value={editAppointment.budget || ''}
                    onChange={(e) => handleBudget(e.target.value)}
                />
            
                <button onClick={applyEdits}>Submit</button>
            </form>
        </div>
    )
}
