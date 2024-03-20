import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchAppointmentDetails(action) {
    try {
        const AppointmentId = action.payload
        console.log("AppointmentId", AppointmentId);
      const response = yield axios({
        method: 'GET',
        url: `/api/appointment/${AppointmentId}`
      })
  
        const appointmentToEdit = response.data
        console.log('appointmentToEdit', appointmentToEdit);
      yield put({
        type: 'SET_APPOINTMENT_TO_EDIT',
        payload: appointmentToEdit
      })
    } catch (err) {
      console.log('shoot. fetchAppointmentDetails did not work. :(', err)
    }
}
function* submitAppointmentEdit(action) {
   
    try {
      console.log(action.payload)
      const editedAppointment = action.payload
  
      const response = yield axios({
        method: 'PUT',
        url: `/api/appointment/edit/${editedAppointment.id}`,
        data: {
            first_name: editedAppointment.first_name,
            last_name: editedAppointment.last_name,
            email: editedAppointment.email,
            phone_number: editedAppointment.phone_number,
            address: editedAppointment.address,
            zip: editedAppointment.zip,
            name: editedAppointment.name,
            description: editedAppointment.description,
            budget: editedAppointment.budget,
            status: editedAppointment.status,
            service_id: editedAppointment.service_id,
            
         
        }
      })
        
   
  
      yield put({
        type: 'SAGA/GET_APPOINTMENTS'
      })
    } catch (err) {
      console.log('submitAppointmentEdit failed.', err)
    }
  
}


function* StatusChange(action) {
   
    try {
      console.log(action.payload)
        const editedAppointment = action.payload
        console.log('action.payload:',editedAppointment);
  
      const response = yield axios({
        method: 'PUT',
        url: `/api/appointment/status/${editedAppointment}`,
      })
        
   
  
      yield put({
        type: 'SAGA/GET_APPOINTMENTS'
      })
    } catch (err) {
      console.log('submitAppointmentEdit failed.', err)
    }
  
}
  

function* editAppointmemtSaga() {
    yield takeLatest("SAGA/CHANGE_STATUS", StatusChange );
    yield takeLatest("SUBMIT_APPOINTMENT_DETAILS",submitAppointmentEdit );
    yield takeLatest("FETCH_APPOINTMENT_DETAILS", fetchAppointmentDetails);
  }
  
export default editAppointmemtSaga;