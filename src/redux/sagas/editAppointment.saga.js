import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchAppointmentDetails(action) {
    try {
      const AppointmentId = action.payload
      const response = yield axios({
        method: 'GET',
        url: `/edit_appointments/${AppointmentId}`
      })
  
      const appointmentToEdit = response.data
      yield put({
        type: 'SET_APPOINTMENT_TO_EDIT',
        payload: appointmentToEdit
      })
    } catch (err) {
      console.log('shoot. fetchAppointmentDetails did not work. :(', err)
    }
}
function* editAppointmemtSaga() {
    yield takeLatest("FETCH_APPOINTMENT_DETAILS", fetchAppointmentDetails);
  }
  
export default editAppointmemtSaga;