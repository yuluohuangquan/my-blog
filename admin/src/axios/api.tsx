let reqPrefix = "http://localhost:7001";

if (process.env.NODE_ENV === "production") {
  reqPrefix = "https://apiblog.jspang.com";
}
/**
 * 测试接口
 * @param
 */
export const testApi = `${reqPrefix}/front/test`;
