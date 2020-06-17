'use strict';

const Controller = require('egg').Controller;

/**
 * 用户列表
 */
class MainController extends Controller {
  // 获取用户列表
  async getUserList() {
    const sql =
      'SELECT Id as id, name, password, last_time as lastTime, type FROM user';
    let result = await this.app.mysql.query(sql);
    result = JSON.stringify(result);
    result = JSON.parse(result);
    this.ctx.body = { data: result };
  }

  // 新增用户
  async addUser() {
    const { name, password, lastTime, type } = this.ctx.params;
    const user = {
      name,
      password,
      last_time: lastTime,
      type,
    };
    let result = await this.app.mysql.insert('user', user);
    this.ctx.body = { data: result };
  }

  // 删除用户
  async deleteUser() {
    const { Id } = this.ctx.params;
    let result = await this.app.mysql.delete('user', { Id });
    this.ctx.body = { data: result };
  }

  // 修改用户
  async editUser() {
    const { Id, name, password, lastTime, type } = this.ctx.params;
    const sql = `UPDATE user SET name = ${name}, password = ${password}, last_time = ${lastTime}, type = ${type} WHERE Id = ${Id}`;
    let result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = MainController;
