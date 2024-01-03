import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function EditAppointmentPage() {
    // Yell 'FETCH_STUDENT_DETAILS' and send a student id
    // as the payload.
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const editAppointment = useSelector(store => store.editAppointment)

    useEffect(() => {
        dispatch({
            type: 'FETCH_APPOINTMENT_DETAILS',
            payload: params.id
        })
    }, [])

    const handleNameChange = (FirstName) => {
        dispatch({
            type: 'CHANGE_FIRST_NAME',
            payload: FirstName
        })
    }

    const applyEdits = (e) => {
        e.preventDefault()

        dispatch({
            type: 'SUBMIT_STUDENT_EDIT',
            payload: editAppointment
        })

        history.push('/appointments')
    }


    return (
        <div>
            <h1>EDIT A STUDENT!</h1>

            <form>
                <input
                    type="text"
                    value={editAppointment.first_name || ''}
                    onChange={(e) => handleNameChange(e.target.value)}
                />
                <button onClick={applyEdits}>Submit</button>
            </form>
        </div>
    )
}
