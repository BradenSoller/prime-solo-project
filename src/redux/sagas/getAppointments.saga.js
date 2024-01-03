import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getAppointments() {
  try {
      const response = yield axios.get(`/api/appointment`);
      console.log("response", response);
    yield put({ type: "GET_APPOINTMENT", payload: response.data});
  } catch (error) {
    console.log("Error with categories request:", error);
  }
}

function* getAppointmentSaga() {
  yield takeLatest("SAGA/GET_APPOINTMENTS", getAppointments);
}

export default getAppointmentSaga;
