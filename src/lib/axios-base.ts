import axios from "axios";

export const axiosBaseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
