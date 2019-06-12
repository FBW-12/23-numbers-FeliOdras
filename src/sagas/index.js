import { takeLatest, call, put } from "redux-saga/effects";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";
import axios from "axios";
