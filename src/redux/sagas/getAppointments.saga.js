import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getAppointments() {
  try {
      const response = yield axios.get(`/api/appointment/all`);
    yield put({ type: "GET_APPOINTMENT", payload: response.data });
    yield put({
      type: "SAGA/PENDING_APPOINTMENTS",
    });
    yield put({
      type: "SAGA/ACCEPTED_APPOINTMENTS",
    });

  } catch (error) {
    console.log("Error with categories request:", error);
  }
}

function* getPendingAppointments() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/appointment/pending"
    });

const pendingAppoinment = response.data

    yield put({
      type: "SET_PENDING",
      payload: pendingAppoinment,
   
    });
  } catch (error) {
    console.log("Unable to get removed events from server", error);
  }
}


function* getAcceptedAppointments() {
  console.log("booo");
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

function* getWIPAppointments() {
  console.log("booo");
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/appointment/WIP",
    });
    yield put({
      type: "SET_WIP",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get removed events from server", error);
  }
}

function* getCompleteAppointments() {
  console.log("booo");
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/appointment/complete",
    });
    yield put({
      type: "SET_COMPLETE",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get removed events from server", error);
  }
}

function* getAppointmentSaga() {
  yield takeLatest("SAGA/GET_APPOINTMENTS", getAppointments);
  yield takeLatest("SAGA/PENDING_APPOINTMENTS", getPendingAppointments);
  yield takeLatest("SAGA/ACCEPTED_APPOINTMENTS", getAcceptedAppointments);
  yield takeLatest("SAGA/WIP_APPOINTMENTS", getWIPAppointments);
  yield takeLatest("SAGA/COMPLETE_APPOINTMENTS", getCompleteAppointments);


}

export default getAppointmentSaga;
