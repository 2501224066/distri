import axios from "axios";
import vue from "@/main.js";

let load = null;

// 前置拦截
axios.interceptors.request.use(
  function(config) {
    if (load) load.hide();
    load = vue.$toast.loading(null, {
      duration: 0
    });
    return config;
  },
  function(error) {
    if (load) load.hide();
    return Promise.reject(error);
  }
);

// 后置拦截
axios.interceptors.response.use(
  response => {
    if (load) load.hide();
    return response;
  },
  error => {
    if (load) load.hide();
    return Promise.reject(error);
  }
);

export default axios;
