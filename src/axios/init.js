import axios from "axios";
import vue from "@/main.js";

// 前置拦截
axios.interceptors.request.use(
  function(config) {
    vue.toast.hide();
    vue.$toast.loading(null, {
      duration: 0
    });
    return config;
  },
  function(error) {
    this.toast.hide();
    return Promise.reject(error);
  }
);

// 后置拦截
axios.interceptors.response.use(
  response => {
    vue.toast.hide();
    return response;
  },
  error => {
    vue.toast.hide();
    return Promise.reject(error);
  }
);

export default axios;
