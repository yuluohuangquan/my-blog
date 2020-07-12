import axios from "axios";

let reqPrefix = "http://localhost:7001";

if (process.env.NODE_ENV === "production") {
  reqPrefix = "138.128.218.122:7001";
}

/**
 * 测试接口
 * @param
 */
export const testApi = `${reqPrefix}/front/test`;

/**
 * 获取大乐透的数据
 * @param
 */
export const getDaLetou = ({ pagesize, pagenumber } : any) =>
  axios.get(`${reqPrefix}/features/getDaLetou/${pagesize}/${pagenumber}`);
