import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../../reducers/ducks/FlightDuck";
import { flightsService } from "../../../services/flight/flightservice";
import { configService } from "../../../services/config/configService";

// Saga for Get Nearby Airports
export function* getNearByAirportsSaga({ payload }) {
  try {
    yield put(actions.updateNearByAirportsResponse({ response: null }));
    const response = yield call(flightsService.getNearByAirports(), payload);
    yield put(
      actions.updateNearByAirportsResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Airport
export function* searchAirportSaga({ payload }) {
  try {
    yield put(actions.updateSearchAirportResponse({ response: null }));
    const response = yield call(flightsService.searchAirport, payload);
    yield put(
      actions.updateSearchAirportResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Flights v2
export function* searchFlightsV2Saga({ payload }) {
  try {
    yield put(actions.updateSearchFlightsV2Response({ response: null }));
    const response = yield call(flightsService.searchFlightsV2, payload);
    yield put(
      actions.updateSearchFlightsV2Response({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Flights v1
export function* searchFlightsV1Saga({ payload }) {
  try {
    yield put(actions.updateSearchFlightsV1Response({ response: null }));
    const response = yield call(flightsService.searchFlightsV1, payload);
    yield put(
      actions.updateSearchFlightsV1Response({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Flights Complete
export function* searchFlightsCompleteSaga({ payload }) {
  try {
    yield put(actions.updateSearchFlightsCompleteResponse({ response: null }));
    const response = yield call(flightsService.searchFlightsComplete, payload);
    yield put(
      actions.updateSearchFlightsCompleteResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Incomplete Flights
export function* searchIncompleteSaga({ payload }) {
  try {
    yield put(actions.updateSearchIncompleteResponse({ response: null }));
    const response = yield call(flightsService.searchIncomplete, payload);
    yield put(
      actions.updateSearchIncompleteResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Get Flight Details
export function* getFlightDetailsSaga({ payload }) {
  try {
    yield put(actions.updateFlightDetailsResponse({ response: null }));
    const response = yield call(flightsService.getFlightDetails, payload);
    yield put(
      actions.updateFlightDetailsResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Get Price Calendar
export function* getPriceCalendarSaga({ payload }) {
  try {
    yield put(actions.updatePriceCalendarResponse({ response: null }));
    const response = yield call(flightsService.getPriceCalendar, payload);
    yield put(
      actions.updatePriceCalendarResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Multi-Stops Flights
export function* searchFlightsMultiStopsSaga({ payload }) {
  try {
    yield put(
      actions.updateSearchFlightsMultiStopsResponse({ response: null })
    );
    const response = yield call(
      flightsService.searchFlightsMultiStops,
      payload
    );
    yield put(
      actions.updateSearchFlightsMultiStopsResponse({
        response: response?.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Flights Everywhere
export function* searchFlightEverywhereSaga({ payload }) {
  try {
    yield put(actions.updateSearchFlightEverywhereResponse({ response: null }));
    const response = yield call(flightsService.searchFlightEverywhere, payload);
    yield put(
      actions.updateSearchFlightEverywhereResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Flights Everywhere Deprecated
export function* searchFlightEverywhereDeprecatedSaga({ payload }) {
  try {
    yield put(
      actions.updateSearchFlightEverywhereDeprecatedResponse({ response: null })
    );
    const response = yield call(
      flightsService.searchFlightEverywhereDeprecated,
      payload
    );
    yield put(
      actions.updateSearchFlightEverywhereDeprecatedResponse({
        response: response?.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Flight Everywhere Details Deprecated
export function* searchFlightEverywhereDetailsDeprecatedSaga({ payload }) {
  try {
    yield put(
      actions.updateSearchFlightEverywhereDetailsDeprecatedResponse({
        response: null,
      })
    );
    const response = yield call(
      flightsService.searchFlightEverywhereDetailsDeprecated,
      payload
    );
    yield put(
      actions.updateSearchFlightEverywhereDetailsDeprecatedResponse({
        response: response?.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

// Saga for Search Flights Web Complete
export function* searchFlightsWebCompleteSaga({ payload }) {
  try {
    yield put(
      actions.updateSearchFlightsWebCompleteResponse({ response: null })
    );
    const response = yield call(
      flightsService.searchFlightsWebComplete,
      payload
    );
    yield put(
      actions.updateSearchFlightsWebCompleteResponse({
        response: response?.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

// Config Service Saga
export function* getFlightConfigSaga({ payload }) {
  try {
    const response = yield call(configService.getConfig, payload);
    console.log(response, "OOLLLLLLLLLLLLLLLLLLLLLL");

    yield put(
      actions.updateRapidAPIConfigResponse({ response: response?.data })
    );
  } catch (error) {
    console.log(error);
  }
}

export function* watchFlightSagas() {
  yield takeLatest(
    actions.getNearByAirportsRequest.type,
    getNearByAirportsSaga
  );
  yield takeLatest(actions.searchAirportRequest.type, searchAirportSaga);
  yield takeLatest(actions.searchFlightsV2Request.type, searchFlightsV2Saga);
  yield takeLatest(actions.searchFlightsV1Request.type, searchFlightsV1Saga);
  yield takeLatest(
    actions.searchFlightsCompleteRequest.type,
    searchFlightsCompleteSaga
  );
  yield takeLatest(actions.searchIncompleteRequest.type, searchIncompleteSaga);
  yield takeLatest(actions.getFlightDetailsRequest.type, getFlightDetailsSaga);
  yield takeLatest(actions.getPriceCalendarRequest.type, getPriceCalendarSaga);
  yield takeLatest(
    actions.searchFlightsMultiStopsRequest.type,
    searchFlightsMultiStopsSaga
  );
  yield takeLatest(
    actions.searchFlightEverywhereRequest.type,
    searchFlightEverywhereSaga
  );
  yield takeLatest(
    actions.searchFlightEverywhereDeprecatedRequest.type,
    searchFlightEverywhereDeprecatedSaga
  );
  yield takeLatest(
    actions.searchFlightEverywhereDetailsDeprecatedRequest.type,
    searchFlightEverywhereDetailsDeprecatedSaga
  );
  yield takeLatest(
    actions.searchFlightsWebCompleteRequest.type,
    searchFlightsWebCompleteSaga
  );
  yield takeLatest(actions.getRapidAPIConfigRequest.type, getFlightConfigSaga);
}
