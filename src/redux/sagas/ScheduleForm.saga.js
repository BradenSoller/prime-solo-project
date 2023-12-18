import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

    function* postAppointment(action) {
        try {
            const response = yield axios({
                method: 'POST',
                url: '/api/appointment',
                data: action.payload
            })
            // yield fetchAppointment()
        }
        catch (error) {
            console.error('Shelf POST failed:', error)
        }
    }


function* AppointmentSaga() {
    yield takeLatest('SAGA/POST_APPOINTMENT', postAppointment)
}


export default AppointmentSaga