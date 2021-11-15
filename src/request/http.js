
import axios from "axios";

export const http = axios.create({
  baseURL: 'https://api.asoul.cloud:8000',
  timeout: 10000,
})
