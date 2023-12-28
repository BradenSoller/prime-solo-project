import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import getAppointmentSaga from "./getAppointments.saga";

function* deleteAppointment(action) {
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/appointment/${action.payload.id}`,
    });
    yield put({
      type: "SAGA/GET_APPOINTMENTS",
      payload: action.payload.id,
    });
  } catch (error) {
    console.error("Shelf DELETE failed:", error);
  }
}

function* deleteAppointmentSaga() {
  yield takeLatest("SAGA/DELETE_APPOINTMENTS", deleteAppointment);
}

export default deleteAppointmentSaga;
