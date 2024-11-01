import ax from "axios";
const http = ax.create({
  baseURL: "https://banana.ecs.rootrez.com/api/publisher/v4.0",
});

http.interceptors.request.use(async (request) => {
  request.headers.Authorization = `Bearer empty for now`;

  return request;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default http;
