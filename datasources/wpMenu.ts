import axios, { AxiosInstance } from "axios";

function wpMenu(): AxiosInstance {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_WP_BASE_URL_MENU,
  });
}

export default wpMenu();
