import { all } from "redux-saga/effects";
import { watchFlightSagas } from "./sagas/FlightSaga";

export default function* rootSaga() {
  yield all([watchFlightSagas()]);
}
