import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import postAppointmentSaga from './ScheduleForm.saga';
import servicesSaga from './services.saga';
import getAppointmentSaga from './getAppointments.saga';
import deleteAppointmentSaga from './deleteAppointments.saga';
import editAppointmemtSaga from './editAppointment.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    postAppointmentSaga(),
    servicesSaga(),
    getAppointmentSaga(),
    deleteAppointmentSaga(),
    editAppointmemtSaga()

    

  ]);
}
