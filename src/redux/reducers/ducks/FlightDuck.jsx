import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  // Individual variables to store API data
  nearByAirports: null,
  searchAirportData: null,
  searchFlightsV2: null,
  searchFlightsV1: null,
  searchFlightsComplete: null,
  searchIncomplete: null,
  flightDetails: null,
  priceCalendar: null,
  multiStopFlights: null,
  flightEverywhere: null,
  flightEverywhereDeprecated: null,
  flightEverywhereDetailsDeprecated: null,
  searchFlightsWebComplete: null,

  // Loading states for each API call
  nearByAirportsLoading: false,
  searchAirportLoading: false,
  searchFlightsV2Loading: false,
  searchFlightsV1Loading: false,
  searchFlightsCompleteLoading: false,
  searchIncompleteLoading: false,
  flightDetailsLoading: false,
  priceCalendarLoading: false,
  multiStopFlightsLoading: false,
  flightEverywhereLoading: false,
  flightEverywhereDeprecatedLoading: false,
  flightEverywhereDetailsDeprecatedLoading: false,
  searchFlightsWebCompleteLoading: false,

  flightConfigList: null,

  // Config data
  flightConfig: {
    currency: "USD",
    market: "en-US",
    countryCode: "US",
    originSkyId: "LOND",
    destinationSkyId: "NYCA",
    originEntityId: "27544008",
    destinationEntityId: "27537542",
  },
  deviceLocation: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState: INITIAL_STATE,
  reducers: {
    // Request Reducers
    getNearByAirportsRequest: (state) => {
      state.nearByAirportsLoading = true;
    },
    searchAirportRequest: (state) => {
      state.searchAirportLoading = true;
    },
    searchFlightsV2Request: (state) => {
      state.searchFlightsV2Loading = true;
    },
    searchFlightsV1Request: (state) => {
      state.searchFlightsV1Loading = true;
    },
    searchFlightsCompleteRequest: (state) => {
      state.searchFlightsCompleteLoading = true;
    },
    searchIncompleteRequest: (state) => {
      state.searchIncompleteLoading = true;
    },
    getFlightDetailsRequest: (state) => {
      state.flightDetailsLoading = true;
    },
    getPriceCalendarRequest: (state) => {
      state.priceCalendarLoading = true;
    },
    searchFlightsMultiStopsRequest: (state) => {
      state.multiStopFlightsLoading = true;
    },
    searchFlightEverywhereRequest: (state) => {
      state.flightEverywhereLoading = true;
    },
    searchFlightEverywhereDeprecatedRequest: (state) => {
      state.flightEverywhereDeprecatedLoading = true;
    },
    searchFlightEverywhereDetailsDeprecatedRequest: (state) => {
      state.flightEverywhereDetailsDeprecatedLoading = true;
    },
    searchFlightsWebCompleteRequest: (state) => {
      state.searchFlightsWebCompleteLoading = true;
    },
    getRapidAPIConfigRequest: (state) => state,

    // Response Reducers
    updateNearByAirportsResponse(state, { payload }) {
      state.nearByAirports = payload?.response;
      state.nearByAirportsLoading = false;
    },
    updateSearchAirportResponse(state, { payload }) {
      state.searchAirportData = payload?.response;
      state.searchAirportLoading = false;
    },
    updateSearchFlightsV2Response(state, { payload }) {
      state.searchFlightsV2 = payload?.response;
      state.searchFlightsV2Loading = false;
    },
    updateSearchFlightsV1Response(state, { payload }) {
      state.searchFlightsV1 = payload?.response;
      state.searchFlightsV1Loading = false;
    },
    updateSearchFlightsCompleteResponse(state, { payload }) {
      state.searchFlightsComplete = payload?.response;
      state.searchFlightsCompleteLoading = false;
    },
    updateSearchIncompleteResponse(state, { payload }) {
      state.searchIncomplete = payload?.response;
      state.searchIncompleteLoading = false;
    },
    updateFlightDetailsResponse(state, { payload }) {
      state.flightDetails = payload?.response;
      state.flightDetailsLoading = false;
    },
    updatePriceCalendarResponse(state, { payload }) {
      state.priceCalendar = payload?.response;
      state.priceCalendarLoading = false;
    },
    updateSearchFlightsMultiStopsResponse(state, { payload }) {
      state.multiStopFlights = payload?.response;
      state.multiStopFlightsLoading = false;
    },
    updateSearchFlightEverywhereResponse(state, { payload }) {
      state.flightEverywhere = payload?.response;
      state.flightEverywhereLoading = false;
    },
    updateSearchFlightEverywhereDeprecatedResponse(state, { payload }) {
      state.flightEverywhereDeprecated = payload?.response;
      state.flightEverywhereDeprecatedLoading = false;
    },
    updateSearchFlightEverywhereDetailsDeprecatedResponse(state, { payload }) {
      state.flightEverywhereDetailsDeprecated = payload?.response;
      state.flightEverywhereDetailsDeprecatedLoading = false;
    },
    updateSearchFlightsWebCompleteResponse(state, { payload }) {
      state.searchFlightsWebComplete = payload?.response;
      state.searchFlightsWebCompleteLoading = false;
    },

    updateRapidAPIConfigResponse(state, { payload }) {
      state.flightConfigList = payload?.response;
    },

    setFlightConfigValue(state, { payload }) {
      state.flightConfig = payload;
    },
    setDeviceLocation(state, { payload }) {
      state.deviceLocation = payload;
    },
  },
});

export const {
  // Request actions
  getNearByAirportsRequest,
  searchAirportRequest,
  searchFlightsV2Request,
  searchFlightsV1Request,
  searchFlightsCompleteRequest,
  searchIncompleteRequest,
  getFlightDetailsRequest,
  getPriceCalendarRequest,
  searchFlightsMultiStopsRequest,
  searchFlightEverywhereRequest,
  searchFlightEverywhereDeprecatedRequest,
  searchFlightEverywhereDetailsDeprecatedRequest,
  searchFlightsWebCompleteRequest,
  getRapidAPIConfigRequest,

  // Response actions
  updateNearByAirportsResponse,
  updateSearchAirportResponse,
  updateSearchFlightsV2Response,
  updateSearchFlightsV1Response,
  updateSearchFlightsCompleteResponse,
  updateSearchIncompleteResponse,
  updateFlightDetailsResponse,
  updatePriceCalendarResponse,
  updateSearchFlightsMultiStopsResponse,
  updateSearchFlightEverywhereResponse,
  updateSearchFlightEverywhereDeprecatedResponse,
  updateSearchFlightEverywhereDetailsDeprecatedResponse,
  updateSearchFlightsWebCompleteResponse,
  updateRapidAPIConfigResponse,

  setFlightConfigValue,
  setDeviceLocation,
} = flightSlice.actions;

export default flightSlice.reducer;
