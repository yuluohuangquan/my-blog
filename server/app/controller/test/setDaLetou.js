'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

/**
 * 获取大乐透的数据导入到数据库
 */
class MainController extends Controller {
  async setData() {
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
      return result;
    };

    const forMax = async () => {
      return new Promise(async resolve => {
        for (let i = id; i >= id - len; i--) {
          const res = await loadPage(i);
          await this.app.mysql.insert('daletou', res);
          if (i === id - len) {
            resolve(true);
          }
        }
      });
    };

    const flag = await forMax();
    if (flag) {
      this.ctx.body = { data: `${id}成功` };
    } else {
      this.ctx.body = { data: `${id}错误` };
    }
  }

  async getData() {
    const { pagesize, pagenumber } = this.ctx.params;
    let sql = '';
    if (pagesize === '0' || pagenumber === '0') {
      sql =
        'SELECT date, num1, num2, num3, num4, num5, num6, num7 FROM daletou';
    } else {
      sql = `SELECT date, num1, num2, num3, num4, num5, num6, num7 FROM daletou
      LIMIT ${(parseInt(pagesize) - 1) * parseInt(pagenumber)} , ${parseInt(pagesize) * parseInt(pagenumber)}`;
    }
    let result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }

  async deleteData() {
    const sql =
      'SELECT Id as id, date, num1, num2, num3, num4, num5, num6, num7 FROM daletou';
    let result = await this.app.mysql.query(sql);
    result = JSON.stringify(result);
    result = JSON.parse(result);
    let dateList = [];
    let needDelete = [];
    result.forEach(item => {
      if (dateList.indexOf(item.date) > -1) {
        needDelete.push(item.id);
      } else {
        dateList.push(item.date);
      }
    });
    needDelete.forEach(async item => {
      await this.app.mysql.delete('daletou', { Id: item });
    });
    this.ctx.body = { data: needDelete };
  }
}

module.exports = MainController;
