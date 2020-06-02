const Koa = require("koa");
const app = new Koa();
const axios = require("axios");

const max = 20044;
let result = {};

app.use(async ctx => {
  const { url } = ctx;
  if (url === "/") {
    const flag = await forMax();
    console.log("终于好了");
    if (flag) {
      ctx.body = result;
    } else {
      ctx.body = "失败";
    }
  }
});

const forMax = async () => {
  return new Promise(async (resolve, reject) => {
    for (let i = max; i > 20035; i--) {
      console.log("i：", i);
      const res = await loadPage(i);
      if (i === 20036 && res) {
        resolve(true);
      }
    }
  });
};

const loadPage = async num => {
  const res = await axios({
    method: "get",
    url: `http://kaijiang.500.com/shtml/dlt/${num}.shtml`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
  const { data } = res;
  result[num] = [];
  result[num][0] = [];
  result[num][1] = [];
  const data1 = data
    .toString()
    .split("<td>")[7]
    .split('<li class="ball_red">');
  const data2 = data
    .toString()
    .split("<td>")[7]
    .split('<li class="ball_blue">');
  result[num][0].push(
    data1[1].split("</li>")[0],
    data1[2].split("</li>")[0],
    data1[3].split("</li>")[0],
    data1[4].split("</li>")[0],
    data1[5].split("</li>")[0],
    data2[1].split("</li>")[0],
    data2[2].split("</li>")[0]
  );
  const data3 = data
    .toString()
    .split("<td>")[9]
    .split("</td>")[0];
  result[num][1].push(
    data3.split(" ")[0],
    data3.split(" ")[1],
    data3.split(" ")[2],
    data3.split(" ")[3],
    data3.split(" ")[4].split("|")[0],
    data3.split(" ")[4].split("|")[1],
    data3.split(" ")[5]
  );
  return result;
};

app.listen(4399);

console.log("批量抓取大乐透页面");
