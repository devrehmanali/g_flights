import { apiClient } from "../api-client";

export const configService = {
  getLocale: (params) => {
    const config = {
      method: "GET",
      url: "/v1/getLocale",
      params: {
        ...params,
      },
    };
    return apiClient.request(config);
  },
  getConfig: (params) => {
    const config = {
      method: "GET",
      url: "/v1/getConfig",
      params: {
        ...params,
      },
    };
    return apiClient.request(config);
  },
  checkServer: (params) => {
    const config = {
      method: "GET",
      url: "/v1/checkServer",
      params: {
        ...params,
      },
    };
    return apiClient.request(config);
  },
};
