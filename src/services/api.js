const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "${API_BASE_URL}"
    : "https://coursesphere-api.onrender.com";

export default API_BASE_URL;
