import { send } from "./request";

// 注册
export function register(data, repair = "", responseType = "") {
  return send({
    method: "post",
    url: "/jsonapi/register" + repair,
    data,
    responseType
  });
}

// 登录
export function login(data, repair = "", responseType = "") {
  return send({
    method: "post",
    url: "/jsonapi/login" + repair,
    data,
    responseType
  });
}

// 用户信息
export function userInfo(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/profile/get" + repair,
    data,
    responseType
  });
}

// 咨询列表
export function newsList(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/article/list" + repair,
    data,
    responseType
  });
}

// 咨询详情
export function newsDetail(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/article/get" + repair,
    data,
    responseType
  });
}

// 公告
export function noticeList(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/notice/list" + repair,
    data,
    responseType
  });
}

// 账户列表
export function bankList(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/bankInfo/list" + repair,
    data,
    responseType
  });
}

// 新增账户
export function bankAdd(data, repair = "", responseType = "") {
  return send({
    method: "post",
    url: "/jsonapi/bankInfo/save" + repair,
    data,
    responseType
  });
}

// 删除账户
export function backDel(data, repair = "", responseType = "") {
  return send({
    method: "post",
    url: "/jsonapi/bankInfo/del" + repair,
    data,
    responseType
  });
}

// 入金
export function insert(data, repair = "", responseType = "") {
  return send({
    method: "post",
    url: "/jsonapi/recharge/save" + repair,
    data,
    responseType
  });
}

// 出金
export function out(data, repair = "", responseType = "") {
  return send({
    method: "post",
    url: "/jsonapi/refunds/save" + repair,
    data,
    responseType
  });
}

// 账单
export function bill(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/bill/list" + repair,
    data,
    responseType
  });
}

// 管理用户
export function withList(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/profile/invite_report" + repair,
    data,
    responseType
  });
}

// 轮播
export function banner(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/banner/list" + repair,
    data,
    responseType
  });
}

// 配置
export function setting(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/jsonapi/setting/get" + repair,
    data,
    responseType
  });
}

// 重置密码
export function forget(data, repair = "", responseType = "") {
  return send({
    method: "post",
    url: "/jsonapi/restpassword" + repair,
    data,
    responseType
  });
}
