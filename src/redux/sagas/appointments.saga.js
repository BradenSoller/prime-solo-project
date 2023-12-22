import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAppointments(action) {
    try {
        const response = yield axios.get(`/api/appointment/${action.payload}`);
        yield put({ type: "GET_APPOINTMENT", payload: response.data });
        console.log("response.data", response.data);
    } catch (error) {
        console.log("Error with categories request:", error);
    }
   
}
  
function* getAppointmentSaga() {
    yield takeLatest('SAGA/GET_APPOINTMENTS', getAppointments)
}


export default getAppointmentSaga;