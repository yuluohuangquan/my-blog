'use strict';

const Controller = require('egg').Controller;

/**
 * 用户列表
 */
class MainController extends Controller {
  // 获取用户列表
  async getUserList() {
    const sql = 'SELECT Id, name, password, last_time, type FROM user';
    let result = await this.app.mysql.query(sql);
    result = JSON.stringify(result);
    result = JSON.parse(result);
    this.ctx.body = { data: result };
  }
}

module.exports = MainController;
