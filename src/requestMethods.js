import axios from "axios";

const BASE_URL = process.env.REACT_APP_API || "http://localhost:5000/api/";
const TOKEN = localStorage.getItem("persist:root")
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
      ?.currentUser?.accessToken
  : "";
// console.log( localStorage.getItem('persist:root') ?
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
//     ?.currentUser?.accessToken : "";
//   "this is pesitoe"
// );

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
