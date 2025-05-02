import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export const HttpClient = axios.create({
  baseURL: "/api",
  timeout: 60 * 1 * 1000,
  timeoutErrorMessage: "Network Error",
  withCredentials: true,
});

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

  config.headers["Content-Type"] =
    config.headers["Content-Type"] != null &&
    config.headers["Content-Type"] !== undefined
      ? config.headers["Content-Type"]
      : "application/json";

  config.headers["Accept-Language"] = "en";
  config.headers["cache-control"] = "no-cache";
  // config.headers["x-trace-id"] = "26aa0863-6fc8-4595-8de3-9fb14ed77a72";
  // config.headers["x-api-key"] = API_KEY;
  // config.headers["X-Version"] = version;
  // const token = secureLocalStorage.getItem("securityToken");
  const token =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJUZWNoeSIsImlhdCI6MTc0NjEyMjQyOCwiZXhwIjoxNzQ3NDE4NDI4fQ.48YGd7kj3V7t9sPNoPEoPp06c13n4Dpb6CxRSo0eFEZ3secYQn6nAt6Hr5FZkPyo";
  // if (token && typeof token === "string") {
  // }
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
