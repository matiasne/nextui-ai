import { useToast } from "@/components/ui/Toast/ToastProvider";
import ax from "axios";
const http = ax.create({
  withCredentials: false,
  baseURL: "https://banana.ecs.rootrez.com/api/client/v4.0",
});

http.interceptors.request.use(async (request) => {
  request.headers.Authorization = `Bearer empty for now`;

  return request;
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error.response;
  }
);

export default http;
