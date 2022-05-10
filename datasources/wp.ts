import axios, { AxiosInstance } from "axios";

function wp(): AxiosInstance {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_WP_BASE_URL,
    params: {
      _embed: "wp:featuredmedia",
    },
  });
}

export default wp();
