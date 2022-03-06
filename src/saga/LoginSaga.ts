import { push } from "connected-react-router";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  NetworkCalledFailedAction,
  SuccessnNotification,
} from "../actions/common";
import { Auth, setToken } from "../apis/apis";
import { LOCAL_STORAGE_TOKEN_KEY } from "../constants";
import {
  APP_LOADED,
  LOGIN,
  REGISTRATION_COMPLETED,
  REGISTRATION_FAILED,
  REGISTRATION_STARTED,
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  REQUEST_REGISTRATION,
  REQUEST_USER,
  SET_LOGGED_IN_STATE,
  AUTH_TOKEN_EXPIRED,
} from "../constants/actionTypes";

function* Login(action: any): Generator<any> {
  try {
    const resp: any = yield call(
      Auth.login,
      action.payload.email,
      action.payload.password
    );
    yield put({ type: SET_LOGGED_IN_STATE, payload: resp.data });
  } catch (e: any) {
    yield put(NetworkCalledFailedAction(e.response.data));
  }
}

function* LoggedIn(action: any): Generator<any> {
  window.localStorage.setItem(
    LOCAL_STORAGE_TOKEN_KEY,
    action.payload.user.token
  );
  setToken(action.payload.user.token);
  yield put({ type: LOGIN, payload: action.payload });
  yield put(SuccessnNotification("Logged in!"));
  yield put({ type: REQUEST_USER });
  yield put(push("/"));
}

function* GetUser(action: any): Generator<any> {
  try {
    const resp: any = yield call(Auth.current);
    yield put({ type: APP_LOADED, payload: resp.data });
  } catch (e: any) {
    if (e.response.status == 401) {
      if (window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) {
        window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
        setToken(null);
        yield put({ type: AUTH_TOKEN_EXPIRED });
      }
    } else yield put(NetworkCalledFailedAction(e.response.data));
  }
}

function* RefreshLogin(action: any): Generator<any> {
  yield put(NetworkCalledFailedAction("Login expired, please login again!"));
}

function* Logout(action: any): Generator<any> {
  setToken(null);
  window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  yield put(SuccessnNotification("Logged out!"));
  yield put(push("/"));
}

function* Register(action: any): Generator<any> {
  try {
    yield put({ type: REGISTRATION_STARTED });
    const resp: any = yield call(Auth.register, action.payload);
    yield put({ type: REGISTRATION_COMPLETED });
    yield put(SuccessnNotification("Succesfully registered"));
    yield put({ type: SET_LOGGED_IN_STATE, payload: resp.data });
  } catch (e: any) {
    yield put(NetworkCalledFailedAction(e.response.data));
    yield put({ type: REGISTRATION_FAILED });
  }
}

export function* LoginSaga() {
  yield takeLatest(REQUEST_LOGIN, Login);
  yield takeLatest(REQUEST_USER, GetUser);
  yield takeLatest(REQUEST_LOGOUT, Logout);
  yield takeLatest(REQUEST_REGISTRATION, Register);
  yield takeLatest(SET_LOGGED_IN_STATE, LoggedIn);
  yield takeLatest(AUTH_TOKEN_EXPIRED, RefreshLogin);
}
