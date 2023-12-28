import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import getAppointmentSaga from './getAppointments.saga';

    function* postAppointment(action) {
        try {
            const response = yield axios({
                method: 'POST',
                url: '/api/appointment',
                data: action.payload
            })
            yield getAppointmentSaga()
        }
        catch (error) {
            console.error('Shelf POST failed:', error)
        }
    }


function* postAppointmentSaga() {
    yield takeLatest('SAGA/POST_APPOINTMENT', postAppointment)
}


export default postAppointmentSaga