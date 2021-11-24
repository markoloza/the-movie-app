import axios from "axios";

const defaults = {
  baseURL: "https://api.themoviedb.org",
  headers: () => ({
    "Content-Type": "application/json",
  }),
};

const api = (method, url, variables) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          if (error.response.data.error.code === "INVALID_TOKEN") {
            removeStoredAuthToken();
            history.push("/authenticate");
          } else {
            reject(error.response.data.error);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });

export default {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
};
