import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getServices() {
    try {
        const response = yield axios.get("/api/services");
        yield put({ type: "GET_SERVICES", payload: response.data });
        console.log("response.data", response.data);
    } catch (error) {
        console.log("Error with categories request:", error);
    }
}
 function* servicesSaga() {
    yield takeLatest('SAGA/GET_SERVICES', getServices)
}


export default servicesSaga