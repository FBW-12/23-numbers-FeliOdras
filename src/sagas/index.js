import { takeLatest, call, put } from "redux-saga/effects";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function* fetchNumber() {
  return axios({
    method: "get",
    url: "https://numbers-api-proxy.dci-fbw121.now.sh/?number=23"
  });
}
