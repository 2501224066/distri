import axios from "./init";
import vue from "@/main.js";

// axios 使用 data 的 请求方式
const dataForMethod = ["POST", "PUT", "post", "put"];

// axios 使用 params 的 请求方式
const paramsForMethod = ["GET", "DETELE", "get", "detele"];

// 默认请求失败提示
const defaultFailMsg = "请求失败";

// 发送请求
export function send(obj) {
  let model = {
    method: obj.method,
    url: obj.url,
    headers: {
      Authorization: sessionStorage.token
    },
    data: dataForMethod.indexOf(obj.method) > -1 ? obj.data : null,
    params: paramsForMethod.indexOf(obj.method) > -1 ? obj.data : null,
    responseType: obj.responseType
  };
  return new Promise((resolve, reject) => {
    axios(model)
      .then(res => {
        if (res.data instanceof Blob) {
          // 判断是否为 Blob 对象
          resolve(res);
        } else if (res.data.code === 200) {
          // 请求是否成功
          resolve(res.data);
        } else if (res.data.code === 401) {
          // 登录失效
          vue.$toast.fail("登录失效，请重新登录");
          setTimeout(() => {
            vue.$router.push({ name: "login" });
          }, 2000);
        } else if (res.data.ret === 500) {
          // 接口返回错误信息
          vue.$toast.fail(res.data.msg || defaultFailMsg);
        } else {
          // 提示错误信息
          vue.$toast.fail(defaultFailMsg);
        }
      })
      .catch(err => {
        vue.$toast.fail(defaultFailMsg);
      });
  });
}
