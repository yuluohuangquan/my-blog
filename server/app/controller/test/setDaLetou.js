'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

/**
 * 获取大乐透的数据导入到数据库
 */
class MainController extends Controller {
  async index() {
    const id = parseInt(this.ctx.params.id);
    const len = parseInt(this.ctx.params.len);

    const loadPage = async num => {
      const res = await axios({
        method: 'get',
        url: `http://kaijiang.500.com/shtml/dlt/${num}.shtml`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });
      const { data } = res;
      let result = {
        date: num,
        num1: null,
        num2: null,
        num3: null,
        num4: null,
        num5: null,
        num6: null,
        num7: null,
      };
      const data3 = data
        .toString()
        .split('<td>')[9]
        .split('</td>')[0];
      result.num1 = data3.split(' ')[0];
      result.num2 = data3.split(' ')[1];
      result.num3 = data3.split(' ')[2];
      result.num4 = data3.split(' ')[3];
      result.num5 = data3.split(' ')[4].split('|')[0];
      result.num6 = data3.split(' ')[4].split('|')[1];
      result.num7 = data3.split(' ')[5];
      console.log(result);
      return result;
    };

    const forMax = async () => {
      return new Promise(async resolve => {
        for (let i = id; i >= id - len; i--) {
          const res = await loadPage(i);
          const result = await this.app.mysql.insert('daletou', res);
          console.log(result);
          if (i === id - len && res) {
            resolve(true);
          }
        }
      });
    };

    // const sql =
    //   'SELECT article.id as id,' +
    //   'article.title as title,' +
    //   'article.introduce as introduce,' +
    //   'FROM_UNIXTIME(article.addTime,"%Y-%m-%d %H:%i:%s" ) as addTime,' +
    //   'article.view_count as view_count ,' +
    //   'type.typeName as typeName ' +
    //   'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
    //   'WHERE type_id=' +
    //   id
    // const resultData = await this.app.mysql.query(sql)
    const flag = await forMax();
    if (flag) {
      this.ctx.body = { data: '成功' };
    } else {
      this.ctx.body = { data: '错误' };
    }
  }
}

module.exports = MainController;
