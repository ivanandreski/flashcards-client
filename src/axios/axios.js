import axios from "axios";

const REACT_APP_API_URL = "http://localhost:5666/v1";

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    // "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
