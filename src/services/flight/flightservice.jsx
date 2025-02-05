import { apiClient } from "../api-client";

export const flightsService = {
  getNearByAirports: (params) => {
    const config = {
      method: "GET",
      // url: `/v1/flights/getNearByAirports?${params.join("&")}`,
      url: `/v1/flights/getNearByAirports`,
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchAirport: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchAirport",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightsV2: (params) => {
    const config = {
      method: "GET",
      url: "/v2/flights/searchFlights",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightsV1: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchFlights",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightsComplete: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchFlightsComplete",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchIncomplete: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchIncomplete",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  getFlightDetails: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/getFlightDetails",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  getPriceCalendar: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/getPriceCalendar",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightsMultiStops: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchFlightsMultiStops",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightEverywhere: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchFlightEverywhere",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightEverywhereDeprecated: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchFlightEverywhereDeprecated",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightEverywhereDetailsDeprecated: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchFlightEverywhereDetailsDeprecated",
      params: { ...params },
    };
    return apiClient.request(config);
  },

  searchFlightsWebComplete: (params) => {
    const config = {
      method: "GET",
      url: "/v1/flights/searchFlightsWebComplete",
      params: { ...params },
    };
    return apiClient.request(config);
  },
};
