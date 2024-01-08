import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* deleteAppointment(action) {
   
  try {
      const response = yield axios({
      method: "DELETE",
      url: `/api/appointment/${action.payload}`,
    });
    yield put({
      type: "SAGA/GET_APPOINTMENTS",
      
     
    });
  } catch (error) {
    console.error("Shelf DELETE failed:", error);
  }
}

function* deleteAppointmentSaga() {
  yield takeLatest("SAGA/DELETE_APPOINTMENTS", deleteAppointment);
}

export default deleteAppointmentSaga;
