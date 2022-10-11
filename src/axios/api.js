import { send } from "./request";

// TT
export function tt(data, repair = "", responseType = "") {
  return send({
    method: "get",
    url: "/user/staff/selStaff" + repair,
    data,
    responseType,
  });
}

