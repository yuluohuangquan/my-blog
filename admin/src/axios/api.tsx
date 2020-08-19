import axios from "axios";

let reqPrefix = "http://localhost:7001";

if (process.env.NODE_ENV === "production") {
  reqPrefix = "138.128.218.122:7001";
}

/**
 * 获取文章列表
 * @param
 */
export const getArticleList = () =>
  axios.get(`${reqPrefix}/front/getArticleList`);

/**
 * 获取类别列表
 * @param
 */
export const getTypeList = () =>
  axios.get(`${reqPrefix}/front/getTypeList`);

/**
 * 获取大乐透的数据
 * @param
 */
export const getDaLetou = ({ pagesize, pagenumber }: any) =>
  axios.get(`${reqPrefix}/features/getDaLetou/${pagesize}/${pagenumber}`);

/**
 * 测试接口
 * @param
 */
export const testApi = `${reqPrefix}/front/test`;
