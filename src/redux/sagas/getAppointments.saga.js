import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getAppointments() {
  try {
      const response = yield axios.get(`/api/appointment/all`);
      console.log("response", response);
      yield put({ type: "GET_APPOINTMENT", payload: response.data });

  } catch (error) {
    console.log("Error with categories request:", error);
  }
}

function* getPendingAppointments() {
  console.log("response.data: ", response.data);
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/appointment/pending",
    });
    yield put({
      type: "SET_PENDING",
      payload: response.data,
   
    });
  } catch (error) {
    console.log("Unable to get removed events from server", error);
  }
}


function* getAcceptedAppointments() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/appointment/accepted",
    });
    yield put({
      type: "SET_ACCEPTED",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get removed events from server", error);
  }
}

function* getAppointmentSaga() {
  yield takeLatest("SAGA/GET_APPOINTMENTS", getAppointments);
  yield takeLatest("SAGA/PENDING_APPOINTMENTS", getPendingAppointments)
  yield takeLatest("SAGA/ACCEPTED_APPOINTMENTS", getAcceptedAppointments)
}

export default getAppointmentSaga;
