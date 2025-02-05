import axios from "axios";

const REACT_APP_RAPID_API_KEY =
  "8bc20049b9mshd8f13d9071096a9p147dc1jsn1ea2fdd15239";
const REACT_APP_RAPID_API_URL = "https://sky-scrapper.p.rapidapi.com/api";

export const apiClient = axios.create({
  baseURL: REACT_APP_RAPID_API_URL,
  headers: {
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    "x-rapidapi-key": REACT_APP_RAPID_API_KEY,
    "Content-Type": "application/json",
  },
});
