import { CONSTANTS } from "@/utilities/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: CONSTANTS.BASE_URL, 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json", 
  },
});

