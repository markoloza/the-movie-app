import axios from "axios";
const baseURL = "https://api.themoviedb.org/3/";


//Keys and other important data would usually be stored in .env file
export const API_KEY = "55f30e0022207ec3098725b3214a5a92";

export const api = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});
