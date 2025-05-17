import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export const HttpClient = axios.create({
  baseURL: "http://144.126.200.46/api/",
  timeout: 60 * 1 * 1000,
  timeoutErrorMessage: "Network Error",
  // withCredentials: true,
});
// cors
HttpClient.interceptors.request.use(async (config) => {
  addHeaders(config);
  const method = config.method?.toUpperCase();
  let methodColor;
  switch (method) {
    case "GET":
    case "HEAD":
      methodColor = "#6BDD9A";
      break;

    case "POST":
      methodColor = "#FFE47E";
      break;

    case "PUT":
      methodColor = "#7AEF6";
      break;

    case "PATCH":
      methodColor = "#C0A8E1";
      break;

    case "DELETE":
      methodColor = "#F79A8E";
      break;

    case "OPTIONS":
      methodColor = "#F15EB0";
      break;

    default:
      methodColor = undefined;
      break;
  }

  console.log(
    `🚀 Sending %c${method} %cRequest to %c${config.url}`,
    `color: ${methodColor}`,
    "color: undefined",
    "color: #f09b51",
    config
  );

  return config;
});

const addHeaders = (config) => {
  config.headers["Accept"] = "*/*";

  // config.headers["Content-Type"] =
  //   config.headers["Content-Type"] != null &&
  //   config.headers["Content-Type"] !== undefined
  //     ? config.headers["Content-Type"]
  //     : "application/json";

  config.headers["Accept-Language"] = "en";
  config.headers["cache-control"] = "no-cache";
  const token =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJUZWNoeSIsImlhdCI6MTc0NzI0MTA4OSwiZXhwIjoxNzQ3ODQ1ODg5fQ.tND5sH9KUksdx6wrDPWIo6obVabC-v6Pv1Z3M_5t2YJn2XMYCki__rm14IzkWxIZ";
  config.headers["Authorization"] = `Bearer ${token}`;
};

HttpClient.interceptors.response.use(
  async (response) => {
    console.log(
      `✅ Got Response from %c${response.config.url}`,
      "color: #f09b51",
      response
    );
    return response;
  },
  async (error) => {
    console.log("error code ", error);
    if (axios.isAxiosError(error)) return handleAxiosError(error);

    console.log("Unexpected Error: ", error);

    return Promise.reject({ ...error, errorMessage: "Unknown error" });
  }
);

const handleAxiosError = (error) => {
  const status = error.response?.status;
  if (status !== 401) {
    console.log("=====error404 ", error);
  } else {
    handle401(error);
  }
  return Promise.reject({ ...error });
};

const handle401 = (error) => {
  console.log("=======error401", error);
  //To be written
};
